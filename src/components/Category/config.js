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

import heroBeutyImg from "images/category-page/beauty-hero.jpg";
import heroClothesImg from "images/category-page/clothes-hero.jpg";
import heroEducationImg from "images/category-page/work-education-hero.jpg";
import heroHobbiesImg from "images/category-page/hobbies-hero.jpg";
import heroHomeImg from "images/category-page/for-home-hero.jpg";
import heroKidsImg from "images/category-page/kids-hero.jpg";
import heroMotorsImg from "images/category-page/motors-hero.jpg";
import heroPetsImg from "images/category-page/pets-hero.jpg";
import heroPsychologyImg from "images/category-page/psychology-hero.jpg";
import heroRealEstateImg from "images/category-page/real-estate-hero.jpg";
import heroServicesImg from "images/category-page/services-hero.jpg";
import heroSportImg from "images/category-page/sport-hero.jpg";

import bannerBeutyImg from "images/category-page/beauty-banner.jpg";
import bannerClothesImg from "images/category-page/clothes-banner.jpg";
import bannerEducationImg from "images/category-page/work-education-banner.jpg";
import bannerHobbiesImg from "images/category-page/hobbies-banner.jpg";
import bannerHomeImg from "images/category-page/for-home-banner.jpg";
import bannerKidsImg from "images/category-page/kids-banner.jpg";
import bannerMotorsImg from "images/category-page/motors-banner.jpg";
import bannerPetsImg from "images/category-page/pets-banner.jpg";
import bannerPsychologyImg from "images/category-page/psychology-banner.jpg";
import bannerRealEstateImg from "images/category-page/real-estate-banner.jpg";
import bannerServicesImg from "images/category-page/services-banner.jpg";
import bannerSportImg from "images/category-page/sport-banner.jpg";

export const categoriesList = [
  {
    id: 0,
    title: "Real Estate",
    image: categoryRealEstateImg.src,
    heroImg: heroRealEstateImg.src,
    bannerImg: bannerRealEstateImg.src,
    slug: "real-estate",
    tags: [
      { id: 0, name: "Apartments", slug: "" },
      { id: 1, name: "Flat", slug: "" },
      { id: 2, name: "Houses", slug: "" },
      { id: 3, name: "Villas", slug: "" },
      { id: 4, name: "Rooms", slug: "" },
      { id: 5, name: "Country house", slug: "" },
      { id: 6, name: "New building", slug: "" },
      { id: 7, name: "Land plost", slug: "" },
      { id: 8, name: "Garages", slug: "" },
      { id: 9, name: "Buy Houses", slug: "" },
      { id: 10, name: "Rent Houses", slug: "" },
      { id: 11, name: "Buy Flat", slug: "" },
      { id: 12, name: "Rent Flat", slug: "" },
      { id: 13, name: "Car spaces", slug: "" },
      { id: 14, name: "Rent Daily", slug: "" },
    ],
    items: [
      {
        id: 0,
        title: "Flats and apartments",
        slug: "flats-and-apartments",
      },
      {
        id: 1,
        title: "Houses, villas",
        slug: "houses-villas",
      },
      {
        id: 2,
        title: "Rooms",
        slug: "rooms",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Buy a home",
        slug: "buy-a-home",
        items: [
          {
            id: 0,
            title: "Flats and apartments",
            slug: "flats-and-apartments",
          },
          {
            id: 1,
            title: "Houses, villas",
            slug: "houses-villas",
          },
          {
            id: 2,
            title: "Rooms",
            slug: "rooms",
          },
          {
            id: 3,
            title: "Country house",
            slug: "country-house",
          },
          {
            id: 4,
            title: "New Building",
            slug: "new-building",
          },
        ],
      },
      {
        id: 1,
        title: "Commercial real estate",
        slug: "сommercial-real-estate",
        items: [
          {
            id: 0,
            title: "Buy",
            slug: "buy",
          },
          {
            id: 1,
            title: "Rent",
            slug: "rent",
          },
        ],
      },
      {
        id: 2,
        title: "Rent daily",
        slug: "rent-daily",
        items: [
          {
            id: 0,
            title: "Flats and apartments",
            slug: "flats-and-apartments",
          },
          {
            id: 1,
            title: "Houses, villas",
            slug: "houses-villas",
          },
          {
            id: 2,
            title: "Rooms",
            slug: "rooms",
          },
        ],
      },
      {
        id: 3,
        title: "Rent long term",
        slug: "rent-long-term",
        items: [
          {
            id: 0,
            title: "Flats and apartments",
            slug: "flats-and-apartments",
          },
          {
            id: 1,
            title: "Houses, villas",
            slug: "houses-villas",
          },
          {
            id: 2,
            title: "Rooms",
            slug: "rooms",
          },
        ],
      },
      {
        id: 4,
        title: "Other categories",
        slug: "",
        items: [
          {
            id: 0,
            title: "Land plots",
            slug: "",
          },
          {
            id: 1,
            title: "Garages and car spaces",
            slug: "",
          },
          {
            id: 2,
            title: "Overseas property",
            slug: "",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Motors",
    image: categoryMotorsImg.src,
    heroImg: heroMotorsImg.src,
    bannerImg: bannerMotorsImg.src,
    slug: "motors",
    tags: [
      { id: 0, name: "Cars", slug: "" },
      { id: 1, name: "Bikes", slug: "" },
      { id: 2, name: "Quadbike", slug: "" },
      { id: 3, name: "Scooters", slug: "" },
      { id: 4, name: "Bicycles", slug: "" },
      { id: 5, name: "Foot scooters", slug: "" },
      { id: 6, name: "Tires", slug: "" },
      { id: 7, name: "Weels", slug: "" },
      { id: 8, name: "Spare parts", slug: "" },
      { id: 9, name: "Car seats", slug: "" },
      { id: 10, name: "Accessories", slug: "" },
      { id: 11, name: "Water transport", slug: "" },
      { id: 12, name: "Flying machines", slug: "" },
      { id: 13, name: "Auto service", slug: "" },
      { id: 14, name: "Repair and maintenance", slug: "" },
    ],
    items: [
      {
        id: 0,
        title: "Cars",
        slug: "",
      },
      {
        id: 1,
        title: "Bikes, quadbike, scoot...",
        slug: "",
      },
      {
        id: 2,
        title: "Bicycles, foot scooters",
        slug: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Cars",
        slug: "",
        items: [
          {
            id: 0,
            title: "New Cars",
            slug: "",
          },
          {
            id: 1,
            title: "Used car",
            slug: "",
          },
        ],
      },
      {
        id: 1,
        title: "Motorcycles and motor vehicles",
        slug: "",
        items: [
          {
            id: 0,
            title: "Off-road",
            slug: "",
          },
          {
            id: 1,
            title: "Karting",
            slug: "",
          },
          {
            id: 2,
            title: "Quadbikes and buggies",
            slug: "",
          },
          {
            id: 3,
            title: "Mopeds and scooters",
            slug: "",
          },
          {
            id: 4,
            title: "Motorcycles",
            slug: "",
          },
        ],
      },
      {
        id: 2,
        title: "Trucks and special equipment",
        slug: "",
        items: [
          {
            id: 0,
            title: "Buses",
            slug: "",
          },
          {
            id: 1,
            title: "Motorhomes",
            slug: "",
          },
          {
            id: 2,
            title: "Truck cranes",
            slug: "",
          },
          {
            id: 3,
            title: "Bulldozers",
            slug: "",
          },
          {
            id: 4,
            title: "Trucks",
            slug: "",
          },
        ],
      },
      {
        id: 3,
        title: "Water transportation",
        slug: "",
        items: [
          {
            id: 0,
            title: "Row boats",
            slug: "",
          },
          {
            id: 1,
            title: "Hydrocycles",
            slug: "",
          },
          {
            id: 2,
            title: "Boats and Yachts",
            slug: "",
          },
          {
            id: 3,
            title: "Motor boats and motors",
            slug: "",
          },
        ],
      },
      {
        id: 4,
        title: "Spare parts and accessories",
        slug: "",
        items: [
          {
            id: 0,
            title: "Spare parts",
            slug: "",
          },
          {
            id: 1,
            title: "Tires, rims, and wheels",
            slug: "",
          },
          {
            id: 2,
            title: "Audio & Video",
            slug: "",
          },
          {
            id: 3,
            title: "Accessories",
            slug: "",
          },
          {
            id: 4,
            title: "Tuning",
            slug: "",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Pets",
    image: categoryPetsImg.src,
    heroImg: heroPetsImg.src,
    bannerImg: bannerPetsImg.src,
    slug: "pets",
    tags: [
      { id: 0, name: "Puppies", slug: "" },
      { id: 1, name: "Dogs", slug: "" },
      { id: 2, name: "Dog Accessories", slug: "" },
    ],
    items: [
      {
        id: 0,
        title: "Dogs",
        slug: "",
      },
      {
        id: 1,
        title: "Birds and Parrots",
        slug: "",
      },
      {
        id: 2,
        title: "Veterinary",
        slug: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Dogs",
        slug: "",
        items: [
          {
            id: 0,
            title: "Puppies for Sale/Adoption",
            slug: "",
          },
          {
            id: 1,
            title: "Adult Dogs for Sale/Adoption",
            slug: "",
          },
          {
            id: 2,
            title: "Dog Accessories",
            slug: "",
          },
          {
            id: 3,
            title: "Dog Training Services",
            slug: "",
          },
          {
            id: 4,
            title: "Dog Walking Services",
            slug: "",
          },
          {
            id: 5,
            title: "Dog Boarding Services",
            slug: "",
          },
        ],
      },
      {
        id: 1,
        title: "Cats",
        slug: "",
        items: [
          {
            id: 0,
            title: "Kittens for Sale/Adoption",
            slug: "",
          },
          {
            id: 1,
            title: "Adult Cats for Sale/Adoption",
            slug: "",
          },
          {
            id: 2,
            title: "Cat Accessories",
            slug: "",
          },
          {
            id: 3,
            title: "Cat Grooming Services",
            slug: "",
          },
          {
            id: 4,
            title: "Cat Sitting Services",
            slug: "",
          },
          {
            id: 5,
            title: "Cat Boarding Services",
            slug: "",
          },
        ],
      },
      {
        id: 2,
        title: "Small Pets",
        slug: "",
        items: [
          {
            id: 0,
            title: "Rabbits for Sale/Adoption",
            slug: "",
          },
          {
            id: 1,
            title: "Guinea Pigs for Sale/Adoption",
            slug: "",
          },
          {
            id: 2,
            title: "Hamsters for Sale/Adoption",
            slug: "",
          },
          {
            id: 3,
            title: "Small Pet Accessories",
            slug: "",
          },
          {
            id: 4,
            title: "Small Pet Grooming Services",
            slug: "",
          },
          {
            id: 5,
            title: "Small Pet Sitting Services",
            slug: "",
          },
        ],
      },
      {
        id: 3,
        title: "Birds",
        slug: "",
        items: [
          {
            id: 0,
            title: "Birds for Sale/Adoption",
            slug: "",
          },
          {
            id: 1,
            title: "Bird Cages and Aviaries",
            slug: "",
          },
          {
            id: 2,
            title: "Bird Accessories",
            slug: "",
          },
          {
            id: 3,
            title: "Bird Grooming Services",
            slug: "",
          },
          {
            id: 4,
            title: "Bird Boarding Services",
            slug: "",
          },
        ],
      },
      {
        id: 4,
        title: "Other",
        slug: "",
        items: [
          {
            id: 0,
            title: "Fish and aquariums",
            slug: "",
          },
          {
            id: 1,
            title: "Snakes for Sale/Adoption",
            slug: "",
          },
          {
            id: 2,
            title: "Lizards for Sale/Adoption",
            slug: "",
          },
          {
            id: 3,
            title: "Turtles and Tortoises for Sale/Adoption",
            slug: "",
          },
          {
            id: 4,
            title: "Reptile and Amphibian Accessories",
            slug: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Beauty and Health",
    image: categoryBeutyImg.src,
    heroImg: heroBeutyImg.src,
    bannerImg: bannerBeutyImg.src,
    slug: "beauty-and-health",
    tags: [
      { id: 0, name: "Skincare", slug: "" },
      { id: 1, name: "Makeup", slug: "" },
      { id: 2, name: "Haircare", slug: "" },
    ],
    items: [
      {
        id: 0,
        title: "Beauticians",
        slug: "",
      },
      {
        id: 1,
        title: "Hair Masters",
        slug: "",
      },
      {
        id: 2,
        title: "Beauty Salons and Spa",
        slug: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Beauty Products",
        slug: "",
        items: [
          {
            id: 0,
            title: "Skincare",
            slug: "",
          },
          {
            id: 1,
            title: "Makeup",
            slug: "",
          },
          {
            id: 2,
            title: "Haircare",
            slug: "",
          },
          {
            id: 3,
            title: "Fragrances",
            slug: "",
          },
          {
            id: 4,
            title: "Personal Care",
            slug: "",
          },
        ],
      },
      {
        id: 1,
        title: "Beauty Services",
        slug: "",
        items: [
          {
            id: 0,
            title: "Salons and Spas",
            slug: "",
          },
          {
            id: 1,
            title: "Hair Styling and Cutting",
            slug: "",
          },
          {
            id: 2,
            title: "Nail Care and Manicure",
            slug: "",
          },
          {
            id: 3,
            title: "Facial Treatments",
            slug: "",
          },
          {
            id: 4,
            title: "Body Treatments",
            slug: "",
          },
          {
            id: 4,
            title: "Other",
            slug: "",
          },
        ],
      },
      {
        id: 2,
        title: "Fitness and Wellness",
        slug: "",
        items: [
          {
            id: 0,
            title: "Hair and Nail Salons",
            slug: "",
          },
          {
            id: 1,
            title: "Fitness and Personal Training Services",
            slug: "",
          },
          {
            id: 2,
            title: "Cosmetic and Plastic Surgery Services",
            slug: "",
          },
          {
            id: 3,
            title: "Wellness Retreats and Workshops",
            slug: "",
          },
          {
            id: 4,
            title: "Holistic Health Services",
            slug: "",
          },
          {
            id: 5,
            title: "Other",
            slug: "",
          },
        ],
      },
      {
        id: 3,
        title: "Beauty and Health Tips",
        slug: "",
        items: [
          {
            id: 0,
            title: "Skincare Tips",
            slug: "",
          },
          {
            id: 1,
            title: "Makeup Tutorials",
            slug: "",
          },
          {
            id: 2,
            title: "Haircare Advice",
            slug: "",
          },
          {
            id: 3,
            title: "Healthy Living Tips",
            slug: "",
          },
          {
            id: 4,
            title: "Self-care Techniques",
            slug: "",
          },
          {
            id: 5,
            title: "Other",
            slug: "",
          },
        ],
      },
      {
        id: 4,
        title: "Health and Medical Services",
        slug: "",
        items: [
          {
            id: 0,
            title: "Medical and Dental Services",
            slug: "",
          },
          {
            id: 1,
            title: "Mental Health Counseling Services",
            slug: "",
          },
          {
            id: 2,
            title: "Physical Therapy and Rehabilitation Services",
            slug: "",
          },
          {
            id: 3,
            title: "Chiropractic Services",
            slug: "",
          },
          {
            id: 4,
            title: "Alternative and Complementary Medicine Services",
            slug: "",
          },
          {
            id: 5,
            title: "Home Healthcare Services",
            slug: "",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "All for Home",
    image: categoryHomeImg.src,
    heroImg: heroHomeImg.src,
    bannerImg: bannerHomeImg.src,
    slug: "all-for-home",
    tags: [
      { id: 0, name: "Building Materials", slug: "" },
      { id: 1, name: "Tools", slug: "" },
      { id: 2, name: "Plumbing", slug: "" },
      { id: 3, name: "Water", slug: "" },
      { id: 4, name: "Sauna", slug: "" },
      { id: 5, name: "Doors", slug: "" },
      { id: 6, name: "Garden Equipment", slug: "" },
    ],
    items: [
      {
        id: 0,
        title: "Furniture, Interior",
        slug: "",
      },
      {
        id: 1,
        title: "Crockery and Kitchen…",
        slug: "",
      },
      {
        id: 2,
        title: "Art",
        slug: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Repair and construction",
        slug: "",
        items: [
          {
            id: 0,
            title: "Building Materials",
            slug: "",
          },
          {
            id: 1,
            title: "Tools",
            slug: "",
          },
          {
            id: 2,
            title: "Plumbing, water & Sauna",
            slug: "",
          },
          {
            id: 3,
            title: "Doors",
            slug: "",
          },
          {
            id: 4,
            title: "Garden Equipment",
            slug: "",
          },
          {
            id: 5,
            title: "Windows & Balcony",
            slug: "",
          },
          {
            id: 6,
            title: "Fireplaces & Heaters",
            slug: "",
          },
        ],
      },
      {
        id: 1,
        title: "Furniture and interior",
        slug: "",
        items: [
          {
            id: 0,
            title: "Beds, sofas and chairs",
            slug: "",
          },
          {
            id: 1,
            title: "Closets, chests of drawers and shelving units",
            slug: "",
          },
          {
            id: 2,
            title: "Tables and chairs",
            slug: "",
          },
          {
            id: 3,
            title: "Textiles and carpets",
            slug: "",
          },
          {
            id: 4,
            title: "Kitchen sets",
            slug: "",
          },
          {
            id: 5,
            title: "Interior items, art",
            slug: "",
          },
          {
            id: 6,
            title: "Lighting",
            slug: "",
          },
          {
            id: 7,
            title: "Computer desks and chairs",
            slug: "",
          },
          {
            id: 6,
            title: "Pedestals and drawer units",
            slug: "",
          },
          {
            id: 8,
            title: "Other",
            slug: "",
          },
        ],
      },
      {
        id: 2,
        title: "Home Appliances",
        slug: "",
        items: [
          {
            id: 0,
            title: "For the kitchen",
            slug: "",
          },
          {
            id: 1,
            title: "For Home",
            slug: "",
          },
          {
            id: 2,
            title: "Climate control equipment",
            slug: "",
          },
          {
            id: 3,
            title: "For individual care",
            slug: "",
          },
          {
            id: 4,
            title: "Other",
            slug: "",
          },
        ],
      },
      {
        id: 3,
        title: "Cookware and kitchen products",
        slug: "",
        items: [
          {
            id: 0,
            title: "Table setting",
            slug: "",
          },
          {
            id: 1,
            title: "Cooking",
            slug: "",
          },
          {
            id: 2,
            title: "Food storage",
            slug: "",
          },
          {
            id: 3,
            title: "Preparing drinks",
            slug: "",
          },
          {
            id: 4,
            title: "Household Goods",
            slug: "",
          },
          {
            id: 5,
            title: "Kitchen Accessories",
            slug: "",
          },
          {
            id: 6,
            title: "Other",
            slug: "",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Work and Education",
    image: categoryEducationImg.src,
    heroImg: heroEducationImg.src,
    bannerImg: bannerEducationImg.src,
    slug: "work-and-education",
    tags: [
      { id: 0, name: "Information Technology", slug: "" },
      { id: 1, name: "Healthcare", slug: "" },
      { id: 2, name: "Finance", slug: "" },
      { id: 3, name: "Accounting", slug: "" },
      { id: 4, name: "Sales", slug: "" },
      { id: 5, name: "Marketing", slug: "" },
      { id: 6, name: "Education", slug: "" },
      { id: 7, name: "Training", slug: "" },
      { id: 8, name: "Development", slug: "" },
      { id: 9, name: "Language Learning", slug: "" },
      { id: 10, name: "Resume Writing", slug: "" },
      { id: 11, name: "Career Coaching", slug: "" },
      { id: 12, name: "Job Search", slug: "" },
      { id: 13, name: "Interview Preparation", slug: "" },
      { id: 14, name: "Franchises", slug: "" },
    ],

    items: [
      {
        id: 0,
        title: "Vacanciesv",
        slug: "",
      },
      {
        id: 1,
        title: "Job hunting",
        slug: "",
      },
      {
        id: 2,
        title: "Courses, education",
        slug: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Jobs",
        slug: "",
        items: [
          {
            id: 0,
            title: "Information Technology",
            slug: "",
          },
          {
            id: 1,
            title: "Healthcare",
            slug: "",
          },
          {
            id: 2,
            title: "Finance and Accounting",
            slug: "",
          },
          {
            id: 3,
            title: "Sales and Marketing",
            slug: "",
          },
          {
            id: 4,
            title: "Education and Training",
            slug: "",
          },
          {
            id: 5,
            title: "Other Jobs",
            slug: "",
          },
        ],
      },
      {
        id: 1,
        title: "Education",
        slug: "",
        items: [
          {
            id: 0,
            title: "Higher Education",
            slug: "",
          },
          {
            id: 1,
            title: "K-12 Education",
            slug: "",
          },
          {
            id: 2,
            title: "Professional Development",
            slug: "",
          },
          {
            id: 3,
            title: "Online Learning",
            slug: "",
          },
          {
            id: 4,
            title: "Language Learning",
            slug: "",
          },
          {
            id: 5,
            title: "Other Education",
            slug: "",
          },
        ],
      },
      {
        id: 2,
        title: "Career Services",
        slug: "",
        items: [
          {
            id: 0,
            title: "Resume Writing",
            slug: "",
          },
          {
            id: 1,
            title: "Career Coaching",
            slug: "",
          },
          {
            id: 2,
            title: "Job Search Assistance",
            slug: "",
          },
          {
            id: 3,
            title: "Interview Preparation",
            slug: "",
          },
          {
            id: 4,
            title: "LinkedIn Profile Optimization",
            slug: "",
          },
          {
            id: 5,
            title: "Other Career Services",
            slug: "",
          },
        ],
      },
      {
        id: 3,
        title: "Business Opportunities",
        slug: "",
        items: [
          {
            id: 0,
            title: "Franchises",
            slug: "",
          },
          {
            id: 1,
            title: "Business for Sale",
            slug: "",
          },
          {
            id: 2,
            title: "Work from Home",
            slug: "",
          },
          {
            id: 3,
            title: "Startups",
            slug: "",
          },
          {
            id: 4,
            title: "Investment Opportunities",
            slug: "",
          },
          {
            id: 5,
            title: "Other Business Opportunities",
            slug: "",
          },
        ],
      },
      {
        id: 4,
        title: "Freelance and Consulting",
        slug: "",
        items: [
          {
            id: 0,
            title: "Freelance Writing and Editing",
            slug: "",
          },
          {
            id: 1,
            title: "Graphic Design",
            slug: "",
          },
          {
            id: 2,
            title: "Web Development",
            slug: "",
          },
          {
            id: 3,
            title: "Consulting",
            slug: "",
          },
          {
            id: 4,
            title: "Translation Services",
            slug: "",
          },
          {
            id: 5,
            title: "Other Freelance and Consulting",
            slug: "",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Kids and Babies",
    image: categoryKidsImg.src,
    heroImg: heroKidsImg.src,
    bannerImg: bannerKidsImg.src,
    slug: "kids-and-babies",
    tags: [
      { id: 0, name: "All for school", slug: "" },
      { id: 1, name: "Shoes", slug: "" },
      { id: 2, name: "Clothes", slug: "" },
      { id: 3, name: "Toys", slug: "" },
      { id: 4, name: "Scooters", slug: "" },
    ],
    items: [
      {
        id: 0,
        title: "All for school",
        slug: "",
      },
      {
        id: 1,
        title: "Shoes",
        slug: "",
      },
      {
        id: 2,
        title: "Clothes",
        slug: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Goods and toys",
        slug: "",
        items: [
          {
            id: 0,
            title: "All for school",
            slug: "",
          },
          {
            id: 1,
            title: "Shoes",
            slug: "",
          },
          {
            id: 2,
            title: "Clothes",
            slug: "",
          },
          {
            id: 3,
            title: "Toys",
            slug: "",
          },
          {
            id: 4,
            title: "Scooters, Bikes",
            slug: "",
          },
          {
            id: 5,
            title: "Other",
            slug: "",
          },
        ],
      },
      {
        id: 1,
        title: "Furniture and Equipment",
        slug: "",
        items: [
          {
            id: 0,
            title: "Strollers and Car Seats",
            slug: "",
          },
          {
            id: 1,
            title: "Nursery Furniture",
            slug: "",
          },
          {
            id: 2,
            title: "Changing tables",
            slug: "",
          },
          {
            id: 3,
            title: "High chairs",
            slug: "",
          },
          {
            id: 4,
            title: "Playpens and play yards",
            slug: "",
          },
          {
            id: 5,
            title: "Baby monitors",
            slug: "",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Services",
    image: categoryServicesImg.src,
    heroImg: heroServicesImg.src,
    bannerImg: bannerServicesImg.src,
    slug: "services",
    tags: [
      { id: 0, name: "Domestic", slug: "" },
      { id: 1, name: "Cleaning", slug: "" },
      { id: 2, name: "Culinary", slug: "" },
      { id: 3, name: "Tour", slug: "" },
      { id: 4, name: "Designer", slug: "" },
      { id: 5, name: "Realtor", slug: "" },
      { id: 6, name: "Beauty salons", slug: "" },
      { id: 7, name: "Fitness", slug: "" },
      { id: 8, name: "Transportation", slug: "" },
      { id: 9, name: "Cargo", slug: "" },
      { id: 10, name: "Photo and Video", slug: "" },
      { id: 11, name: "Landscape", slug: "" },
      { id: 12, name: "Babysitters", slug: "" },
      { id: 13, name: "Nurses", slug: "" },
      { id: 14, name: "Commercial", slug: "" },
      { id: 15, name: "Polygraphy", slug: "" },
      { id: 16, name: "Clothing care", slug: "" },
      { id: 17, name: "Sewing", slug: "" },
      { id: 18, name: "Furniture repair", slug: "" },
      { id: 19, name: "Events", slug: "" },
      { id: 20, name: "Legal", slug: "" },
      { id: 21, name: "Financial", slug: "" },
      { id: 22, name: "Computer", slug: "" },
      { id: 23, name: "Internet", slug: "" },
    ],

    items: [
      {
        id: 0,
        title: "Cleaning",
        slug: "",
      },
      {
        id: 1,
        title: "Cooking",
        slug: "",
      },
      {
        id: 2,
        title: "Tourist services",
        slug: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Home Services",
        slug: "",
        items: [
          {
            id: 0,
            title: "Cleaning Services",
            slug: "",
          },
          {
            id: 1,
            title: "Pest Control Services",
            slug: "",
          },
          {
            id: 2,
            title: "Repair and Maintenance Services",
            slug: "",
          },
          {
            id: 3,
            title: "Interior design services",
            slug: "",
          },
          {
            id: 4,
            title: "Plumbing Services",
            slug: "",
          },
          {
            id: 5,
            title: "Electrical Services",
            slug: "",
          },
        ],
      },
      {
        id: 1,
        title: "Transport, transportation",
        slug: "",
        items: [
          {
            id: 0,
            title: "Car service",
            slug: "",
          },
          {
            id: 1,
            title: "Rent Auto",
            slug: "",
          },
          {
            id: 2,
            title: "Commercial freight and cartage",
            slug: "",
          },
          {
            id: 3,
            title: "Movers and movers",
            slug: "",
          },
          {
            id: 4,
            title: "Travel to the airport",
            slug: "",
          },
          {
            id: 5,
            title: "Rent ingesis",
            slug: "",
          },
        ],
      },
      {
        id: 2,
        title: "Culinary",
        slug: "",
        items: [
          {
            id: 0,
            title: "Restaurants",
            slug: "",
          },
          {
            id: 1,
            title: "Food delivery",
            slug: "",
          },
          {
            id: 2,
            title: "Catering",
            slug: "",
          },
          {
            id: 3,
            title: "Home cooking",
            slug: "",
          },
          {
            id: 4,
            title: "Baked goods",
            slug: "",
          },
          {
            id: 5,
            title: "Other",
            slug: "",
          },
        ],
      },
      {
        id: 3,
        title: "Professional Services",
        slug: "",
        items: [
          {
            id: 0,
            title: "Legal Services",
            slug: "",
          },
          {
            id: 1,
            title: "Financial services",
            slug: "",
          },
          {
            id: 2,
            title: "Marketing and Advertising Services",
            slug: "",
          },
          {
            id: 3,
            title: "Business Consulting Services",
            slug: "",
          },
          {
            id: 4,
            title: "Event and Entertainment Services",
            slug: "",
          },
          {
            id: 4,
            title: "Other",
            slug: "",
          },
        ],
      },
      {
        id: 4,
        title: "Computer and IT Services",
        slug: "",
        items: [
          {
            id: 0,
            title: "Computer Repair and Maintenance Services",
            slug: "",
          },
          {
            id: 1,
            title: "IT Consulting Services",
            slug: "",
          },
          {
            id: 2,
            title: "Data Recovery Services",
            slug: "",
          },
          {
            id: 3,
            title: "Website Design",
            slug: "",
          },
          {
            id: 4,
            title: "Development Services",
            slug: "",
          },
          {
            id: 5,
            title: "Software Development Services",
            slug: "",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Hobbies and Entertainment",
    image: categoryHobbiesImg.src,
    heroImg: heroHobbiesImg.src,
    bannerImg: bannerHobbiesImg.src,
    slug: "hobbies-and-entertainment",
    tags: [
      { id: 0, name: "Painting", slug: "" },
      { id: 1, name: "Drawing", slug: "" },
      { id: 2, name: "Pottery", slug: "" },
      { id: 3, name: "Ceramics", slug: "" },
      { id: 4, name: "Paper Crafts", slug: "" },
      { id: 5, name: "Jewelry Making", slug: "" },
    ],
    items: [
      {
        id: 0,
        title: "Hobbies and Interests",
        slug: "",
      },
      {
        id: 1,
        title: "Books and Magazines",
        slug: "",
      },
      {
        id: 2,
        title: "Music and Instruments",
        slug: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Creative Arts and Crafts",
        slug: "",
        items: [
          {
            id: 0,
            title: "Painting and Drawing",
            slug: "",
          },
          {
            id: 1,
            title: "Pottery and Ceramics",
            slug: "",
          },
          {
            id: 2,
            title: "Paper Crafts",
            slug: "",
          },
          {
            id: 3,
            title: "Fiber Arts",
            slug: "",
          },
          {
            id: 4,
            title: "Jewelry Making",
            slug: "",
          },
          {
            id: 5,
            title: "Sewing and Textile Crafts",
            slug: "",
          },
        ],
      },
      {
        id: 1,
        title: "Music and Instruments",
        slug: "",
        items: [
          {
            id: 0,
            title: "Instruments for Sale",
            slug: "",
          },
          {
            id: 1,
            title: "Music Lessons",
            slug: "",
          },
          {
            id: 2,
            title: "Sheet Music and Books",
            slug: "",
          },
          {
            id: 3,
            title: "Music Production and Recording",
            slug: "",
          },
          {
            id: 4,
            title: "Music Events and Concerts",
            slug: "",
          },
          {
            id: 5,
            title: "Accessories and Gear",
            slug: "",
          },
        ],
      },
      {
        id: 2,
        title: "Gaming and Collectibles",
        slug: "",
        items: [
          {
            id: 0,
            title: "Video Games",
            slug: "",
          },
          {
            id: 1,
            title: "Board Games and Puzzles",
            slug: "",
          },
          {
            id: 2,
            title: "Trading Cards",
            slug: "",
          },
          {
            id: 3,
            title: "Collectibles and Memorabilia",
            slug: "",
          },
          {
            id: 4,
            title: "Gaming Accessories",
            slug: "",
          },
          {
            id: 5,
            title: "Online Gaming Communities",
            slug: "",
          },
        ],
      },
      {
        id: 3,
        title: "Performing Arts",
        slug: "",
        items: [
          {
            id: 0,
            title: "Theater Productions",
            slug: "",
          },
          {
            id: 1,
            title: "Dance Classes",
            slug: "",
          },
          {
            id: 2,
            title: "Acting Workshops",
            slug: "",
          },
          {
            id: 3,
            title: "Audition Opportunities",
            slug: "",
          },
          {
            id: 4,
            title: "Musical Theater",
            slug: "",
          },
          {
            id: 5,
            title: "Performing Arts Events",
            slug: "",
          },
        ],
      },
      {
        id: 4,
        title: "Outdoor Recreation",
        slug: "",
        items: [
          {
            id: 0,
            title: "Gardening Supplies",
            slug: "",
          },
          {
            id: 1,
            title: "Birdwatching",
            slug: "",
          },
          {
            id: 2,
            title: "Hiking and Trekking",
            slug: "",
          },
          {
            id: 3,
            title: "Camping Gear",
            slug: "",
          },
          {
            id: 4,
            title: "Fishing and Angling",
            slug: "",
          },
          {
            id: 5,
            title: "Outdoor Photography",
            slug: "",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Clothes and Footwear",
    image: categoryClothesImg.src,
    heroImg: heroClothesImg.src,
    bannerImg: bannerClothesImg.src,
    slug: "clothes-and-footwear",
    tags: [
      { id: 0, name: "Men Shoes", slug: "" },
      { id: 1, name: "Woman Shoes", slug: "" },
      { id: 2, name: "Men Outerwear", slug: "" },
      { id: 3, name: "Woman Outerwear", slug: "" },
      { id: 4, name: "Men Sportswear", slug: "" },
      { id: 5, name: "Woman Sportswear", slug: "" },
      { id: 6, name: "Dresses", slug: "" },
      { id: 7, name: "Sundresses", slug: "" },
      { id: 8, name: "Skirts", slug: "" },
    ],
    items: [
      {
        id: 0,
        title: "Women’s clothing",
        slug: "",
      },
      {
        id: 1,
        title: "Women’s shoes",
        slug: "",
      },
      {
        id: 2,
        title: "Veterinary",
        slug: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "For Women",
        slug: "",
        items: [
          {
            id: 0,
            title: "Shoes",
            slug: "",
          },
          {
            id: 1,
            title: "Outerwear",
            slug: "",
          },
          {
            id: 2,
            title: "Dresses, sundresses and skirts",
            slug: "",
          },
          {
            id: 3,
            title: "Sportswear",
            slug: "",
          },
          {
            id: 4,
            title: "Jeans, trousers, shorts",
            slug: "",
          },
          {
            id: 5,
            title: "Underwear for women",
            slug: "",
          },
          {
            id: 6,
            title: "Sweatshirts, light and cardigans",
            slug: "",
          },
          {
            id: 7,
            title: "Suits and jackets",
            slug: "",
          },
          {
            id: 8,
            title: "Nightwear and home clothes",
            slug: "",
          },
          {
            id: 9,
            title: "Blouses and shirts",
            slug: "",
          },
          {
            id: 10,
            title: "Hosiery products",
            slug: "",
          },
          {
            id: 11,
            title: "Swimwear and beachwear",
            slug: "",
          },
          {
            id: 12,
            title: "Coveralls and semi-coveralls",
            slug: "",
          },
          {
            id: 13,
            title: "Other",
            slug: "",
          },
        ],
      },
      {
        id: 1,
        title: "For Men",
        slug: "",
        items: [
          {
            id: 0,
            title: "Shoes",
            slug: "",
          },
          {
            id: 1,
            title: "Outerwear",
            slug: "",
          },
          {
            id: 2,
            title: "Shirts, t-shirts and tank tops",
            slug: "",
          },
          {
            id: 3,
            title: "Sportswear",
            slug: "",
          },
          {
            id: 4,
            title: "Jeans, pants",
            slug: "",
          },
          {
            id: 5,
            title: "Underwear for men",
            slug: "",
          },
          {
            id: 6,
            title: "Shorts and capris",
            slug: "",
          },
          {
            id: 7,
            title: "Sweatshirts, light and cardigans",
            slug: "",
          },
          {
            id: 8,
            title: "Scarves and ghettos",
            slug: "",
          },
          {
            id: 9,
            title: "Nightwear and home clothes",
            slug: "",
          },
          {
            id: 10,
            title: "Beach shorts and swimming trunks",
            slug: "",
          },
          {
            id: 11,
            title: "Suits and jackets",
            slug: "",
          },
          {
            id: 12,
            title: "Other",
            slug: "",
          },
        ],
      },
      {
        id: 2,
        title: "For Girls",
        slug: "",
        items: [
          {
            id: 0,
            title: "Shoes",
            slug: "",
          },
          {
            id: 1,
            title: "Outerwear",
            slug: "",
          },
          {
            id: 2,
            title: "T-shirts and blouses",
            slug: "",
          },
          {
            id: 3,
            title: "Dresses, sundresses and skirts",
            slug: "",
          },
          {
            id: 4,
            title: "Sets and tracksuits",
            slug: "",
          },
          {
            id: 5,
            title: "Pajamas and home clothes",
            slug: "",
          },
          {
            id: 6,
            title: "Hoodies and sweatshirts",
            slug: "",
          },
          {
            id: 7,
            title: "Swimwear and beachwear",
            slug: "",
          },
          {
            id: 8,
            title: "Underwear for girls",
            slug: "",
          },
          {
            id: 9,
            title: "Sweaters and sweaters",
            slug: "",
          },
          {
            id: 10,
            title: "Coveralls and semi-coveralls",
            slug: "",
          },
        ],
      },
      {
        id: 3,
        title: "For Boys",
        slug: "",
        items: [
          {
            id: 0,
            title: "Shoes",
            slug: "",
          },
          {
            id: 1,
            title: "Outerwear",
            slug: "",
          },
          {
            id: 2,
            title: "T-shirts and shirts",
            slug: "",
          },
          {
            id: 3,
            title: "Jeans, trousers, shorts",
            slug: "",
          },
          {
            id: 4,
            title: "Sets and tracksuits",
            slug: "",
          },
          {
            id: 5,
            title: "Hoodies and sweatshirts for boys",
            slug: "",
          },
          {
            id: 6,
            title: "Pajamas and home clothes",
            slug: "",
          },
          {
            id: 7,
            title: "Underwear for boys",
            slug: "",
          },
          {
            id: 8,
            title: "Swimwear and beachwear for boys",
            slug: "",
          },
          {
            id: 9,
            title: "Classic suits and jackets",
            slug: "",
          },
          {
            id: 10,
            title: "Sweaters and sweaters",
            slug: "",
          },
          {
            id: 11,
            title: "Coveralls and semi-coveralls",
            slug: "",
          },
        ],
      },
      {
        id: 4,
        title: "Bags & Accessories",
        slug: "",
        items: [
          {
            id: 0,
            title: "Bags",
            slug: "",
          },
          {
            id: 1,
            title: "Scarves and shawls",
            slug: "",
          },
          {
            id: 2,
            title: "Backpacks",
            slug: "",
          },
          {
            id: 3,
            title: "Mittens",
            slug: "",
          },
          {
            id: 4,
            title: "Cosmetic bags and carriers",
            slug: "",
          },
          {
            id: 5,
            title: "Wallets and purses",
            slug: "",
          },
          {
            id: 6,
            title: "Sunglasses",
            slug: "",
          },
          {
            id: 7,
            title: "Belts and belts",
            slug: "",
          },
          {
            id: 8,
            title: "Umbrellas",
            slug: "",
          },
          {
            id: 9,
            title: "Ties and suspenders",
            slug: "",
          },
          {
            id: 10,
            title: "Jewelry",
            slug: "",
          },
          {
            id: 11,
            title: "Accessories for children",
            slug: "",
          },
          {
            id: 12,
            title: "Accessories for bags",
            slug: "",
          },
          {
            id: 13,
            title: "Other",
            slug: "",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Psychology and personal development",
    image: categoryPsychologyImg.src,
    heroImg: heroPsychologyImg.src,
    bannerImg: bannerPsychologyImg.src,
    slug: "psychology-and-personal-development",
    tags: [
      { id: 0, name: "Individual Therapy", slug: "" },
      { id: 1, name: "Couples Therapy", slug: "" },
      { id: 2, name: "Family Therapy", slug: "" },
      { id: 3, name: "Child", slug: "" },
    ],
    items: [
      {
        id: 0,
        title: "Events, Occasions",
        slug: "",
      },
      {
        id: 1,
        title: "Counseling, Training",
        slug: "",
      },
      {
        id: 2,
        title: "Meditation",
        slug: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Therapy and Counseling",
        slug: "",
        items: [
          {
            id: 0,
            title: "Individual Therapy",
            slug: "",
          },
          {
            id: 1,
            title: "Couples Therapy",
            slug: "",
          },
          {
            id: 2,
            title: "Family Therapy",
            slug: "",
          },
          {
            id: 3,
            title: "Child and Adolescent Therapy",
            slug: "",
          },
          {
            id: 4,
            title: "Trauma and PTSD Therapy",
            slug: "",
          },
          {
            id: 5,
            title: "Addiction counseling",
            slug: "",
          },
        ],
      },
      {
        id: 1,
        title: "Life Coaching and Personal Growth",
        slug: "",
        items: [
          {
            id: 0,
            title: "Goal Setting and Achievement",
            slug: "",
          },
          {
            id: 1,
            title: "Career Development",
            slug: "",
          },
          {
            id: 2,
            title: "Confidence and Self-Esteem",
            slug: "",
          },
          {
            id: 3,
            title: "Time Management and Productivity",
            slug: "",
          },
          {
            id: 4,
            title: "Leadership and Professional Skills",
            slug: "",
          },
          {
            id: 5,
            title: "Financial Planning",
            slug: "",
          },
        ],
      },
      {
        id: 2,
        title: "Mental Health Resources",
        slug: "",
        items: [
          {
            id: 0,
            title: "Anxiety Management Techniques",
            slug: "",
          },
          {
            id: 1,
            title: "Depression and Mood Disorders",
            slug: "",
          },
          {
            id: 2,
            title: "Meditation Practices",
            slug: "",
          },
          {
            id: 3,
            title: "Stress Reduction and Relaxation",
            slug: "",
          },
          {
            id: 4,
            title: "Coping with Grief and Loss",
            slug: "",
          },
          {
            id: 5,
            title: "Building Resilience",
            slug: "",
          },
        ],
      },
      {
        id: 3,
        title: "Relationship and Communication",
        slug: "",
        items: [
          {
            id: 0,
            title: "Effective Communication Skills",
            slug: "",
          },
          {
            id: 1,
            title: "Conflict Resolution Strategies",
            slug: "",
          },
          {
            id: 2,
            title: "Intimacy and Emotional Connection",
            slug: "",
          },
          {
            id: 3,
            title: "Dating and Relationship Coaching",
            slug: "",
          },
          {
            id: 4,
            title: "Marriage Enrichment ",
            slug: "",
          },
          {
            id: 5,
            title: "Divorce Recovery",
            slug: "",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: "Sports and outdoor activities",
    image: categorySportImg.src,
    heroImg: heroSportImg.src,
    bannerImg: bannerSportImg.src,
    slug: "sports-and-outdoor-activities",
    tags: [
      { id: 0, name: "Running Gear", slug: "" },
      { id: 1, name: "Team Sports Equipment", slug: "" },
      { id: 2, name: "Outdoor Gear", slug: "" },
      { id: 3, name: "Fitness Equipment", slug: "" },
      { id: 4, name: "Personal Training", slug: "" },
      { id: 5, name: "Group Workout", slug: "" },
      { id: 6, name: "Camping", slug: "" },
      { id: 7, name: "Rock Climbing", slug: "" },
      { id: 8, name: "Water Sports", slug: "" },
    ],
    items: [
      {
        id: 0,
        title: "Individual Trainings",
        slug: "",
      },
      {
        id: 1,
        title: "Group Training",
        slug: "",
      },
      {
        id: 2,
        title: "Fitness, Yoga",
        slug: "",
      },
    ],
    subcategories: [
      {
        id: 0,
        title: "Sports Equipment",
        slug: "",
        items: [
          {
            id: 0,
            title: "Running Gear",
            slug: "",
          },
          {
            id: 1,
            title: "Team Sports Equipment",
            slug: "",
          },
          {
            id: 2,
            title: "Outdoor Gear",
            slug: "",
          },
          {
            id: 3,
            title: "Fitness Equipment",
            slug: "",
          },
          {
            id: 4,
            title: "Water Sports Equipment",
            slug: "",
          },
          {
            id: 5,
            title: "Cycling Equipment",
            slug: "",
          },
        ],
      },
      {
        id: 1,
        title: "Workout and Training",
        slug: "",
        items: [
          {
            id: 0,
            title: "Personal Training",
            slug: "",
          },
          {
            id: 1,
            title: "Group Workout",
            slug: "",
          },
          {
            id: 2,
            title: "Online Workout",
            slug: "",
          },
          {
            id: 3,
            title: "Specialty Training",
            slug: "",
          },
          {
            id: 4,
            title: "Workout Events",
            slug: "",
          },
          {
            id: 5,
            title: "Other",
            slug: "",
          },
        ],
      },
      {
        id: 2,
        title: "Outdoor Adventure",
        slug: "",
        items: [
          {
            id: 0,
            title: "Hiking and Trekking",
            slug: "",
          },
          {
            id: 1,
            title: "Camping",
            slug: "",
          },
          {
            id: 2,
            title: "Rock Climbing",
            slug: "",
          },
          {
            id: 3,
            title: "Water Sports",
            slug: "",
          },
          {
            id: 4,
            title: "Winter Sports",
            slug: "",
          },
          {
            id: 5,
            title: "Wildlife and Nature Tours",
            slug: "",
          },
        ],
      },
      {
        id: 3,
        title: "Sports Leagues and Teams",
        slug: "",
        items: [
          {
            id: 0,
            title: "Soccer Leagues and Teams",
            slug: "",
          },
          {
            id: 1,
            title: "Basketball Leagues and Teams",
            slug: "",
          },
          {
            id: 2,
            title: "Baseball and Softball Leagues",
            slug: "",
          },
          {
            id: 3,
            title: "Football Leagues and Teams",
            slug: "",
          },
          {
            id: 4,
            title: "Tennis Clubs and Leagues",
            slug: "",
          },
          {
            id: 5,
            title: "Martial Arts Schools",
            slug: "",
          },
        ],
      },
    ],
  },
];
