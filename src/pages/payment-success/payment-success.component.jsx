import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors'; 
import { clearItemFromCart } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';

const PaymentSuccess = ({ cartItems, clearItem }) => {

    useEffect(() => {   
        cartItems.map(cartItem => (
            clearItem(cartItem)
          ))   
       }, []);
       console.log('hit use effect') 
    return (
        <div className='payment-success-page'>
            <h1> Thank you for shopping </h1>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentSuccess)