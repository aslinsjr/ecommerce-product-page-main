import { useState } from 'react'

import './NavBar.css'

import CartComponent from './CartComponent'

const NavBar = ({cartProduct, handleClean}) => {

  const [showCart, setShowCart] = useState(false)

  function handleShowCart() {
    if(showCart == false) {
      setShowCart(true)
    }else {
      setShowCart(false)
    }
  }

  return (
    <div className='nav-bar'>
      <div className="logo-and-nav">
        <img src="public/logo.svg" alt="Logo Img" />
        <nav>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <div className="cart-and-profile">
        <img id='cart-icon' onClick={() => handleShowCart()} src="public/images/icon-cart.svg" alt="Cart Icon" />
        <img id="image-avatar" src="public/images/image-avatar.png" alt="Avatar Image" />
      </div>
      {cartProduct.quantity || showCart ? <CartComponent cartProduct={cartProduct} handleClean={handleClean}/> : <></>}
    </div>
   
    
  )
}

export default NavBar