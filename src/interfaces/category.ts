export interface ICategory {
  id: number;
  title: string;
  image: string;
  heroImg: string;
  bannerImg: string;
  slug: string;
  update: string;
  items: Array<ISubcategories>;
  subcategories: Array<ISubcategories>;
  tags: Array<ITags>;
}

export interface ISubcategories {
  id: number;
  title: string;
  slug: string;
  items: Array<ISubcategoriesItem>;
}

export interface ISubcategoriesItem {
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
  subcategories: [],
  tags: [],
};

export const initialSubcategories = {
  id: 0,
  title: "",
  slug: "",
  items: [],
};

export const initialSubcategoryItem = {
  id: 0,
  title: "",
  slug: "",
};
