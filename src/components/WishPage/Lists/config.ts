import cover from "images/main/card-product.png";
import cover1 from "images/wishlist/img-1.jpg";
import cover2 from "images/wishlist/img-2.jpg";
import cover3 from "images/wishlist/img-3.jpg";
import cover4 from "images/wishlist/img-4.jpg";

export const wishlistArr = [
  {
    id: 0,
    name: "Buy Home",
    slug: "buy-home",
    description:
      "I will add here all the ads that suit me that are available in my region. ",
    update: 1688371600,
    items: [
      {
        id: 0,
        name: "MacBook Air with M2 chip, 8-Core GPU 8GB Unified Memory, 256GB SSD Storage",
        images: [
          {
            id: 0,
            image: cover1.src,
          },
          {
            id: 1,
            image: cover1.src,
          },
          {
            id: 2,
            image: cover.src,
          },
          {
            id: 3,
            image: cover.src,
          },
        ],
        price: "$1,250.00",
        oldPrice: "$1,500.00",
        location: {
          name: "Krung Thep Maha Nakhon, Thailand",
          lat: 13.889370459447255,
          lng: 100.59778134546144,
        },
      },
      {
        id: 1,
        name: "676iPad Air Silver, 12.9-inch display, M2 chip, 2TB, Wi-Fi",
        images: [
          {
            id: 0,
            image: cover.src,
          },
          {
            id: 1,
            image: cover2.src,
          },
        ],
        price: "$1,250.00",
        location: {
          name: "Bangkok, Thailand",
          lat: 13.7315066,
          lng: 100.7873928,
        },
      },
      {
        id: 2,
        name: "Apple Watch Ultra, Titanium Case with Orange Alpine Loop",
        images: [
          {
            id: 0,
            image: cover2.src,
          },
          {
            id: 1,
            image: cover3.src,
          },
          {
            id: 2,
            image: cover3.src,
          },
          {
            id: 3,
            image: cover3.src,
          },
        ],
        price: "$1,250.00",
        location: {
          name: "Bangkok, Thailand",
          lat: 13.926566055457503,
          lng: 100.5779162548392,
        },
      },
      {
        id: 3,
        name: "Apple Watch Ultra, Titanium Case with Orange Alpine Loop",
        images: [
          {
            id: 0,
            image: cover4.src,
          },
          {
            id: 1,
            image: cover3.src,
          },
          {
            id: 2,
            image: cover3.src,
          },
          {
            id: 3,
            image: cover3.src,
          },
        ],
        price: "$1,250.00",
        location: {
          name: "Bangkok, Thailand",
          lat: 13.74350859277567,
          lng: 100.52854465070521,
        },
      },
    ],
  },
  {
    id: 1,
    name: "For Computer",
    slug: "for-computer",
    description: "ooo",
    update: 1696147600,
    items: [
      {
        id: 0,
        name: "MacBook Air with M2 chip, 8-Core GPU 8GB Unified Memory, 256GB SSD Storage",
        images: [
          {
            id: 0,
            image: cover4.src,
          },
        ],
        price: "$1,250.00",
        oldPrice: "$1,500.00",
        location: {
          name: "Bangkok, Thailand",
          lat: 13.783112552967099,
          lng: 100.38051252750427,
        },
      },
    ],
  },
  {
    id: 2,
    name: "Buy Home",
    slug: "buy-home",
    description: "lalalalalalal",
    update: 1664611600,
    items: [
      {
        id: 0,
        name: "MacBook Air with M2 chip, 8-Core GPU 8GB Unified Memory, 256GB SSD Storage",
        images: [
          {
            id: 0,
            image: cover3.src,
          },
        ],
        price: "$1,250.00",
        oldPrice: "$1,500.00",
        location: {
          name: "Bangkok, Thailand",
          lat: 13.749275537658455,
          lng: 100.38662545531854,
        },
      },
    ],
  },
  {
    id: 3,
    name: "Buy Book",
    slug: "buy-book",
    description: "",
    update: 1694678800,
    items: [
      {
        id: 0,
        name: "MacBook Air with M2 chip, 8-Core GPU 8GB Unified Memory, 256GB SSD Storage",
        images: [
          {
            id: 0,
            image: cover3.src,
          },
        ],
        price: "$1,250.00",
        oldPrice: "$1,500.00",
        location: {
          name: "Bangkok, Thailand",
          lat: 13.796881554735517,
          lng: 100.38780490295532,
        },
      },
    ],
  },
  {
    id: 4,
    name: "Cup",
    slug: "cup",
    update: 1692000400,
    items: [
      {
        id: 0,
        name: "MacBook Air with M2 chip, 8-Core GPU 8GB Unified Memory, 256GB SSD Storage",
        images: [
          {
            id: 0,
            image: cover3.src,
          },
        ],
        price: "$1,250.00",
        oldPrice: "$1,500.00",
        location: {
          name: "Bangkok, Thailand",
          lat: 13.77414738839083,
          lng: 100.30530351006097,
        },
      },
    ],
  },
];
