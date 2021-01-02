/**
 * @fileoverview directory reducer 
 */
import DirectoryAction from "../shared/actiontype";

interface Section {
  title: string,
  imageUrl: string,
  size?: string,
  id: number,
  linkUrl: string,
}

export interface DirectorState {
  sections: Section[],
}

const INITIAL_STATE: DirectorState = {
  sections: [
    {
      title: 'hats',
      imageUrl: "../../assets/images/hats.png",
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: "../../assets/images/jackets.png",
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: "../../assets/images/sneakers.png",
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: "../../assets/images/womens.png",
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: "../../assets/images/men.png",
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

export function directoryReducer(
  state: DirectorState = INITIAL_STATE, action: DirectoryAction) {
  switch (action.type) {
    default:
      return state;
  }
}
