import { useMemo, useState, useEffect } from "react";
import Category from "components/Category/Category";

import styles from "./popular-category.module.scss";
import cn from "classnames";

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

import ArrowSvg from "images/icons/drop.svg";

const PopularCategory = () => {
  const [isViewAll, setIsViewAll] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(7);

  const categoriesList = useMemo(
    () => [
      {
        id: 0,
        title: "Real Estate",
        image: categoryRealEstateImg.src,
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
    ],
    []
  );

  useEffect(() => {
    isViewAll ? setIsShowCategory(categoriesList.length) : setIsShowCategory(7);
  }, [isViewAll]);

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <h2 className={cn("title", styles.title)}>Popular Categories</h2>
        <div className={styles.blocks}>
          {categoriesList.map(({ id, title, image, link, items }) => {
            return (
              id < isShowCategory && (
                <div className={styles.block} key={id}>
                  <Category
                    title={title}
                    image={image}
                    link={link}
                    items={items}
                  />
                </div>
              )
            );
          })}
        </div>
        <div
          className={cn(styles.all, { [styles.open]: isViewAll })}
          onClick={() => setIsViewAll((prev) => !prev)}
        >
          {isViewAll ? "Hide Category" : "View all Category"}
          <span className={styles.icon}>
            <ArrowSvg />
          </span>
        </div>
      </div>
    </section>
  );
};

export default PopularCategory;
