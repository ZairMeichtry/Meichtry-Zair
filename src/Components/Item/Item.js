import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <article className="CardItem">
      <header className='Header'>
        <h2 className='ItemHeader'>{product.name}</h2>
      </header>
      <img src={product.img} alt={product.name} className='ItemImg' />
      <section>
        <p className='Info'>Price: ${product.price}</p>
        <p className='Info'>Stock Disponible: {product.stock}</p>
      </section>
      <footer>
        <Link to={`/product/${product.id}`} className='Option'>Ver detalle</Link>
      </footer>
    </article>
  );
};

export default Item;
