import { useState } from 'react'

import './NavBar.css'

import CartComponent from './CartComponent'

const NavBar = ({cartProduct, handleClean}) => {

  const [showCart, setShowCart] = useState(false)
  const [mobileMenu, setMobileMenu] = useState("./icon-menu.svg")

  function handleShowCart() {
    if(showCart == false) {
      setShowCart(true)
    }else {
      setShowCart(false)
    }
  }

  function handleMenuMoile(e) {

    setMobileMenu("./icon-menu-close.svg")

    const navMobile = document.querySelector("nav")
    navMobile.classList.toggle("show")

    const background = document.querySelector(".background")
    background.classList.toggle("mobile-show")

    const body = document.querySelector("body")
    body.classList.toggle("hidden-overflow")

    if(e.target.src.includes("close")) {
      setMobileMenu("./icon-menu.svg")
    }
  }

  return (
    <div className='nav-bar'>
      <img id='mobile-menu' onClick={(e) => handleMenuMoile(e) } src={mobileMenu} alt="Mobile Icon" />
      <div className="logo-and-nav">
        <img src="./logo.svg" alt="Logo Img" />
        <nav>
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
      <div className="cart-and-profile">
        <img id='cart-icon' onClick={() => handleShowCart()} src="./icon-cart.svg" alt="Cart Icon" />
        <img id="image-avatar" src="./image-avatar.png" alt="Avatar Image" />
      </div>
      {cartProduct.quantity || showCart ? <CartComponent cartProduct={cartProduct} handleClean={handleClean}/> : <></>}
    </div>
   
    
  )
}

export default NavBar