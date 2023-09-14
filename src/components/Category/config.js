import categoryBeutyImg from "images/main-page/category-beauty.png";
import categoryClothesImg from "images/main-page/category-clothes.png";
import categoryEducationImg from "images/main-page/category-education.png";
import categoryHobbiesImg from "images/main-page/category-hobbies.png";
import categoryHomeImg from "images/main-page/category-home.png";
import categoryKidsImg from "images/main-page/category-kids.png";
import categoryMotorsImg from "images/main-page/category-motors.png";
import categoryPetsImg from "images/main-page/category-pets.png";
import categoryPsychologyImg from "images/main-page/category-psychology.png";
import categoryRealEstateImg from "images/main-page/category-real-estate.png";
import categoryServicesImg from "images/main-page/category-services.png";
import categorySportImg from "images/main-page/category-sport.png";

export const categoriesList = [
  {
    id: 0,
    title: "Real Estate",
    image: categoryRealEstateImg.src,
    link: "/category",
    items: [
      {
        id: 0,
        title: "Flats and apartments",
        link: "/category",
      },
      {
        id: 1,
        title: "Houses, villas",
        link: "/category",
      },
      {
        id: 2,
        title: "Rooms",
        link: "/category",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Buy a home",
        link: "",
        items: [
          {
            id: 0,
            title: "Flats and apartments",
            link: "",
          },
          {
            id: 1,
            title: "Houses, villas",
            link: "",
          },
          {
            id: 2,
            title: "Rooms",
            link: "",
          },
          {
            id: 3,
            title: "Country house",
            link: "",
          },
          {
            id: 4,
            title: "New Building",
            link: "",
          },
        ],
      },
      {
        id: 1,
        title: "Commercial real estate",
        link: "",
        items: [
          {
            id: 0,
            title: "Buy",
            link: "",
          },
          {
            id: 1,
            title: "Rent",
            link: "",
          },
        ],
      },
      {
        id: 2,
        title: "Rent daily",
        link: "",
        items: [
          {
            id: 0,
            title: "Flats and apartments",
            link: "",
          },
          {
            id: 1,
            title: "Houses, villas",
            link: "",
          },
          {
            id: 2,
            title: "Rooms",
            link: "",
          },
        ],
      },
      {
        id: 3,
        title: "Rent long term",
        link: "",
        items: [
          {
            id: 0,
            title: "Flats and apartments",
            link: "",
          },
          {
            id: 1,
            title: "Houses, villas",
            link: "",
          },
          {
            id: 2,
            title: "Rooms",
            link: "",
          },
        ],
      },
      {
        id: 4,
        title: "Other categories",
        link: "",
        items: [
          {
            id: 0,
            title: "Land plots",
            link: "",
          },
          {
            id: 1,
            title: "Garages and car spaces",
            link: "",
          },
          {
            id: 2,
            title: "Overseas property",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Motors",
    image: categoryMotorsImg.src,
    link: "",
    items: [
      {
        id: 0,
        title: "Cars",
        link: "",
      },
      {
        id: 1,
        title: "Bikes, quadbike, scoot...",
        link: "",
      },
      {
        id: 2,
        title: "Bicycles, foot scooters",
        link: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Cars",
        link: "",
        items: [
          {
            id: 0,
            title: "New Cars",
            link: "",
          },
          {
            id: 1,
            title: "Used car",
            link: "",
          },
        ],
      },
      {
        id: 1,
        title: "Motorcycles and motor vehicles",
        link: "",
        items: [
          {
            id: 0,
            title: "Off-road",
            link: "",
          },
          {
            id: 1,
            title: "Karting",
            link: "",
          },
          {
            id: 2,
            title: "Quadbikes and buggies",
            link: "",
          },
          {
            id: 3,
            title: "Mopeds and scooters",
            link: "",
          },
          {
            id: 4,
            title: "Motorcycles",
            link: "",
          },
        ],
      },
      {
        id: 2,
        title: "Trucks and special equipment",
        link: "",
        items: [
          {
            id: 0,
            title: "Buses",
            link: "",
          },
          {
            id: 1,
            title: "Motorhomes",
            link: "",
          },
          {
            id: 2,
            title: "Truck cranes",
            link: "",
          },
          {
            id: 3,
            title: "Bulldozers",
            link: "",
          },
          {
            id: 4,
            title: "Trucks",
            link: "",
          },
        ],
      },
      {
        id: 3,
        title: "Water transportation",
        link: "",
        items: [
          {
            id: 0,
            title: "Row boats",
            link: "",
          },
          {
            id: 1,
            title: "Hydrocycles",
            link: "",
          },
          {
            id: 2,
            title: "Boats and Yachts",
            link: "",
          },
          {
            id: 3,
            title: "Motor boats and motors",
            link: "",
          },
        ],
      },
      {
        id: 4,
        title: "Spare parts and accessories",
        link: "",
        items: [
          {
            id: 0,
            title: "Spare parts",
            link: "",
          },
          {
            id: 1,
            title: "Tires, rims, and wheels",
            link: "",
          },
          {
            id: 2,
            title: "Audio & Video",
            link: "",
          },
          {
            id: 3,
            title: "Accessories",
            link: "",
          },
          {
            id: 4,
            title: "Tuning",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Pets",
    image: categoryPetsImg.src,
    link: "",
    items: [
      {
        id: 0,
        title: "Dogs",
        link: "",
      },
      {
        id: 1,
        title: "Birds and Parrots",
        link: "",
      },
      {
        id: 2,
        title: "Veterinary",
        link: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "",
        link: "",
        items: [
          {
            id: 0,
            title: "",
            link: "",
          },
          {
            id: 1,
            title: "",
            link: "",
          },
          {
            id: 2,
            title: "",
            link: "",
          },
          {
            id: 3,
            title: "",
            link: "",
          },
          {
            id: 4,
            title: "",
            link: "",
          },
        ],
      },
      {
        id: 1,
        title: "",
        link: "",
        items: [
          {
            id: 0,
            title: "",
            link: "",
          },
          {
            id: 1,
            title: "",
            link: "",
          },
          {
            id: 2,
            title: "",
            link: "",
          },
          {
            id: 3,
            title: "",
            link: "",
          },
          {
            id: 4,
            title: "",
            link: "",
          },
        ],
      },
      {
        id: 2,
        title: "",
        link: "",
        items: [
          {
            id: 0,
            title: "",
            link: "",
          },
          {
            id: 1,
            title: "",
            link: "",
          },
          {
            id: 2,
            title: "",
            link: "",
          },
          {
            id: 3,
            title: "",
            link: "",
          },
          {
            id: 4,
            title: "",
            link: "",
          },
        ],
      },
      {
        id: 3,
        title: "",
        link: "",
        items: [
          {
            id: 0,
            title: "",
            link: "",
          },
          {
            id: 1,
            title: "",
            link: "",
          },
          {
            id: 2,
            title: "",
            link: "",
          },
          {
            id: 3,
            title: "",
            link: "",
          },
          {
            id: 4,
            title: "",
            link: "",
          },
        ],
      },
      {
        id: 4,
        title: "",
        link: "",
        items: [
          {
            id: 0,
            title: "",
            link: "",
          },
          {
            id: 1,
            title: "",
            link: "",
          },
          {
            id: 2,
            title: "",
            link: "",
          },
          {
            id: 3,
            title: "",
            link: "",
          },
          {
            id: 4,
            title: "",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Beauty and Health",
    image: categoryBeutyImg.src,
    link: "",
    items: [
      {
        id: 0,
        title: "Beauticians",
        link: "",
      },
      {
        id: 1,
        title: "Hair Masters",
        link: "",
      },
      {
        id: 2,
        title: "Beauty Salons and Spa",
        link: "",
      },
    ],
  },
  {
    id: 4,
    title: "All for Home",
    image: categoryHomeImg.src,
    link: "",
    items: [
      {
        id: 0,
        title: "Furniture, Interior",
        link: "",
      },
      {
        id: 1,
        title: "Crockery and Kitchen…",
        link: "",
      },
      {
        id: 2,
        title: "Art",
        link: "",
      },
    ],
  },
  {
    id: 5,
    title: "Work and Education",
    image: categoryEducationImg.src,
    link: "",
    items: [
      {
        id: 0,
        title: "Vacanciesv",
        link: "",
      },
      {
        id: 1,
        title: "Job hunting",
        link: "",
      },
      {
        id: 2,
        title: "Courses, education",
        link: "",
      },
    ],
  },
  {
    id: 6,
    title: "Kids and Babies",
    image: categoryKidsImg.src,
    link: "",
    items: [
      {
        id: 0,
        title: "All for school",
        link: "",
      },
      {
        id: 1,
        title: "Shoes",
        link: "",
      },
      {
        id: 2,
        title: "Clothes",
        link: "",
      },
    ],
  },
  {
    id: 7,
    title: "Services",
    image: categoryServicesImg.src,
    link: "",
    items: [
      {
        id: 0,
        title: "Cleaning",
        link: "",
      },
      {
        id: 1,
        title: "Cooking",
        link: "",
      },
      {
        id: 2,
        title: "Tourist services",
        link: "",
      },
    ],
  },
  {
    id: 8,
    title: "Hobbies and Entertainment",
    image: categoryHobbiesImg.src,
    link: "",
    items: [
      {
        id: 0,
        title: "Hobbies and Interests",
        link: "",
      },
      {
        id: 1,
        title: "Books and Magazines",
        link: "",
      },
      {
        id: 2,
        title: "Music and Instruments",
        link: "",
      },
    ],
  },
  {
    id: 9,
    title: "Clothes and Footwear",
    image: categoryClothesImg.src,
    link: "",
    items: [
      {
        id: 0,
        title: "Women’s clothing",
        link: "",
      },
      {
        id: 1,
        title: "Women’s shoes",
        link: "",
      },
      {
        id: 2,
        title: "Veterinary",
        link: "",
      },
    ],
  },
  {
    id: 10,
    title: "Psychology and personal development",
    image: categoryPsychologyImg.src,
    link: "",
    items: [
      {
        id: 0,
        title: "Events, Occasions",
        link: "",
      },
      {
        id: 1,
        title: "Counseling, Training",
        link: "",
      },
      {
        id: 2,
        title: "Meditation",
        link: "",
      },
    ],
  },
  {
    id: 11,
    title: "Sports and outdoor activities",
    image: categorySportImg.src,
    link: "",
    items: [
      {
        id: 0,
        title: "Individual Trainings",
        link: "",
      },
      {
        id: 1,
        title: "Group Training",
        link: "",
      },
      {
        id: 2,
        title: "Fitness, Yoga",
        link: "",
      },
    ],
  },
];
