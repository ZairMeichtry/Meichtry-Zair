import { Link } from "react-router-dom"


const Item = ({producto}) => {
    return (
      <div className="producto">
              <img src={producto.image} alt={producto.title}></img>
          <div>
              <h2>{producto.title}</h2>
              <h4>Categoria: {producto.category}</h4>
              <p>Precio: ${producto.price}</p>
              <p>{producto.stock}</p>
              <Link className="ver-mas" to={`/item/${producto.id}`}>ver mas</Link>
              </div>
      </div>
    )
  }
  
  export default Item