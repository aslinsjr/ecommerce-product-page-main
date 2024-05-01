import { useState } from 'react'

import NavBar from './components/NavBar'
import ProductComponent from './components/ProductComponent'

import './App.css'

function App() {

  const [selectedImgId, setSelectedImgId] = useState(0)
  const [cartProduct, setCartProduct] = useState({})

  function handleClick(e) {

    setSelectedImgId(e.target.id)
  }

  let selectedImg = `public/images/image-product-${selectedImgId}.jpg`

  if(selectedImgId > 4) {
    setSelectedImgId(0)
  }

  class Product {
    constructor(image, title, price, quantity) {
        this.image = image;
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    };
  }

  function handleCartAdd(quantity) {

    let image = "public/images/image-product-1-thumbnail.jpg";
    let title = "Fall Limited Edition Sneakers";
    let price = 125;

    let addCartProduct = new Product(image, title, price.toFixed(2), quantity)
    setCartProduct(addCartProduct)
    window.scrollTo(0,0)
  }

  function handleClean() {
    setCartProduct({})
  }
  
  return (
    <div>
      {selectedImg !== "public/images/image-product-0.jpg" ? 
      <div id="light-box">
        <img id='close-box-btn' src="public/images/icon-close.svg" alt="Close Icon" onClick={() => setSelectedImgId(0)}/>
        <img className='navegate-btn' id='left-btn' src="public/images/icon-previous.svg" alt="Previus Icon" onClick={() => setSelectedImgId(+selectedImgId -1)}/>
        <img id="light-box-img" src={selectedImg}alt="Selected Img" />
        <img className='navegate-btn' id='right-btn' src="public/images/icon-next.svg" alt="Next Icon" onClick={() => setSelectedImgId(+selectedImgId +1)}/>
      </div> : <></>}
      <NavBar cartProduct={cartProduct} handleClean={handleClean}/>
      <ProductComponent selectedImg={selectedImg} handleClick={handleClick} handleCartAdd={handleCartAdd}/>
      <div className="background"></div>
    </div>
  )
}

export default App
