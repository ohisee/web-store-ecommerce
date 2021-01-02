import React, { useContext } from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionsContext from "../../contexts/collections/collections.context";
import './collection.styles.scss';

/** 
 * one way of using context's consumer 
 * @see collection-context-consumer.component 
 */

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

// another way is to use useContext hook 
/** @type {React.FC<import('react-router-dom').RouteComponentProps>} */
const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
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
};

export default CollectionPage;
