import { useState } from "react";
import cn from "classnames";
import styles from "./location-main.module.scss";
import ArrowIcon from "images/icons/drop.svg";
import MapIcon from "images/icons/map-icon.svg";

const LocationMain = () => {
  const [isActiveCategrory, setIsActiveCategory] = useState(0);

  const regionList = [
    {
      id: 0,
      name: "Northern Thailand",
      items: [
        {
          id: 0,
          name: "Chiang Mai",
        },
        {
          id: 1,
          name: "Lamphun",
        },
        {
          id: 2,
          name: "Lampang",
        },
        {
          id: 3,
          name: "Uttaradit",
        },
        {
          id: 4,
          name: "Phrae",
        },
        {
          id: 5,
          name: "Nan",
        },
        {
          id: 6,
          name: "Phayao",
        },
        {
          id: 7,
          name: "Chiang Rai",
        },
        {
          id: 8,
          name: "Mae Hong Son",
        },
        {
          id: 9,
          name: "Nakhon Sawan",
        },
        {
          id: 10,
          name: "Uthai Thani",
        },
        {
          id: 11,
          name: "Kamphaeng Phet",
        },
        {
          id: 12,
          name: "Tak",
        },
        {
          id: 13,
          name: "Sukhothai",
        },
        {
          id: 14,
          name: "Phitsanulok",
        },
        {
          id: 15,
          name: "Phichit",
        },
        {
          id: 16,
          name: "Phetchabun",
        },
      ],
    },
    {
      id: 1,
      name: "Northeastern Thailand",
      items: [
        {
          id: 0,
          name: "Lamphun",
        },
        {
          id: 1,
          name: "Lamphun",
        },
        {
          id: 2,
          name: "Lampang",
        },
        {
          id: 3,
          name: "Uttaradit",
        },
        {
          id: 4,
          name: "Phrae",
        },
        {
          id: 5,
          name: "Nan",
        },
        {
          id: 6,
          name: "Phayao",
        },
        {
          id: 7,
          name: "Chiang Rai",
        },
        {
          id: 8,
          name: "Mae Hong Son",
        },
        {
          id: 9,
          name: "Nakhon Sawan",
        },
        {
          id: 10,
          name: "Uthai Thani",
        },
        {
          id: 11,
          name: "Kamphaeng Phet",
        },
        {
          id: 12,
          name: "Tak",
        },
        {
          id: 13,
          name: "Sukhothai",
        },
        {
          id: 14,
          name: "Phitsanulok",
        },
        {
          id: 15,
          name: "Phichit",
        },
        {
          id: 16,
          name: "Phetchabun",
        },
      ],
    },
    {
      id: 2,
      name: "Western Thailand",
      items: [
        {
          id: 0,
          name: "Western Thailand",
        },
        {
          id: 1,
          name: "Lamphun",
        },
        {
          id: 2,
          name: "Lampang",
        },
        {
          id: 3,
          name: "Uttaradit",
        },
        {
          id: 4,
          name: "Phrae",
        },
        {
          id: 5,
          name: "Nan",
        },
        {
          id: 6,
          name: "Phayao",
        },
        {
          id: 7,
          name: "Chiang Rai",
        },
        {
          id: 8,
          name: "Mae Hong Son",
        },
        {
          id: 9,
          name: "Nakhon Sawan",
        },
        {
          id: 10,
          name: "Uthai Thani",
        },
        {
          id: 11,
          name: "Kamphaeng Phet",
        },
        {
          id: 12,
          name: "Tak",
        },
        {
          id: 13,
          name: "Sukhothai",
        },
        {
          id: 14,
          name: "Phitsanulok",
        },
        {
          id: 15,
          name: "Phichit",
        },
        {
          id: 16,
          name: "Phetchabun",
        },
      ],
    },
    {
      id: 3,
      name: "Central Thailand",
      items: [
        {
          id: 0,
          name: "Central Thailand",
        },
        {
          id: 1,
          name: "Lamphun",
        },
        {
          id: 2,
          name: "Lampang",
        },
        {
          id: 3,
          name: "Uttaradit",
        },
        {
          id: 4,
          name: "Phrae",
        },
        {
          id: 5,
          name: "Nan",
        },
        {
          id: 6,
          name: "Phayao",
        },
      ],
    },
    {
      id: 4,
      name: "Eastern Thailand",
      items: [
        {
          id: 0,
          name: "Eastern Thailand",
        },
        {
          id: 1,
          name: "Lamphun",
        },
        {
          id: 2,
          name: "Lampang",
        },
        {
          id: 3,
          name: "Uttaradit",
        },
        {
          id: 4,
          name: "Phrae",
        },
        {
          id: 5,
          name: "Nan",
        },
        {
          id: 6,
          name: "Phayao",
        },
        {
          id: 7,
          name: "Chiang Rai",
        },
        {
          id: 8,
          name: "Mae Hong Son",
        },
        {
          id: 9,
          name: "Nakhon Sawan",
        },
        {
          id: 10,
          name: "Uthai Thani",
        },
        {
          id: 11,
          name: "Kamphaeng Phet",
        },
        {
          id: 12,
          name: "Tak",
        },
        {
          id: 13,
          name: "Sukhothai",
        },
        {
          id: 14,
          name: "Phitsanulok",
        },
        {
          id: 15,
          name: "Phichit",
        },
        {
          id: 16,
          name: "Phetchabun",
        },
      ],
    },
    {
      id: 5,
      name: "Southern Thailand",
      items: [
        {
          id: 0,
          name: "Southern Thailand",
        },
        {
          id: 1,
          name: "Lamphun",
        },
        {
          id: 2,
          name: "Lampang",
        },
        {
          id: 3,
          name: "Uttaradit",
        },
        {
          id: 4,
          name: "Phrae",
        },
        {
          id: 5,
          name: "Nan",
        },
        {
          id: 6,
          name: "Phayao",
        },
        {
          id: 7,
          name: "Chiang Rai",
        },
        {
          id: 8,
          name: "Mae Hong Son",
        },
        {
          id: 9,
          name: "Nakhon Sawan",
        },
        {
          id: 10,
          name: "Uthai Thani",
        },
        {
          id: 11,
          name: "Kamphaeng Phet",
        },
        {
          id: 12,
          name: "Tak",
        },
        {
          id: 13,
          name: "Sukhothai",
        },
        {
          id: 14,
          name: "Phitsanulok",
        },
        {
          id: 15,
          name: "Phichit",
        },
        {
          id: 16,
          name: "Phetchabun",
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3 className={styles.title}>Choose region</h3>
        <div className={styles.choose}>
          <span className={styles.icon}>
            <MapIcon />
          </span>
          All Thailand
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          {regionList.map(({ id, name }) => {
            return (
              <div
                className={cn(styles.region, {
                  [styles.active]: isActiveCategrory == id,
                })}
                key={id}
                onClick={() => setIsActiveCategory(id)}
              >
                <h3 className={styles.name}>{name}</h3>
                <span className={styles.arrow}>
                  <ArrowIcon />
                </span>
              </div>
            );
          })}
        </div>
        <div className={styles.main}>
          <div className={styles.list}>
            {regionList.map(({ id, items }) => {
              if (id === isActiveCategrory && items) {
                return items.map(({ id, name }) => {
                  return (
                    <div key={id} className={styles.item}>
                      <p className={styles.name}>{name}</p>
                    </div>
                  );
                });
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMain;
