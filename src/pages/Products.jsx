import React from 'react'
import './Products.css'

class Products extends React.Component {
  handleAddToCart = (e, product) => {
    e.stopPropagation()
    this.props.addToCart(product)
  }

  render() {
    const { products, onProductSelect } = this.props

    return (
      <div className="products-grid">
        {products.map(product => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => onProductSelect(product.id)}
          >
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button 
              onClick={(e) => this.handleAddToCart(e, product)} 
              className="add-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    )
  }
}

export default Products
