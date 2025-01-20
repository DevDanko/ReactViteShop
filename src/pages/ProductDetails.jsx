import React from 'react'
import './ProductDetails.css'

/**
 * Компонент страницы с детальной информацией о товаре
 * @component
 * @param {Object} props
 * @param {number} props.productId - ID товара для отображения
 * @param {Function} props.addToCart - Функция добавления товара в корзину
 * @param {Function} props.onBack - Функция возврата к списку товаров
 */
class ProductDetails extends React.Component {
  constructor(props) {
    super(props)
    // Инициализация состояния
    this.state = {
      product: null,  // Данные о товаре
      loading: true  // Флаг загрузки
    }
  }

  /**
   * Загрузка данных о товаре при монтировании компонента
   */
  componentDidMount() {
    const { productId } = this.props
    // Запрос данных о конкретном товаре
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ product: data, loading: false })
      })
  }

  render() {
    const { product, loading } = this.state
    const { addToCart, onBack } = this.props

    // Отображение состояния загрузки
    if (loading) {
      return <div className="product-details">Loading...</div>
    }

    // Проверка наличия данных о товаре
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
