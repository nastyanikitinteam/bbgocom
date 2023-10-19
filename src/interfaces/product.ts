export interface IProduct {
  id: number;
  name: string;
  slug: string;
  images: Array<IProductImage>;
  price: string;
  oldPrice?: string;
  location: IProductLocation;
  isWish?: boolean;
}

interface IProductImage {
  id: number;
  image: string;
}

interface IProductLocation {
  name: string;
  lat: number;
  lng: number;
}

export const initialProduct = {
  id: 0,
  name: "",
  slug: "",
  images: null,
  price: "",
  oldPrice: "",
  location: null,
  isWish: false,
};
