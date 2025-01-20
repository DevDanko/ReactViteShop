import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'home',
      cart: [],
      products: [],
      selectedProductId: null
    }
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data })
      })
  }

  handlePageChange = (page) => {
    this.setState({ 
      currentPage: page,
      selectedProductId: null
    })
  }

  handleProductSelect = (productId) => {
    this.setState({
      currentPage: 'product-details',
      selectedProductId: productId
    })
  }

  addToCart = (product) => {
    this.setState(prevState => ({
      cart: [...prevState.cart, product]
    }))
  }

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
