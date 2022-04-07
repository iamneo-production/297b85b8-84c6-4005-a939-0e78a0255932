import React from 'react';
import { connect } from 'react-redux';
import { addItemToOrder } from '../redux/cart/cart.actions';

import { Link } from 'react-router-dom';

import {
  getCartItems,
  getCombinedCartPrices,
  getOrderItems
} from '../redux/cart/cart.selectors';
import CheckoutItem from './checkoutItem';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkoutstyle.jsx';

const CheckoutPage = ({ cartItems, total, hiddent, addOrder }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span></span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem, idx) => (
      <CheckoutItem key={idx} cartItem={cartItem} orders/>
    ))}

  </CheckoutPageContainer>
);

const mapStateToProps = state => ({
  cartItems: getOrderItems(state),
  total: getCombinedCartPrices(state)
  
});

const mapDispatchToProps = dispatch => ({
    addOrder: () => dispatch(addItemToOrder())
  });

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
