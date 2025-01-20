import React from 'react'
import './Home.css'

/**
 * Компонент домашней страницы
 * @component
 * Отображает приветственное сообщение и краткое описание магазина
 */
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to Our Store</h1>
        <p>Find the best products at the best prices</p>
      </div>
    )
  }
}

export default Home
