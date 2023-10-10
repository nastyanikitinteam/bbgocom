import { FC } from "react";
import styles from "./histogram.module.scss";
import cn from "classnames";

interface IProps {
  minPrice: number;
  maxPrice: number;
  inputValue1: number;
  inputValue2: number;
}

const Histogram: FC<IProps> = ({
  minPrice,
  maxPrice,
  inputValue1,
  inputValue2,
}) => {
  // TODO
  const generateRandomPrices = (count) => {
    const prices = [];
    for (let i = 0; i < count; i++) {
      const randomPrice = Math.floor(Math.random() * 100001);
      prices.push(randomPrice);
    }
    return prices;
  };

  // const randomPrices = generateRandomPrices(99);
  // TODO: CONFIG
  const randomPrices = [
    70059, 97767, 27598, 91349, 58807, 62100, 41657, 54513, 60865, 63628, 19872,
    44702, 29018, 19080, 41205, 12128, 84111, 59319, 71748, 46790, 66964, 69789,
    47728, 64382, 96672, 86669, 36119, 38992, 21561, 36370, 63458, 36322, 24574,
    52911, 8946, 1478, 60926, 60449, 42299, 92054, 28796, 45311, 81686, 66984,
    23959, 11083, 3530, 21898, 71094, 80739, 66897, 65939, 60808, 95909, 66298,
    76567, 79379, 34175, 27328, 94079, 17516, 30994, 13993, 42257, 16656, 22813,
    42954, 31052, 42063, 46205, 41679, 11272, 8963, 61179, 84980, 20988, 69244,
    34880, 10948, 43866, 55759, 61285, 23680, 86931, 38121, 53800, 65024, 32024,
    65694, 85735, 75248, 78365, 25167, 65491, 92166, 96142, 95430, 32231, 54332,
  ];

  const sortedPrices = randomPrices.slice();
  sortedPrices.sort((a, b) => a - b);

  // TODO: to useref or config
  const numBlocks = 15;
  // TODO
  const blockWidth = (maxPrice - minPrice) / numBlocks;

  const histogramData = new Array(numBlocks).fill(0);

  sortedPrices.forEach((price) => {
    const blockIndex = Math.floor((price - minPrice) / blockWidth);
    histogramData[blockIndex]++;
  });

  return (
    <div className={styles.container}>
      {/* {histogramData.map((value, index) => (
        <div
          key={index}
          className={styles.bar}
          style={{ height: `${(value / Math.max(...histogramData)) * 100}%` }}
        ></div>
      ))} */}
      {histogramData.map((value, index) => {
        const isOutOfRange =
          index * blockWidth < inputValue1 || index * blockWidth > inputValue2;
        return (
          <div
            key={index}
            className={cn(styles.bar, { [styles.hidden]: isOutOfRange })}
            style={{ height: `${(value / Math.max(...histogramData)) * 100}%` }}
          ></div>
        );
      })}
    </div>
  );
};
export default Histogram;
