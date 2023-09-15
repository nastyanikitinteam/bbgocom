import Tabs from "./Tabs/Tabs";
import Checkboxes from "./Checkboxes/Checkboxes";
import PriceRange from "./PriceRange/PriceRange";
import styles from "./filter.module.scss";
import { tabsList, propertyType, condition, numberOfRooms } from "./config";

const Filter = () => {
  return (
    <div className={styles.container}>
      <Tabs tabsList={tabsList} />
      <Checkboxes title="Property type" list={propertyType} />
      <PriceRange title="Price Range" />
      <Checkboxes title="Condition" list={condition} />
      <Checkboxes title="Number of rooms" list={numberOfRooms} isColumn />
    </div>
  );
};

export default Filter;
