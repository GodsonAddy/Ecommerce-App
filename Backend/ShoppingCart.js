const express = require("express");
const productRouter = express.Router();
const products = require('../src/ProdCart');
const bodyParser = require('body-parser');
const shop = require("./MongoES");



productRouter.use(bodyParser.json());

// Get all blogs
productRouter.get("/", (req, res) => res.json(products));

// get a single blog
productRouter.get("/:id", (req, res) => {
    const found = products.some(product => product.id === parseInt(req.params.id));
    if (found) {
        return res.json(products.filter(product => product.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No order with the id of ${req.params.id}`})
    }
});

// create a blog
productRouter.post("/", (req, res, next) => {
    
    const newproduct = new shop.shopModel ({
        title: req.body.title,
        date: new Date(),
        id: req.body.author,
        avalableSizes: req.body.avalableSizes,
        price: req.body.price,
        isFreeShipping: req.body.isFreeShipping
    })
    if (newproduct === undefined) {
         return res.status(400).json({
            error: "order missing"
        })
    }  
   
    products.push(newproduct);
    res.status(200).json(products)
    
    newproduct.save()
    .then(savedProduct => savedProduct.toJSON())
    .then(savedAndFormattedProduct => {
      res.json(savedAndFormattedProduct)
    })
    .catch(error => next(error))
});

productRouter.get("/", (req,res) => {
    shop.find({}).pretty()
    .then(produce => {
        res.send(produce.map(product => product.toJSON()))
    })
})

productRouter.get("/", (req,res) => {
    shop.remove({}).pretty()
    .then(produce => {
        res.send(produce.map(product => product.toJSON()))
    })
})
productRouter.get("/", (req,res) => {
    shop.update({}).pretty()
    .then(produce => {
        res.send(produce.map(product => product.toJSON()))
    })
})
productRouter.get("/:id", (req,res,next) => {
    shop.findById(req.params.id).pretty()
    .then(product => {
        if(product){
            res.json(product.toJSON())
        }
        else {
            res.status(404).end()
        }
    })
    .catch(error => 
        next(error)
    )
    
})


module.exports = productRouter;