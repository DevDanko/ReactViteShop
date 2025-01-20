import React from 'react'
import './ProductDetails.css'

class ProductDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null,
      loading: true
    }
  }

  componentDidMount() {
    const { productId } = this.props
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ product: data, loading: false })
      })
  }

  render() {
    const { product, loading } = this.state
    const { addToCart, onBack } = this.props

    if (loading) {
      return <div className="product-details">Loading...</div>
    }

    if (!product) {
      return <div className="product-details">Product not found</div>
    }

    return (
      <div className="product-details">
        <button className="back-button" onClick={onBack}>← Back to Products</button>
        <div className="product-details-content">
          <div className="product-image-container">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <h1>{product.title}</h1>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button 
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails
