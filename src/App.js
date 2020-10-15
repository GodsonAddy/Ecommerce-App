import React, { useEffect, useState } from 'react';
import './App.css';
import Products from './components/Products';
import Basket from './components/Basket';
import Filter from './components/Filter';


const App = (product, count) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      setFilteredProducts(data)
    })
    .catch(err => console.log(err))
    return () => {
      if(localStorage.getItem('cartItems')) {
        setCartItems(JSON.parse(localStorage.getItem('cartItems')))
      }
    }
  }, []);

  const handleChangeSort = (e) => {
    setSort(e.target.value);
    listProducts()
  }

  const handleRemoveFromCart = (e, item) => {
    cartItems.filter(product => product.id !== item.id);
    localStorage.setItem("cartItems", cartItems);
    return cartItems

  }

  const handleChangeSize = (e) => {
    setSize(e.target.value);
    listProducts()
  }

  const listProducts = () => {
    
    if(sort !== "") {
      products.sort((a,b) => (sort === "lowest") ? (a.price < b.price ? 1: -1) : (a.price > b.price ? 1 : -1))
    }
    else {
      products.sort((a,b) => (a.id < b.id ? 1 : -1));
    }
    if(size !== "") {
      return setFilteredProducts(products.filter(a => a.availableSizes.indexOf(size.toUpperCase()) >= 0))
    }
    return setFilteredProducts(products)
  }
  
  const handleAddToCart = () => {
    
    let productAlreadyInCart = false;
    cartItems.forEach(item => {
      if (item.id === product.id) {
        productAlreadyInCart = true;
       return item.count++
      }
    })
    if(!productAlreadyInCart) {
      cartItems.push({...product, count: 1});
    }
    localStorage.setItem("carItems", JSON.stringify(cartItems));
    return cartItems;
  }
  
  return (
    <div>
      <div className="container">
        <h1>Ecommerce Shopping</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
          <Filter size={size} sort={sort} handleChangeSize={handleChangeSize} 
          handleChangeSort={handleChangeSort} count={filteredProducts.length} />
          <hr />
            <Products products={filteredProducts} handleAddToCart={handleAddToCart} />
          </div>
          <div className="col-md-4">
           <Basket handleRemoveFromCart={handleRemoveFromCart} cartItems={cartItems} />
          </div>
        </div>
          
      </div>
  </div>
  );
}



export default App;
