const SHOP_DATA = {
  shop1: {
    id: 1,
    title: 'Shop 1',
    imageUrl: 'https://picsum.photos/500/500',
    bio: 'Vexillologist thundercats biodiesel williamsburg cronut you probably havent heard of them cloud bread. Salvia celiac enamel pin jean shorts vape. Aesthetic la croix hashtag narwhal yr ramps hot chicken marfa put a bird on it hell of vinyl normcore. Master cleanse austin photo booth craft beer disrupt yuccie, palo santo VHS etsy.',
    routeName: 'shop1',
    items: [
      {
        id: 1,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 25,
        options: [
          {
           id: 1,
           option: 'Small', 
          },
          {
            id: 2,
            option: 'Medium',
          },
          {
            id: 3, 
            option: 'Large',
          }
        ]    
      },
      {
        id: 2,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 18,
        options: [
          {
            id:1,
            option: 'Blue',
          },
          {
            id:2,
            option: 'Red',
          },
          {
            id: 3,
            option: 'Green',
          }
        ]
      },
      {
        id: 3,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 35
      },
      {
        id: 4,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 25
      },
      {
        id: 5,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 18
      },
      {
        id: 6,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 14
      },
      {
        id: 7,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 18
      },
      {
        id: 8,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 14
      },
      {
        id: 9,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 16,
      }
    ]
  },
shop2: {
    id: 2,
    title: 'Shop 2',
    routeName: 'shop2',
    items: [
      {
        id: 10,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 220
      },
      {
        id: 11,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 280
      },
      {
        id: 12,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 110
      },
      {
        id: 13,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 160
      },
      {
        id: 14,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 160
      },
      {
        id: 15,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 160
      },
      {
        id: 16,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 190
      },
      {
        id: 17,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 200
      }
    ]
  },
  shop3: {
    id: 3,
    title: 'Shop 3',
    routeName: 'shop3',
    items: [
      {
        id: 18,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 125
      },
      {
        id: 19,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 90
      },
      {
        id: 20,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 90
      },
      {
        id: 21,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 165
      },
      {
        id: 22,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 185
      }
    ]
  },
  shop4: {
    id: 4,
    title: 'Shop 4',
    routeName: 'shop4',
    items: [
      {
        id: 23,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 25
      },
      {
        id: 24,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 20
      },
      {
        id: 25,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 80
      },
      {
        id: 26,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 80
      },
      {
        id: 27,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 45
      },
      {
        id: 28,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 135
      },
      {
        id: 29,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 20
      }
    ]
  },
shop5: {
    id: 5,
    title: 'Shop 5',
    routeName: 'shop5',
    items: [
      {
        id: 30,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 325
      },
      {
        id: 31,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 20
      },
      {
        id: 32,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 25
      },
      {
        id: 33,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 25
      },
      {
        id: 34,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 40
      },
      {
        id: 35,
        name: 'Item',
        imageUrl: 'https://picsum.photos/500/500',
        description: 'Fanny pack man bun small batch, hella portland bicycle rights enamel pin fashion axe cloud bread seitan. Organic cred lumbersexual man bun mustache blue bottle pop-up seitan occupy literally yuccie.',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
