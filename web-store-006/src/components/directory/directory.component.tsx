/**
 * @fileoverview directory component 
 */
import React from "react";
import styles from "./directory.module.scss";
import MenuItem from "../menu-item/menu-item.component";
import { id } from "../../utils/utilities";

interface Section {
  title: string,
  imageUrl: string,
  id: number,
  linkUrl: string,
  size?: string;
}
interface DirectoryProps { }
interface DirectoryStates {
  sections: Section[]
}
class Directory extends React.Component<DirectoryProps, DirectoryStates>  {
  constructor(props: DirectoryProps) {
    super(props);

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render() {
    return (
      <div className={styles["directory-menu"]}>
        {
          // this.state.sections.map(({title, imageUrl, size, linkUrl }) 
          this.state.sections.map(({ ...sectionProps }) =>
            <MenuItem
              key={id()}
              {...{ ...sectionProps, subtitle: "SHOW NOW" }}
            />)
        }
      </div>
    );
  }
}

export default Directory;
