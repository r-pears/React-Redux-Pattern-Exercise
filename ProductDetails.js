import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import CartIcons from './CartIcons';

/** Show detail page for a product
 * 
 * Routes /products:id -> ProductDetails -> CartIcons
 */
function ProductDetails() {
  const { id } = useParams();
  const { image_url, name, price, description } = useSelector(
    (store) => ({
      ...store.products[id],
    }),
    shallowEqual
  );

  return (
    <div className='row justify-content-center'>
      <div className='col-md-4'>
        <img
          className='productDetailsImg card-img-top'
          src={image_url}
          alt={name}
        />
        <div className='card-body'>
          <div className='d-flex justify-content-between'>
            <h3>{name}</h3>
            <div>${price}</div>
          </div>
          <div className='text-center'>{description}</div>
          <CartIcons id={id} />
        </div>
        <Link to="/" className='btn btn-block btn-link'>
          Go back
        </Link>
      </div>
    </div>
  )
}

export default ProductDetails;
