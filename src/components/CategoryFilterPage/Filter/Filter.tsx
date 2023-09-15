import Tabs from "./Tabs/Tabs";
import Checkboxes from "./Checkboxes/Checkboxes";
import PriceRange from "./PriceRange/PriceRange";
import Brand from "./Brand/Brand";
import Range from "./Range/Range";
import styles from "./filter.module.scss";
import ColorPicker from "./ColorPicker/ColorPicker";
import {
  tabsList,
  propertyType,
  condition,
  numberOfRooms,
  colors,
  carBrands,
} from "./config";
import cn from "classnames";

const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Tabs tabsList={tabsList} />
        <ColorPicker title="Colors" colors={colors} />
        <Brand title="Car brand" list={carBrands} />
        <Checkboxes title="Property type" list={propertyType} />
        <PriceRange title="Price Range" />
        <Checkboxes title="Condition" list={condition} />
        <Checkboxes title="Number of rooms" list={numberOfRooms} isColumn />
        <Range title="Total area, m²" defaultVelue1="0" defaultVelue2="0" />
        <Range title="Floor" defaultVelue1="0" defaultVelue2="0" />
      </div>
      <div className={styles.bottom}>
        <a href="" className={cn("default-button sm", styles.button)}>
          Show 150 000 units
        </a>
        <a href="" className={cn("default-button sm border", styles.button)}>
          Reset
        </a>
      </div>
    </div>
  );
};

export default Filter;
