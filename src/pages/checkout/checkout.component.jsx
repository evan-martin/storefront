import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const handleClick = ({ cartItems }) => {

  let checkoutArray = [];
  cartItems.map(cartItem => (
    checkoutArray = [...checkoutArray, { price: cartItem.priceID, quantity: cartItem.quantity }]
  ))

  let payload = checkoutArray;

  try {
    axios.post("https://pants-ect-api.herokuapp.com/create-checkout-session", {
      payload
    }).then((res) => {
      console.log(res.data)
      window.location.href = res.data
    });
  } catch (err) {
    console.log(err)
  }
}

const CheckoutPage = ({ cartItems, total }) => {

  const navigate = useNavigate();

  return (
    <div className='checkout-page'>
      <button onClick={() => navigate(-1)}>Keep Shopping</button>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${total}</div>
      <div className='checkout-button'>

        <button onClick={() => handleClick({ cartItems })}>
          Checkout
        </button>

      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
