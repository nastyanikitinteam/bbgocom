export const tabsList = ["Buy", "Rent daily", "Long rent"];

export const propertyType = [
  "Apartments",
  "Houses",
  "Rooms",
  "Villas",
  "Country house",
  "Offices",
  "Garages and car spaces",
  "Other",
];

export const condition = ["Resale", "New building"];

export const repair = ["Renovated", "Without repair"];

export const numberOfBathrooms = [
  "1 Bathroom",
  "2 Bathroom",
  "3 Bathroom",
  "4 Bathroom",
  "Combined",
];

export const numberOfRooms = [
  "Study",
  "1 room",
  "2 room",
  "3 room",
  "4 room",
  "5 room",
  "Free layout",
];

export const carBrands = [
  "Toyota",
  "Ford",
  "Volkswagen",
  "Honda",
  "Chevrolet",
  "Nissan",
  "Hyundai",
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Subaru",
  "Kia",
  "Jeep",
  "Tesla",
  "Mazda",
  "Lexus",
  "GMC",
  "Porsche",
  "Volvo",
  "Land Rover",
  "Jaguar",
  "Chrysler",
  "Dodge",
  "Ram",
  "Buick",
  "Cadillac",
  "Acura",
  "Infiniti",
  "Mitsubishi",
  "Mini",
  "Fiat",
  "Alfa Romeo",
  "Genesis",
  "Maserati",
  "Bentley",
  "Rolls-Royce",
  "Ferrari",
  "Lamborghini",
];

export const colors = [
  "white",
  "silver",
  "grey",
  "black",
  "brown",
  "gold",
  "beige",
  "lightRed",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "darkBlue",
  "purple",
  "pink",
  "lightPink",
];

export const createList = [
  {
    key: "numberOfRooms",
    type: "radio",
    name: "Number of rooms",
    variants: [
      "Study",
      "1 room",
      "2 room",
      "3 room",
      "4 room",
      "5 room",
      "Free layout",
    ],
  },
  {
    key: "numberOfBathroom",
    type: "radio",
    name: "Number of bathroom",
    variants: [
      "1 Bathroom",
      "2 Bathroom",
      "3 Bathroom",
      "4 Bathroom",
      "Combined",
    ],
  },
  {
    key: "condition",
    type: "radio",
    name: "Condition",
    variants: ["Resale", "New building"],
  },
  {
    key: "repair",
    type: "radio",
    name: "Repair",
    variants: ["Renovated", "Without repair"],
  },
  {
    key: "floor",
    type: "input",
    name: "Floor",
    placeholder: "Floor",
  },
  {
    key: "totalArea",
    type: "input",
    name: "Total area, m²",
    placeholder: "Enter area",
  },
];
