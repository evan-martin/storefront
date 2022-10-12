import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import axios from "axios";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import Container from '@mui/material/Container';

import './checkout.styles.scss';

const handleClick = ({ cartItems }) => {

  let checkoutArray = [];
  cartItems.map(cartItem => (
    checkoutArray = [...checkoutArray, { price: cartItem.priceID, quantity: cartItem.quantity }]
  ))

  let payload = checkoutArray;

  try {
    axios.post("  https://m75drneyac.execute-api.us-west-1.amazonaws.com/storefrontStripePOST", { payload }, {
  }).then((res) => {
      window.location.href = res.data
    });
  } catch (err) {
    console.log(err)
  }
}

const CheckoutPage = ({ cartItems, total }) => {

  return (
    <Container maxWidth="lg">
      <div className='checkout-container'>
        <div className='checkout-header'>
          <h1>Shopping Cart</h1>
        </div>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className="total">
          <div><h2>TOTAL: ${total}</h2></div>
          <div className='checkout-button'>
            <Button
              startIcon={<LockIcon />}
              variant='contained'
              onClick={() => handleClick({ cartItems })}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
