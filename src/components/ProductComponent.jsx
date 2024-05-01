import './ProductComponent.css'

import { useState } from 'react'

const ProductComponent = ({selectedImg, handleClick, handleCartAdd}) => {

    const [quantity, setQuantity] = useState(0)
    const [selectedImgMobile, setSelectedImgMobile] = useState(1)

    if (selectedImgMobile > 4) {
        setSelectedImgMobile(1)
    }

    if (selectedImgMobile < 1) {
        setSelectedImgMobile(4)
    }

    if(quantity < 0) {
        setQuantity(0)
    }

  return (
    <div className='product-container'>
        <div className="images-show">
            <img className='navegate-btn-mobile' id='left-btn-mobile' src="public/icon-previous.-white.svg" alt="Previus Icon" onClick={() => setSelectedImgMobile(+selectedImgMobile -1)}/>
            <img id='product-large-image' src={`public/images/image-product-${selectedImgMobile}.jpg`} alt={`Image ${selectedImgMobile}`} />
            <img className='navegate-btn-mobile' id='right-btn-mobile' src="public/icon-next-white.svg" alt="Next Icon" onClick={() => setSelectedImgMobile(+selectedImgMobile +1)}/>
            <div className="thumbnail-images">
                <img id='1' style={selectedImg.includes("1-thumbnail") ? {opacity:'0.50'} : {}} className='thumbnail'  src="public/images/image-product-1-thumbnail.jpg" alt=" Product Image Thumbnail 01" onClick={(e) => handleClick(e)} />
                <img id='2' style={selectedImg.includes("2-thumbnail") ? {opacity:'0.50'} : {}} className='thumbnail' src="public/images/image-product-2-thumbnail.jpg" alt=" Product Image Thumbnail 02" onClick={(e) => handleClick(e)} />
                <img id='3' style={selectedImg.includes("3-thumbnail") ? {opacity:'0.50'} : {}} className='thumbnail' src="public/images/image-product-3-thumbnail.jpg" alt=" Product Image Thumbnail 03" onClick={(e) => handleClick(e)} />
                <img id='4' style={selectedImg.includes("4-thumbnail") ? {opacity:'0.50'} : {}} className='thumbnail' src="public/images/image-product-4-thumbnail.jpg" alt=" Product Image Thumbnail 04" onClick={(e) => handleClick(e)} />
            </div>
        </div>
        <div className="description-product">
            <p id='company'>Sneaker Company</p>
            <h2 id='product-title'>Fall Limited Edition Sneakers</h2>
            <p id='product-description'>These low-profile sneakers are your prfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="price-container">
                <div className="price-and-discount">
                <span id='actual-price'>$125.00</span>
                <span id='discount'>50%</span>
                </div>
                <span id='old-price'>$250.00</span>
            </div>
            <div className="cart-add-options">
                <div className="quantity-products">
                    <button id='minus-btn' onClick={() => setQuantity(quantity - 1)}><img src="public/images/icon-minus.svg" alt="Minus Icon" /></button>
                    <p id='quantity'>{quantity}</p>
                    <button id='minus-btn' onClick={() => setQuantity(quantity + 1)}><img src="public/images/icon-plus.svg" alt="Plus Icon" /></button>
                </div>
                <button id='add-cart' onClick={() => handleCartAdd(quantity)}><img src="public/images/icon-cart2.svg" alt="Cart Icon" />Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductComponent