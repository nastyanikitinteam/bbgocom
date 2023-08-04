import { useMemo } from "react";
import Select from "components/Select/Select";
import styles from "./sortby.module.scss";

const SortBy = () => {
  const sortList = useMemo(
    () => [
      {
        value: "The cheapest",
        label: "The cheapest",
      },
      {
        id: 1,
        value: "The most expensive",
        label: "The most expensive",
      },
      {
        id: 2,
        value: "The latest",
        label: "The latest",
      },
      {
        id: 3,
        value: "Recommended",
        label: "Recommended",
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sort by:</h3>
      <Select options={sortList} classname="sort" placeholder="Default" />
    </div>
  );
};

export default SortBy;
