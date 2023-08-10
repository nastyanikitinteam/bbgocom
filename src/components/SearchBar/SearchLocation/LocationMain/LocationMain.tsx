import { FC } from "react";
import { useState } from "react";
import cn from "classnames";

import { regionList } from "./config";

import styles from "./location-main.module.scss";
import ArrowIcon from "images/icons/drop.svg";
import MapIcon from "images/icons/map-icon.svg";

interface IProps {
  handleClickRegion: (key: string, value: string) => void;
  setIsActiveChoice: (bool: string) => void;
  setDataRegion: (bool: string) => void;
  dataRegion: any;
}

const LocationMain: FC<IProps> = ({
  handleClickRegion,
  setIsActiveChoice,
  dataRegion,
  setDataRegion,
}) => {
  const chooseRegion = (name) => {
    if (dataRegion.nameOfCity) {
      let obj = dataRegion;
      delete obj.nameOfCity;
      setDataRegion(obj);
    }
    handleClickRegion("nameOfRegion", name);
  };

  const chooseCity = (name, region) => {
    if (name) {
      handleClickRegion("nameOfCity", name);
    } else {
      if (dataRegion.nameOfCity) {
        let obj = dataRegion;
        delete obj.nameOfCity;
        setDataRegion(obj);
      }
      handleClickRegion("nameOfRegion", region);
    }
    setIsActiveChoice("");
  };

  const deleteRegionResult = () => {
    if (dataRegion.nameOfCity) {
      let obj = dataRegion;
      delete obj.nameOfCity;
      setDataRegion(obj);
    }
    handleClickRegion("nameOfRegion", "All Thailand");
    setIsActiveChoice("");
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
                onClick={() => chooseRegion(name)}
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
                      onClick={() => chooseCity(null, name)}
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
                          onClick={() => chooseCity(name, null)}
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
