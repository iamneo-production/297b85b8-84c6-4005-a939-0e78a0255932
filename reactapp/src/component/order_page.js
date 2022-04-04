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
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

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
    {/* <TotalContainer>
      <span>TOTAL: ${hiddent ? total -= total / 10 : total}</span>
    </TotalContainer> */}
    {/* <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242  —  Exp: 01/21  —  CVV: 123
    </WarningContainer> */}
   {/* <Link to="/orders"><button onClick={() => addOrder()}> Place Order </button></Link> */}
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
