import { FC } from "react";
import { useState } from "react";
import cn from "classnames";
import styles from "./location-main.module.scss";
import ArrowIcon from "images/icons/drop.svg";
import MapIcon from "images/icons/map-icon.svg";

interface IProps {
  handleClick: (key: string, value: string) => void;
  setIsActiveChoice: (bool: string) => void;
  dataRegion: any;
}

const LocationMain: FC<IProps> = ({
  handleClick,
  setIsActiveChoice,
  dataRegion,
}) => {
  const [isActiveRegion, setIsActiveRegion] = useState(null);

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

  const chooseRegion = (id, name) => {
    setIsActiveRegion(id);
    handleClick("nameOfRegion", name);
    delete dataRegion.nameOfCity;
  };

  const chooseCity = (id, name) => {
    if (name) {
      handleClick("nameOfCity", name);
    } else {
      delete dataRegion.nameOfCity;
    }
    setIsActiveChoice("");
  };

  const deleteRegionResult = () => {
    handleClick("nameOfRegion", "All Thailand");
    setIsActiveChoice("");
    delete dataRegion.nameOfCity;
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h3 className={styles.title}>Choose region</h3>
        <div className={styles.choose} onClick={deleteRegionResult}>
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
                  [styles.active]: dataRegion.nameOfRegion == name,
                })}
                key={id}
                onClick={() => chooseRegion(id, name)}
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
            {regionList.map(({ id, name, items }) => {
              if (dataRegion.nameOfRegion == name && items) {
                return (
                  <>
                    <div
                      key={id}
                      className={cn(styles.item, {
                        [styles.active]: !dataRegion.nameOfCity,
                      })}
                      onClick={() => chooseCity("nameOfCity", null)}
                    >
                      <p className={styles.name}>All {name}</p>
                    </div>
                    {items.map(({ id, name }) => {
                      return (
                        <div
                          key={id}
                          className={cn(styles.item, {
                            [styles.active]: dataRegion.nameOfCity == name,
                          })}
                          onClick={() => chooseCity("nameOfCity", name)}
                        >
                          <p className={styles.name}>{name}</p>
                        </div>
                      );
                    })}
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMain;
