import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {
    return (
        <article className="CardItemDetail">
            <header className='Header'>
                <h2 className='ItemHeader'>{product.name}</h2>
            </header>
            <img src={product.img} alt={product.name} className='ItemImg' />
            <section>
                <p className='Info'>Price: ${product.price}</p>
                <p className='Info'>Stock Disponible: {product.stock}</p>
                <p className='Info'>Descripción: {product.descripcion}</p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial= {1} stock= {product.stock} onAdd={(quantity)=> console.log('Cantidad Agregada', quantity)}/>
            </footer>
        </article>
    );
};

export default ItemDetail;
