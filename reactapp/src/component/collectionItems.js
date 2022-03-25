import react from "react";
import { Link } from 'react-router-dom' 
import { connect } from 'react-redux';
import { addItemToCart } from '../redux/cart/cart.actions';
import { setCurrentPath } from '../redux/user/user.actions'

import {
    CollectionItemContainer,
    AddButton,
    BackgroundImage,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer
  } from './itemstyle.jsx';

  const CollectionItem = ({ item, addItemToCart, discount, setCurrentPath }) => {
    const {imageUrl, name, price, description } = item;
    const dis = price / 10;
    return (
      <div>
      <CollectionItemContainer>
      
      <BackgroundImage className='background-image' imageUrl={imageUrl}></BackgroundImage>
      
        <CollectionFooterContainer >
          <NameContainer>{name}</NameContainer>
          <PriceContainer>{price}</PriceContainer>
        </CollectionFooterContainer>
        
        <AddButton className="add-button"
          onClick={() => addItemToCart(item)} inverted
        >
          ADD TO CART
          
         </AddButton>
        
        </CollectionItemContainer>
        </div>
    );
  };


  const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
  });
  

  export default connect(
    null,
    mapDispatchToProps
  )(CollectionItem);