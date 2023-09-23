import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import cart from './assets/cart.png'

export const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext)
  return (
    <div>
        <Link className='menu-link' to='/cart'>
            <img className='cart-widget' src={cart} />
            <span className='numerito'>{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}
