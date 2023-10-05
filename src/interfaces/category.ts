export interface ICategory {
  id: number;
  title: string;
  image: string;
  heroImg: string;
  bannerImg: string;
  slug: string;
  update: string;
  items: Array<ISubcategories>;
  tags: Array<ITags>;
}

interface ISubcategories {
  id: number;
  title: string;
  slug: string;
  items: Array<ISubcategoriesItem>;
}

interface ISubcategoriesItem {
  id: number;
  title: string;
  slug: string;
}

interface ITags {
  id: number;
  name: string;
  slug: string;
}

export const initialCategory = {
  id: 0,
  title: "",
  image: "",
  heroImg: "",
  bannerImg: "",
  slug: "",
  update: "",
  items: [],
  tags: [],
};
