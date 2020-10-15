import React from 'react'
import util from "../util";


 
 
const Products = ({products, handleAddToCart}) => {

    let productItems
    if(products) {
        productItems = products.map(product => {
        return <div className="col-md-4" key={product.id}>
            <div className="thumbnail text-center">
                <a href={`#${product.id}`} 
                    onClick={(e) => handleAddToCart(e, product) }>
                    <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
                    <p>
                        {product.title} 
                    </p>
                </a>
            </div>
            
            <b>{util.formatCurrency(product.price)}</b>
            <button className="btn btn-primary"
                onClick={(e) => handleAddToCart(e, product)}>
                Add To Cart 
            </button>
        </div>
        });
    }else {
        productItems = "Loading...";
      }
    

    return (
        <div className="row">
           {productItems} 
        </div>
    )
    
}



export default Products;