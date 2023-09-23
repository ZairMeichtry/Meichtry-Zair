import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import logo from './assets/logo.png'

const NavBar = () => {
  return (
    <nav className="navbar">
        <Link to='/' className='logo'><h1>Sport Store</h1></Link>
        <ul className="menu">
            <li><Link className='menu-link' to='/Nike'>Nike</Link></li>
            <li><Link className='menu-link' to='/Puma'>Puma</Link></li>
            <li><Link className='menu-link' to='/Adidas'>Adidas</Link></li>
            <li><CartWidget /></li>
        </ul>
        </nav>
  )
}

export default NavBar
