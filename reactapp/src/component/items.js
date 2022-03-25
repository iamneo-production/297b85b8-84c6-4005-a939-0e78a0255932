import React from 'react';


import CollectionItem from './collectionItems';


import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './itemstyle';
const CollectionPreview = ({ items, routeName, push, pathname }) => {
  
  return(
  <CollectionPreviewContainer>
    <TitleContainer >
    </TitleContainer>
    <PreviewContainer>
      {items.map((item, i) => (
        <CollectionItem key={i} item={item} />
      ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
)};


export default CollectionPreview;