const istate = {
  products: [
    {
      id: 1,
      name: "Men (White) Polka Dot Casual Shirt ",
      price: 2960,
      desc: "2022 New Autumn Fashion Brand Men Clothes Slim Fit Men Long Sleeve Shirt  Social Plus Size M-5XL",
      pic: "https://ae01.alicdn.com/kf/HTB1mFvdBcuYBuNkSmRyq6AA3pXad/2022-New-Autumn-Fashion-Brand-Men-Clothes-Slim-Fit-Men-Long-Sleeve-Shirt-Men-Polka-Dot.jpg_Q90.jpg_.webp",
    },
    {
      id: 2,
      name: "Homme Men Jeans",
      price: 3570,
      desc: "Jean Homme Men Jeans Skinny Slim Fit Black Blue Denim Spijkerbroeken Heren Biker Stretch Pants Trousers Casual Distressed",
      pic: "https://ae01.alicdn.com/kf/Ha81d1aafbb9f4c9abac105d6f8a9d39cK/Jean-Homme-Men-Jeans-Skinny-Slim-Fit-Black-Blue-Denim-Spijkerbroeken-Heren-Biker-Stretch-Pants-Trousers.jpg_Q90.jpg_.webp",
    },
    {
      id: 3,
      name: "Quilted Coat Women Men Cardigan",
      price: 5831,
      desc: "Quilted Coat Women Men Cardigan Spring Patchwork Letter EMbroidery Menswear University Jacket Oversize Clothing 2022",
      pic: "https://ae01.alicdn.com/kf/S53c7b93f156145b7bed4bb8106d809f2r/Quilted-Coat-Women-Men-Cardigan-Spring-Patchwork-Letter-EMbroidery-Menswear-University-Jacket-Oversize-Clothing-2022.jpg_Q90.jpg_.webp",
    },
    {
      id: 4,
      name: "Cook Shark's sunglasses ",
      price: 4644,
      desc: "Cook Shark's new aluminum magnesium sunglasses men's sunglasses HD polarized driving drivers color glasses tide",
      pic: "https://ae01.alicdn.com/kf/Hd0cbf959d2f240c28be903a5f6420777x/Cook-Shark-s-new-aluminum-magnesium-sunglasses-men-s-sunglasses-HD-polarized-driving-drivers-color-glasses.jpg_640x640.jpg",
    },
    {
      id: 5,
      name: "Men (Blue) Polka Dot Casual Men Shirt",
      price: 2500,
      desc: "2022 New Autumn Fashion Brand Men Clothes Slim Fit Men Long Sleeve Shirt Social Plus Size M-5XL",
      pic: "https://ae01.alicdn.com/kf/HTB1bji4JGmWBuNjy1Xaq6xCbXXa2/2022-New-Autumn-Fashion-Brand-Men-Clothes-Slim-Fit-Men-Long-Sleeve-Shirt-Men-Polka-Dot.jpg_640x640.jpg",
    },

    {
      id: 6,
      name: "Men's Jeans Denim ",
      price: 3184,
      desc: "Cotton Men's Jeans Denim Pants Brand Classic Clothes Overalls Straight Trousers for Men Black ",
      pic: "https://ae01.alicdn.com/kf/H313cacac8a1d4dfe9327886efe3336c3L/Cotton-Men-s-Jeans-Denim-Pants-Brand-Classic-Clothes-Overalls-Straight-Trousers-for-Men-Black-Oversize.jpg_Q90.jpg_.webp",
    },
    {
      id: 7,
      name: "Hoodie Men Autumn ",
      price: 2159,
      desc: "Saiki Kusuo Japan Anime Cartoons LOGO Print Hoodie Men Autumn Loose Oversize Clothes Fashion Loose Pocket Sweatshirts Menswear",
      pic: "https://ae01.alicdn.com/kf/Hdd60815f360646c8a9fd2747c7c69853H/Saiki-Kusuo-Japan-Anime-Cartoons-LOGO-Print-Hoodie-Men-Autumn-Loose-Oversize-Clothes-Fashion-Loose-Pocket.jpg_640x640.jpg",
    },
    {
      id: 8,
      name: "Cook Shark Changer Sunglasses",
      price: 5705,
      desc: "Cook Shark New Color Changer Sunglasses Men's Sunglasses Tidal Polarization Driver's Mirror Driving Night Vision Glasses",
      pic: "https://ae01.alicdn.com/kf/H006310aa9b584cfa9fd9aab5c9a0a531u/Cook-Shark-New-Color-Changer-Sunglasses-Men-s-Sunglasses-Tidal-Polarization-Driver-s-Mirror-Driving-Night.jpg_640x640.jpg",
    },
    {
      id: 9,
      name: " Slim Fit Men Classic Plaid Shirts",
      price: 3360,
      desc: "Grade New Fashion Designer Brand Slim Fit Men Classic Plaid Shirts 2022 Spring Autumn Long Sleeve Trendy Casual Men Clothing",
      pic: "https://ae01.alicdn.com/kf/H626627a96f5240e99d3aa891979aff759/Top-Grade-New-Fashion-Designer-Brand-Slim-Fit-Men-Classic-Plaid-Shirts-2022-Spring-Autumn-Long.jpeg_Q90.jpeg_.webp",
    },
    {
      id: 10,
      name: "Men's Stretchy Biker Jeans",
      price: 853,
      desc: "Men's Stretchy Biker Jeans Skinny Destroyed Taped Slim Fit Denim Pencil Pants Ripped Jeans for Male Light Blue ",
      pic: "https://ae01.alicdn.com/kf/H3e84af9dfd99434499920aa27219f464I/Men-s-Stretchy-Biker-Jeans-Skinny-Destroyed-Taped-Slim-Fit-Denim-Pencil-Pants-Ripped-Jeans-for.jpg_Q90.jpg_.webp",
    },
    {
      id: 11,
      name: "Hoodie Men Golf",
      price: 3955,
      desc: "Hoodie Men Golf Clothing Long Sleeve Men's Outdoor Sports Ventilation Loose Bottomed Golf Wear Menswear Outwear Hooded man 2022",
      pic: "https://ae01.alicdn.com/kf/S30662cac55ee4eebb40acd280eac78e5I/Hoodie-Men-Golf-Clothing-Long-Sleeve-Men-s-Outdoor-Sports-Ventilation-Loose-Bottomed-Golf-Wear-Menswear.jpg_Q90.jpg_.webp",
    },
    {
      id: 12,
      name: "Cookshark 2020 new sunglasses ",
      price: 7864,
      desc: "Cookshark 2020 new sunglasses men's sunglasses polarized driving driving hipster glasses",
      pic: "https://ae01.alicdn.com/kf/He324ff087ba04be19bc9f5d7fee2694et/Cookshark-2020-new-sunglasses-men-s-sunglasses-polarized-driving-driving-hipster-glasses.jpg_Q90.jpg_.webp",
    },
    {
      id: 13,
      name: "Mens Fashion Dress Shirts Formal ",
      price: 2430,
      desc: "New Fashion Brand Slim Fit Mens Fashion Dress Shirts Formal Long Sleeve Solid Color Casual Korean ",
      pic: "https://ae01.alicdn.com/kf/H2503f2eb808e4dbda06d9b17329f95a2e/Top-Quality-New-Fashion-Brand-Slim-Fit-Mens-Fashion-Dress-Shirts-Formal-Long-Sleeve-Solid-Color.jpg_Q90.jpg_.webp",
    },
    {
      id: 14,
      name: " High Waist Fashion Jean",
      price: 1890,
      desc: "Men High Waist Fashion Jean Spring Summer Boyfriend Motorcycle Street Wear Skinny Casual Denim Pants Jeans Straight Trousers",
      pic: "https://ae01.alicdn.com/kf/Hd74a167e7bb84a2e8448462b97c7f605O/Men-High-Waist-Fashion-Jean-Spring-Summer-Boyfriend-Motorcycle-Street-Wear-Skinny-Casual-Denim-Pants-Jeans.jpg_640x640.jpg",
    },
    {
      id: 15,
      name: "Men's Hoodie Disney Marvel ",
      price: 3628,
      desc: "Men's Hoodie Disney Marvel Panther Fashion Spring Autumn Men's Hoodie Superhero 3D Print Streetwear Cool Menswear",
      pic: "https://ae01.alicdn.com/kf/S8c603f05f3cd4bfea154d203fbd4f210o/Men-s-Hoodie-Disney-Marvel-Panther-Fashion-Spring-Autumn-Men-s-Hoodie-Superhero-3D-Print-Streetwear.jpg_Q90.jpg_.webp",
    },
    {
      id: 16,
      name: "SPLOV Vintage Sunglasses",
      price: 181,
      desc: "SPLOV Vintage Steampunk Flip Sunglasses Retro Round Metal Frame Sun Glasses for Men Women Brand Designer Circle Glasses Oculos",
      pic: "https://ae01.alicdn.com/kf/HTB12.HhX4rvK1RjSszeq6yObFXa5/SPLOV-Vintage-Steampunk-Flip-Sunglasses-Retro-Round-Metal-Frame-Sun-Glasses-for-Men-Women-Brand-Designer.jpg_Q90.jpg_.webp",
    },
  ],
  selectedproduct: {}
};

export const ProductsReducer = (state = istate, action) => {
  switch (action.type) {
    case "Selected_Product":
      return {
        ...state,
        selectedproduct: state.products.find(
          (selectedproduct) => selectedproduct.id === parseInt(action.id)
        ),
      };

    default:
      return state;
  }
};
