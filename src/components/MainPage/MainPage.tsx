import Hero from "./Hero/Hero";
import PopularCategory from "./PopularCategory/PopularCategory";
import Recommend from "./Recommend/Recommend";

import styles from "./main-page.module.scss";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <PopularCategory />
      <Recommend />
    </div>
  );
};

export default MainPage;
