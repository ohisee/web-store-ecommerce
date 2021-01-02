/**
 * @fileoverview use React context to propagate shop data to collections overview 
 */
import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import CollectionsContext from "../../contexts/collections/collections.context";

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
  /** collections here is an object, need to convert to a list */
  const collections = useContext(CollectionsContext);
  const collectionsList = Object.keys(collections).map(key => collections[key]);
  return (
    <div className='collections-overview'>
      {collectionsList.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default CollectionsOverview;
