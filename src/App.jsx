import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import './App.css'

/**
 * Главный компонент приложения
 * Управляет состоянием и навигацией между страницами
 */
class App extends React.Component {
  constructor(props) {
    super(props)
    // Инициализация начального состояния
    this.state = {
      currentPage: 'home',     // Текущая активная страница
      cart: [],               // Корзина товаров
      products: [],          // Список всех товаров
      selectedProductId: null // ID выбранного товара
    }
  }

  /**
   * Загрузка данных при монтировании компонента
   */
  componentDidMount() {
    // Получение списка товаров с API
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data })
      })
  }

  /**
   * Обработчик смены страницы
   * @param {string} page - Идентификатор страницы
   */
  handlePageChange = (page) => {
    this.setState({ 
      currentPage: page,
      selectedProductId: null // Сброс выбранного товара при смене страницы
    })
  }

  /**
   * Обработчик выбора товара для просмотра деталей
   * @param {number} productId - ID выбранного товара
   */
  handleProductSelect = (productId) => {
    this.setState({
      currentPage: 'product-details',
      selectedProductId: productId
    })
  }

  /**
   * Добавление товара в корзину
   * @param {Object} product - Объект товара
   */
  addToCart = (product) => {
    this.setState(prevState => ({
      cart: [...prevState.cart, product]
    }))
  }

  /**
   * Рендер текущей активной страницы
   * @returns {React.Component}
   */
  renderPage() {
    const { currentPage, selectedProductId } = this.state
    
    switch(currentPage) {
      case 'home':
        return <Home />
      case 'products':
        return <Products 
          products={this.state.products} 
          addToCart={this.addToCart}
          onProductSelect={this.handleProductSelect}
        />
      case 'cart':
        return <Cart items={this.state.cart} />
      case 'product-details':
        return <ProductDetails 
          productId={selectedProductId}
          addToCart={this.addToCart}
          onBack={() => this.handlePageChange('products')}
        />
      default:
        return <Home />
    }
  }

  render() {
    return (
      <div className="app">
        <Navbar onPageChange={this.handlePageChange} />
        <main className="main-content">
          {this.renderPage()}
        </main>
      </div>
    )
  }
}

export default App
