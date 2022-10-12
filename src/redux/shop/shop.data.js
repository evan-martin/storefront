const SHOP_DATA = {
  women: {
    id: 1,
    title: 'Women',
    routeName: 'women',
    items: [
      {
        id: 1,
        name: 'Graphic Tee',
        imageUrl: 'https://i.ibb.co/MVnB0xy/graphic-tee.jpg',
        description: 'Gastropub helvetica flannel four loko tousled quinoa PBR&B williamsburg, tumblr taiyaki banjo gluten-free waistcoat. Pour-over helvetica mlkshk, polaroid ennui cornhole pop-up taiyaki.',
        price: 20,
        priceID:'price_1KgdhaKx1GFK0jKDkvSkD8X0'
      },
      {
        id: 2,
        name: 'Leggings',
        imageUrl: 'https://i.ibb.co/PZgWjxF/leggings.jpg',
        description: 'Hashtag sustainable venmo tbh hexagon franzen prism tumblr literally kombucha cloud bread. Forage williamsburg humblebrag vaporware la croix etsy.',
        price: 55,
        priceID:'price_1KgdkcKx1GFK0jKDx6CTCVc5'
      },
      {
        id: 3,
        name: 'Patterned Dress',
        imageUrl: 'https://i.ibb.co/Rg30tFz/patterned-dress.jpg',
        description: 'Biodiesel hella everyday carry, brooklyn VHS venmo next level pinterest normcore raclette keytar. Asymmetrical gochujang subway tile tofu iPhone waistcoat scenester poutine selvage pinterest farm-to-table.',
        price: 50,
        priceID:'price_1KgdtFKx1GFK0jKD9WrbM8j8'
      },
      {
        id: 4,
        name: 'Striped Jumper',
        imageUrl: 'https://i.ibb.co/gdtNgPd/striped-jumper.jpg',
        description: 'Adaptogen waistcoat snackwave XOXO, banjo whatever coloring book heirloom squid offal goth knausgaard. Cronut vegan skateboard before they sold out, forage helvetica art party raclette put a bird on it food truck knausgaard activated charcoal plaid.',
        price: 35,
        priceID:'price_1KgdjNKx1GFK0jKD5n7gCQ8C'
      },
      {
        id: 5,
        name: 'Striped Trousers',
        imageUrl: 'https://i.ibb.co/cLNWJf5/striped-trousers.jpg',
        description: 'Hexagon freegan ethical iceland, trust fund mlkshk photo booth DIY lyft copper mug subway tile polaroid.',
        price: 60,
        priceID:'price_1KgdsBKx1GFK0jKDv1LX2chv'
      },
      {
        id: 6,
        name: 'Brown Overcoat',
        imageUrl: 'https://i.ibb.co/4jpKvbq/brown-overcoat.jpg',
        description: 'Occupy la croix semiotics viral tumblr. Vinyl vaporware leggings everyday carry meditation blog deep v dreamcatcher skateboard neutra woke.',
        price: 14,
        priceID:'price_1KgdrEKx1GFK0jKDy2LJsDLl'
      },
      {
        id: 7,
        name: 'Red Dress',
        imageUrl: 'https://i.ibb.co/s9Wn9PK/red-dress.jpg',
        description: 'Cronut roof party fashion axe air plant taiyaki hell of keytar drinking vinegar. Cornhole VHS polaroid, slow-carb thundercats fixie kombucha selfies man braid irony deep v quinoa YOLO tumblr.',
        price: 55,
        priceID:'price_1KgdtpKx1GFK0jKDtttczmpr',
      },
    ]
  },
men: {
    id: 2,
    title: 'Men',
    routeName: 'men',
    items: [
      {
        id: 8,
        name: 'Wool Coat',
        imageUrl: 'https://i.ibb.co/R7CVb0H/wool-coat.jpg',
        description: 'Stumptown poutine heirloom gastropub yr. Brooklyn fingerstache tacos four dollar toast. Kombucha XOXO messenger bag truffaut pok pok, vape single-origin coffee intelligentsia venmo gluten-free retro hell of cloud bread.',
        price: 130,
        priceID: 'price_1KgexfKx1GFK0jKDNobBlCXQ'
      },
      {
        id: 9,
        name: 'Striped Blazer',
        imageUrl: 'https://i.ibb.co/wzjp6sz/striped-blazer.jpg',
        description: 'Umami put a bird on it taiyaki, humblebrag art party occupy fingerstache. Actually jianbing fingerstache franzen coloring book skateboard, man bun paleo master cleanse humblebrag before they sold out ramps succulents selfies.',
        price: 100,
        priceID: 'price_1Kgex3Kx1GFK0jKD2j0muCwJ'
      },
      {
        id: 10,
        name: 'Plain White Tee',
        imageUrl: 'https://i.ibb.co/2Kf8q2n/plain-white-tee.jpg0',
        description: 'Everyday carry shaman church-key beard. Art party slow-carb subway tile vinyl brooklyn keffiyeh air plant cred venmo dreamcatcher pitchfork crucifix 8-bit.',
        price: 20,
        priceID: 'price_1KgewQKx1GFK0jKDwRq0exMO'
      },
      {
        id: 11,
        name: 'Maroon Jacket',
        imageUrl: 'https://i.ibb.co/mvKGxSF/maroon-jacket.jpg',
        description: 'Forage aesthetic pop-up twee church-key four loko irony letterpress pok pok bushwick green juice lyft leggings. 90s freegan fashion axe subway tile hell of, umami vape stumptown iPhone polaroid single-origin coffee bespoke.',
        price: 150,
        priceID: 'price_1KgevsKx1GFK0jKDaRrvBEKJ'
      },
      {
        id: 12,
        name: 'Leather Jacket',
        imageUrl: 'https://i.ibb.co/W5tN8C9/leather-jacket.jpg',
        description: 'Meggings knausgaard schlitz, gluten-free direct trade hashtag mixtape occupy bespoke migas cardigan retro. Messenger bag viral pickled distillery truffaut.',
        price: 250,
        priceID: 'price_1KgevMKx1GFK0jKDJ3KzXDPI'
      },
      {
        id: 13,
        name: 'Grey Trousers',
        imageUrl: 'https://i.ibb.co/LCkCrmp/grey-trousers.jpg',
        description: 'Paleo helvetica kitsch kombucha vice bespoke. Chambray freegan cray microdosing beard af. Trust fund la croix offal tote bag, lyft deep v taxidermy cray vexillologist slow-carb four loko.',
        price: 75,
        priceID: 'price_1KgeuqKx1GFK0jKD5wzrsgFh',
      },
      {
        id: 14,
        name: 'Graphic Tee',
        imageUrl: 'https://i.ibb.co/SN6DdRW/graphic-tee.jpg',
        description: 'Butcher hammock live-edge jean shorts etsy food truck freegan sartorial drinking vinegar squid poutine leggings direct trade. Chambray twee asymmetrical try-hard butcher pok pok taxidermy vexillologist tacos echo park enamel pin organic.',
        price: 30,
        priceID: 'price_1KgeuKKx1GFK0jKD0vjtE3kK'
      },
    ]
  },
  accessories: {
    id: 3,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 15,
        name: 'Blue Tie',
        imageUrl: 'https://i.ibb.co/DQD74T4/blue-tie.jpg',
        description: 'Church-key gluten-free aesthetic keffiyeh iceland, lo-fi blue bottle activated charcoal. Irony man braid cloud bread tousled bicycle rights marfa flannel leggings locavore pug.',
        price: 15,
        priceID: 'price_1KguObKx1GFK0jKD19Zu8pVS'
      },
      {
        id: 16,
        name: 'Pearl Necklace',
        imageUrl: 'https://i.ibb.co/fDRVGs0/pearl-necklace.jpg',
        description: 'Salvia four loko mustache, PBR&B actually austin twee af schlitz.',
        price: 60,
        priceID: 'price_1KguPBKx1GFK0jKDm6GxTXJn'
      },
      {
        id: 17,
        name: 'Silver Buckle Belt',
        imageUrl: 'https://i.ibb.co/zhwcW9s/silver-buckle-belt.jpg',
        description: 'Snackwave kitsch iceland kinfolk freegan sriracha. Semiotics keytar succulents fingerstache, 90s cloud bread pabst brooklyn adaptogen irony church-key sriracha.',
        price: 20,
        priceID: 'price_1KguPvKx1GFK0jKDemExCyIf'
      },
      {
        id: 18,
        name: 'Silver Hoops',
        imageUrl: 'https://i.ibb.co/PQrp2RD/silver-hoop.jpg',
        description: ' Typewriter synth hexagon pok pok iPhone chartreuse. Shoreditch try-hard ugh health goth cray chia, farm-to-table cardigan blog kickstarter.',
        price: 30,
        priceID: 'price_1KguQZKx1GFK0jKDv7iJUYUG'
      },
      {
        id: 19,
        name: 'Gold Watch',
        imageUrl: 'https://i.ibb.co/Cv77L0f/watch.jpg',
        description: 'Pork belly unicorn bushwick banjo hexagon tattooed. Bushwick forage enamel pin roof party chartreuse. Migas try-hard before they sold out church-key.',
        price: 120,
        priceID: 'price_1KguRMKx1GFK0jKD2nFJ1bYx'
      }
    ]
  },
  footware: {
    id: 4,
    title: 'Footware',
    routeName: 'footware',
    items: [
      {
        id: 20,
        name: 'Birkenstocks',
        imageUrl: 'https://i.ibb.co/Y8VRcF1/birkenstocks.jpg',
        description: 'Poke succulents knausgaard, venmo sustainable coloring book microdosing cold-pressed aesthetic pickled. Adaptogen truffaut intelligentsia, fixie edison bulb mlkshk raclette vexillologist wolf knausgaard street art.',
        price: 130,
        priceID: 'price_1Kgv6CKx1GFK0jKDQbs0klaB'
      },
      {
        id: 21,
        name: 'Floral Heels',
        imageUrl: 'https://i.ibb.co/1L8HgPv/floral-heels.jpg',
        description: 'Master cleanse intelligentsia jean shorts man bun portland heirloom. Tbh pok pok pinterest food truck af literally man bun hella sustainable heirloom woke.',
        price: 80,
        priceID: 'price_1Kgv6cKx1GFK0jKDokfEmR6b'
      },
      {
        id: 22,
        name: 'Leather Booties',
        imageUrl: 'https://i.ibb.co/6FW55z2/leather-booties.jpg',
        description: 'Af messenger bag coloring book PBR&B hexagon. Intelligentsia jianbing green juice, blue bottle farm-to-table meh offal taxidermy roof party meggings.',
        price: 100,
        priceID: 'price_1Kgv7BKx1GFK0jKDdfJLBgTf'
      },
      {
        id: 23,
        name: 'Leather Boots',
        imageUrl: 'https://i.ibb.co/4tpj6Cq/leather-boots.jpg',
        description: 'Chambray flexitarian raw denim brooklyn vice af. Jianbing portland kombucha, small batch selfies organic narwhal glossier fixie messenger bag la croix.',
        price: 120,
        priceID: 'price_1Kgv7sKx1GFK0jKDUYrZiDba'
      },
      {
        id: 24,
        name: 'Pastel Sneakers',
        imageUrl: 'https://i.ibb.co/jDNS7Xn/pastel-sneakers.jpg',
        description: 'Gochujang fam ennui, quinoa ethical fashion axe vegan kitsch banh mi pug VHS taxidermy distillery. Subway tile coloring book activated charcoal green juice fashion axe iceland locavore fanny pack viral paleo mumblecore bicycle rights lo-fi shoreditch thundercats.',
        price: 100,
        priceID: 'price_1Kgv8bKx1GFK0jKDLPVvecO0'
      },
      {
        id: 25,
        name: 'Platform Sandals',
        imageUrl: 'https://i.ibb.co/WKVTHhw/platform-sandals.jpg',
        description: ' Banh mi coloring book live-edge swag, disrupt pabst man bun. Tbh etsy kale chips authentic hot chicken, man bun hammock paleo tumblr meditation mumblecore 3 wolf moon banjo. ',
        price: 60,
        priceID: 'price_1Kgv96Kx1GFK0jKDyBkCjRjL'
      },
      {
        id: 26,
        name: 'Silver Heels',
        imageUrl: 'https://i.ibb.co/XFRp8Q5/silver-heels.jpg',
        description: 'Chartreuse banjo health goth, cronut hexagon offal selfies. Echo park edison bulb kogi microdosing. ',
        price: 80,
        priceID: 'price_1Kgv9bKx1GFK0jKD4tPrGiBN'
      }
    ]
  },
sale: {
    id: 5,
    title: 'Sale',
    routeName: 'sale',
    items: [
      {
        id: 27,
        name: 'Blue Handbag',
        imageUrl: 'https://i.ibb.co/qCpFCMX/blue-handbag.jpg',
        description: 'Williamsburg occupy intelligentsia raw denim glossier man braid, pug portland kickstarter microdosing palo santo green juice. ',
        price: 30,
        priceID: 'price_1KgvbLKx1GFK0jKDsQzMaHwL'
      },
      {
        id: 28,
        name: 'Pashmina',
        imageUrl: 'https://i.ibb.co/RBx12LW/pashmina.jpg',
        description: 'Succulents sriracha ugh hella beard copper mug knausgaard try-hard hammock edison bulb art party. Synth brooklyn polaroid portland iPhone tattooed, gochujang drinking vinegar banjo bushwick deep v iceland bitters whatever glossier. ',
        price: 15,
        priceID: 'price_1KgvbpKx1GFK0jKD1xtImz1y'
      },
      {
        id: 29,
        name: 'Plaid Scarf',
        imageUrl: 'https://i.ibb.co/6rXBjWf/plaid-scarf.jpg',
        description: 'Pinterest humblebrag typewriter, kombucha heirloom flexitarian marfa hashtag. Pork belly viral slow-carb franzen banjo, selfies stumptown.',
        price: 10,
        priceID: 'price_1KgvclKx1GFK0jKDBJWVWVzs'
      },
      {
        id: 30,
        name: 'Wool Socks',
        imageUrl: 'https://i.ibb.co/LhVr1NF/wool-socks.jpg',
        description: 'Man bun wayfarers sartorial pok pok. Letterpress vexillologist readymade intelligentsia irony leggings. Glossier taiyaki semiotics hoodie subway tile church-key food truck intelligentsia pork belly live-edge. ',
        price: 10,
        priceID: 'price_1KgvdiKx1GFK0jKDkhRDEses'
      },
    ]
  }
};

export default SHOP_DATA;
