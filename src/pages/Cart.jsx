import React from 'react'
import './Cart.css'

class Cart extends React.Component {
  render() {
    const { items } = this.props

    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="cart-items">
            {items.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total: ${items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</h3>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Cart
