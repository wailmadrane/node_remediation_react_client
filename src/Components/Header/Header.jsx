
import React from 'react'
import './Header.css'
import Title from '../Title/Title'

const Header = ({ title, description }) => {
  return (
    <header className="hero">
      <Title heading={ title }/>
      <div className="fz1">{description}</div>
    </header>
  )
}

export default Header