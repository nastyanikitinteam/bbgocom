import { FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import Tabs from "./Tabs/Tabs";
import Checkboxes from "./Checkboxes/Checkboxes";
import PriceRange from "./PriceRange/PriceRange";
import Brand from "./Brand/Brand";
import Range from "./Range/Range";
import styles from "./filter.module.scss";
import ColorPicker from "./ColorPicker/ColorPicker";
import BodyType from "./BodyType/BodyType";

import { useTranslation } from "react-i18next";

import {
  tabsList,
  propertyType,
  condition,
  numberOfRooms,
  colors,
  carBrands,
} from "./config";
import cn from "classnames";

interface IProps {
  addWidth: string;
}

const Filter: FC<IProps> = ({ addWidth }) => {
  const isMobile = useMediaQuery(768);
  const { t } = useTranslation();

  const reset = () => {
    console.log("reset");
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {isMobile && <h3 className={styles.title}>{t(`searchbar.filter`)}</h3>}
        <Tabs tabsList={tabsList} />
        <BodyType title="Body type" />
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
        <div
          className={styles.line}
          style={{
            width: `calc(100% + ${addWidth}px + 1px)`,
          }}
        ></div>
        <a href="" className={cn("default-button sm", styles.button)}>
          {t(`category.show`)} 150 000
          {/* {t(`category.units`)} */}
        </a>
        <a
          href=""
          className={cn("default-button sm border", styles.button)}
          onClick={reset}
        >
          {t(`general.reset`)}
        </a>
      </div>
    </div>
  );
};

export default Filter;
