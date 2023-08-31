import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(productId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [productId]);

  return (
    <div className="ItemDetailContainer">
      {product ? <ItemDetail product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default ItemDetailContainer;
