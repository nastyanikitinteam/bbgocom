export interface IWishlist {
  id: number;
  name: string;
  slug: string;
  description: string;
  update: string;
  items: Array<IWishlistItem>;
}

interface IWishlistItem {
  id: number;
  name: string;
  images: Array<IWishlistImage>;
  price: string;
  oldPrice: string;
  location: Array<IWishlistLocation>;
}

interface IWishlistImage {
  id: number;
  image: string;
}
interface IWishlistLocation {
  name: string;
  lat: number;
  lng: number;
}

export const initialWishlist = {
  id: 0,
  name: "",
  slug: "",
  description: "",
  update: "",
  items: [],
};
