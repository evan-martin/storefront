import React from 'react';
import { connect } from 'react-redux';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>

      <div className='content-container'>

        <div className='name-container'>
          <h3 className='name'>{name}</h3>
          <h4 className='price'>${price}</h4>
        </div>

        <div className='quantity'>
          <div className='icon'
            onClick={() => removeItem(cartItem)}>
            <RemoveCircleIcon />
          </div>
          <p className='quantity-item'>{quantity}</p>
          <div className='icon'
            onClick={() => addItem(cartItem)}>
            <AddCircleIcon />
          </div>
        </div>

        <div className='delete'>
          <Button startIcon={<DeleteIcon />}
            variant="outlined"
            onClick={() => clearItem(cartItem)}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
