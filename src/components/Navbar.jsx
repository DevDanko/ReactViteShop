import React from 'react'
import './Navbar.css'

class Navbar extends React.Component {
  render() {
    const { onPageChange } = this.props

    return (
      <nav className="navbar">
        <div className="left-menu">
          <button onClick={() => onPageChange('home')}>Home</button>
          <button onClick={() => onPageChange('products')}>Products</button>
        </div>
        <div className="right-menu">
          <button onClick={() => onPageChange('cart')}>Cart</button>
        </div>
      </nav>
    )
  }
}

export default Navbar
