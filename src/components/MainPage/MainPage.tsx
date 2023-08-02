import Hero from "./Hero/Hero";
import PopularCategory from "./PopularCategory/PopularCategory";

import styles from "./main-page.module.scss";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <PopularCategory />
    </div>
  );
};

export default MainPage;
