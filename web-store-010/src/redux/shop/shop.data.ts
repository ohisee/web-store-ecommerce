/**
 * @fileoverview shop data
 */
export const SHOP_DATA = {
  hats:
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: require("../../assets/images/categories/hats/brown-brim.png"),
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: require("../../assets/images/categories/hats/blue-beanie.png"),
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: require("../../assets/images/categories/hats/brown-cowboy.png"),
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: require("../../assets/images/categories/hats/grey-brim.png"),
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: require("../../assets/images/categories/hats/green-beanie.png"),
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: require("../../assets/images/categories/hats/palm-tree-cap.png"),
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: require("../../assets/images/categories/hats/red-beanie.png"),
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: require("../../assets/images/categories/hats/wolf-cap.png"),
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: require("../../assets/images/categories/hats/blue-snapback.png"),
        price: 16
      }
    ]
  },
  sneakers:
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: require("../../assets/images/categories/sneakers/adidas-nmd.png"),
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: require("../../assets/images/categories/sneakers/yeezy.png"),
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: require("../../assets/images/categories/sneakers/black-converse.png"),
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: require("../../assets/images/categories/sneakers/white-nike-high-tops.png"),
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: require("../../assets/images/categories/sneakers/nikes-red.png"),
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: require("../../assets/images/categories/sneakers/nike-brown.png"),
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: require("../../assets/images/categories/sneakers/nike-funky.png"),
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: require("../../assets/images/categories/sneakers/timberlands.png"),
        price: 200
      }
    ]
  },
  jackets:
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: require("../../assets/images/categories/jackets/black-shearling.png"),
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: require("../../assets/images/categories/jackets/blue-jean-jacket.png"),
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: require("../../assets/images/categories/jackets/grey-jean-jacket.png"),
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: require("../../assets/images/categories/jackets/brown-shearling.png"),
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: require("../../assets/images/categories/jackets/brown-trench.png"),
        price: 185
      }
    ]
  },
  womens:
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: require("../../assets/images/categories/womens/blue-tank.png"),
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: require("../../assets/images/categories/womens/floral-blouse.png"),
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: require("../../assets/images/categories/womens/floral-skirt.png"),
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: require("../../assets/images/categories/womens/red-polka-dot-dress.png"),
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: require("../../assets/images/categories/womens/striped-sweater.png"),
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: require("../../assets/images/categories/womens/yellow-track-suit.png"),
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: require("../../assets/images/categories/womens/white-vest.png"),
        price: 20
      }
    ]
  },
  mens:
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: require("../../assets/images/categories/mens/camo-vest.png"),
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: require("../../assets/images/categories/mens/floral-shirt.png"),
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: require("../../assets/images/categories/mens/long-sleeve.png"),
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: require("../../assets/images/categories/mens/pink-shirt.png"),
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: require("../../assets/images/categories/mens/roll-up-jean-shirt.png"),
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: require("../../assets/images/categories/mens/polka-dot-shirt.png"),
        price: 25
      }
    ]
  }
};
