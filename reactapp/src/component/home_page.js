import React from 'react';
import CollectionPreview from './items'
import SHOP_DATA from './shop.data.js';
import { ShopPageContainer } from './itemstyle'

class ShopPage extends React.Component {
  constructor(props) {
      super(props);
      
      this.state = {
          collection: SHOP_DATA
      }
  }
//   componentDidMount() {
//       axios.get().then(this.setState())
//   }
  render() {
      // const {collections} = this.state;
      
      return(
          <ShopPageContainer>
              {
                  this.state.collection.map(({id, ...otherCollection}) => (
                      <CollectionPreview key={id} {...otherCollection} />
                  ))
              }
          </ShopPageContainer>
      )
  }
}

export default ShopPage;