import { useMemo, FC, ReactNode } from "react";
import styles from "./card.module.scss";
import cn from "classnames";
import useMediaQuery from "src/utils/useMediaQuery";
import Slider from "components/Slider/Slider";
import MapIcon from "images/icons/map-icon.svg";
import EditIcon from "images/icons/edit.svg";
import MessagesIcon from "images/icons/messages-icon.svg";
import CalendarIcon from "images/icons/calendar.svg";
import ViewIcon from "images/icons/eye-open-svgrepo-com.svg";
import LightningIcon from "images/icons/lightning.svg";

interface IProps {
  item: any;
  children?: ReactNode;
  type: string;
}

const Card: FC<IProps> = ({ item, children, type }) => {
  const isTablet = useMediaQuery(998);

  return (
    <div className={styles.container}>
      {!isTablet && <div className={styles.checkbox}>{children}</div>}
      <div className={styles.block}>
        {!isTablet && (
          <div className={styles.image}>
            <Slider slides={item.images} isCardProduct />
          </div>
        )}
        <div className={styles.info}>
          {isTablet && (
            <>
              <div className={styles.top}>
                <div className={styles.checkbox}>{children}</div>
                {isTablet && (
                  <div className={styles.date}>
                    <span className={styles.icon}>
                      <CalendarIcon />
                    </span>
                    {item.date}
                  </div>
                )}
              </div>
              <div className={styles.main}>
                <div className={styles.image}>
                  <img src={item.images[0].image} alt="" />
                </div>
                <div className={styles.description}>
                  <h3 className={styles.title}>{item.name}</h3>
                  <div className={styles.location}>
                    <span className={styles.icon}>
                      <MapIcon />
                    </span>
                    {item.location}
                  </div>
                </div>
              </div>
            </>
          )}

          <div className={styles.items}>
            {!isTablet && (
              <div className={styles.item}>
                <p className={styles.mainCategory}>{item.category}</p>
                <p className={styles.subCategory}>{item.subCategory}</p>
              </div>
            )}
            <div className={styles.item}>
              <p>ID: {item.id}</p>
              <p>Views: {item.views}</p>
            </div>
          </div>

          {!isTablet && (
            <>
              <h3 className={styles.title}>{item.name}</h3>
              <div className={styles.items}>
                <div className={styles.location}>
                  <span className={styles.icon}>
                    <MapIcon />
                  </span>
                  {item.location}
                </div>
                <div className={styles.date}>
                  <span className={styles.icon}>
                    <CalendarIcon />
                  </span>
                  {item.date}
                </div>
              </div>
            </>
          )}

          <div className={styles.bottom}>
            <div className={styles.price}>
              {item.price}
              {item.oldPrice && (
                <span className={styles.old}>{item.oldPrice}</span>
              )}
            </div>

            {type === "Active" && (
              <div className={styles.action}>
                <span className={styles.icon}>
                  <MessagesIcon />
                </span>
                {item.messages}
              </div>
            )}
            {type === "Waiting" && (
              <div className={styles.action}>
                <span className={styles.icon}>
                  <ViewIcon />
                </span>
                View
              </div>
            )}
            {type === "Inactive" && (
              <div className={styles.action}>
                <span className={styles.icon}>
                  <LightningIcon />
                </span>
                Activate
              </div>
            )}

            <div className={styles.buttons}>
              <div className={cn("default-button border sm", styles.button)}>
                Deactivate
              </div>
              <div className={cn("default-button sm", styles.button)}>
                <span className={cn("icon", styles.icon)}>
                  <EditIcon />
                </span>
                Edit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
