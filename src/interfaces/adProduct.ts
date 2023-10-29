export interface IAd {
  id: number;
  category: string;
  subCategory: string;
  subCategoryItem?: string;
  name: string;
  slug: string;
  views: string;
  date: string;
  messages: number;
  images: Array<IAdImage>;
  price: string;
  oldPrice?: string;
  location: IAdLocation;
  adsList: string;
}

interface IAdImage {
  id: number;
  image: string;
}

interface IAdLocation {
  name: string;
  lat: number;
  lng: number;
}

export const initialAd = {
  id: 0,
  category: "",
  subCategory: "",
  subCategoryItem: "",
  name: "",
  slug: "",
  views: "",
  date: "",
  messages: 0,
  images: null,
  price: "",
  oldPrice: "",
  location: null,
  adsList: "",
};
