/**
 * @fileoverview shop page component 
 */
import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { SHOP_DATA } from "./shop.data";
import { id } from "../../utils/utilities";

interface Item {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
}
interface Collection {
  id: number,
  title: string,
  routeName: string,
  items: Item[],
}
interface ShopPageProps { }
interface ShopPageState {
  collections: Collection[]
}
class ShopPage extends React.Component<ShopPageProps, ShopPageState> {
  constructor(props: ShopPageProps) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {
          collections.map(({ ...collectionProps }) =>
            (<CollectionPreview key={id()} {...collectionProps} />))
        }
      </div>
    );
  }
}

export default ShopPage;
