import React from 'react'
import './Navbar.css'

/**
 * Компонент навигационной панели
 * @component
 * @param {Object} props
 * @param {Function} props.onPageChange - Функция для смены активной страницы
 */
class Navbar extends React.Component {
  render() {
    const { onPageChange } = this.props

    return (
      <nav className="navbar">
        {/* Левое меню с кнопками Home и Products */}
        <div className="left-menu">
          <button onClick={() => onPageChange('home')}>Home</button>
          <button onClick={() => onPageChange('products')}>Products</button>
        </div>
        {/* Правое меню с кнопкой Cart */}
        <div className="right-menu">
          <button onClick={() => onPageChange('cart')}>Cart</button>
        </div>
      </nav>
    )
  }
}

export default Navbar
