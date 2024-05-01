
import './CartComponent.css'

const CartComponent = ({cartProduct, handleClean}) => {

  return (
    <div className='cart-container'>
        <p id='cart'>Cart</p>
        <div className="line"></div>
        {!cartProduct.quantity || cartProduct.quantity == 0 ? <p id='empty-cart'>Your cart is empty</p> : <>
        <div className="product-cart">
            <img id='product-image-cart' src={cartProduct.image} alt="" />
            <div className="product-informations">
              <p id="product-cart-title">{cartProduct.title}</p>
              <div className="price">
                <p id='product-price'>{"$" + cartProduct.price}</p>
                <p>{"x" + cartProduct.quantity}</p>
                <p id="total-price">{"$" + (cartProduct.price * cartProduct.quantity).toFixed(2)}</p>
              </div>
            </div>
            <img id='delete-icon' src="./icon-delete.svg" alt="Delete Icon" onClick={() => handleClean()} />
        </div>
        <button id='checkout-btn' onClick={() => window.location.reload()}>Checkout</button>
        </>}
    </div>
  )
}

export default CartComponent