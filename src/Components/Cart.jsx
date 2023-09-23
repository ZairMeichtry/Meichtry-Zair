import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () =>{
        vaciarCarrito();
    }
  return (
    <div className='container'>
        <h1 className='main-title'>Cart</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                <h2>{prod.title}</h2>
                <p>Precio Unit: ${prod.price}</p>
                <p>SubTotal: ${prod.price * prod.cantidad}</p>
                <p>Cant: {prod.cantidad}</p>
                </div>
            ))
        }
        
        {
            carrito.length > 0 ? 
            <div>
            <h2>Precio Total: ${precioTotal()}</h2>
            <button onClick={handleVaciar}>Vaciar</button>
            <Link to="/checkout"> Finalizar Compra</Link>
            </div> :
            <h2>El carrito esta vacio</h2>
        }
    </div>
  )
}

export default Cart;
