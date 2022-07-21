import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './actions';

/** Show add / remove cart icons
 * Dispatches add/remove actions.
 * 
 * ProductList -> CartIcons
 * ProductDetails -> CartIcons
 */
function CartIcons({ id }) {
  const dispatch = useDispatch();

  function add(event) { dispatch(addToCart(id)) };
  function remove(event) { dispatch(removeFromCart(id)) };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <i
        onClick={add}
        className='cartIcon fas fa-cart-plus fa-2x text-success'
      />
      <i
        onClick={remove}
        className='cartIcon fas fa-cart-arrow-down fa-2x text-danger'
      />
    </div>
  );
}

export default CartIcons;
