/**
 * @fileoverview using CollectionsContext as a component 
 */
import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionsContext from "../../contexts/collections/collections.context";
import './collection.styles.scss';

/**
 * @typedef {object} ItemType
 * @property {number} id
 * @property {string} name
 * @property {string} imageUrl
 * @property {number} price
 */

/**
 * @typedef {object} CollectionType 
 * @property {number} id
 * @property {string} title
 * @property {string} routeName
 * @property {ItemType[]}  items
 */

// one way of using context's consumer 
/** @type {React.FC<import('react-router-dom').RouteComponentProps>} */
const CollectionPage = ({ match }) => {
  return (
    // use context consumer 
    <CollectionsContext.Consumer>
      {
        function (collections) {
          /** @type {CollectionType} */
          const collection = collections[match.params.collectionId];
          const { title, items } = collection;
          return (
            <div className='collection-page'>
              <h2 className='title'>{title}</h2>
              <div className='items'>
                {items.map(item => (
                  <CollectionItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        }
      }
    </CollectionsContext.Consumer>
  );
};

export default CollectionPage;
