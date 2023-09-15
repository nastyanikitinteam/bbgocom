import styles from "./histogram.module.scss";

const Histogram = () => {
  const data = [10, 20, 15, 30, 25, 20, 100, 4, 10, 90, 10, 20, 15, 30, 25];

  const generateRandomPrices = (count) => {
    const prices = [];

    for (let i = 0; i < count; i++) {
      const randomPrice = Math.floor(Math.random() * 100001);
      prices.push(randomPrice);
    }

    return prices;
  };

  const randomPrices = generateRandomPrices(400);
  const sortedPrices = randomPrices.slice();
  sortedPrices.sort((a, b) => a - b);

  const maxPrice = 100000;
  const minPrice = 0;

  const numBlocks = 15;
  const blockWidth = (maxPrice - minPrice) / numBlocks;

  const histogramData = new Array(numBlocks).fill(0);

  sortedPrices.forEach((price) => {
    const blockIndex = Math.floor((price - minPrice) / blockWidth);
    histogramData[blockIndex]++;
  });

  return (
    <div className={styles.container}>
      {histogramData.map((value, index) => (
        <div
          key={index}
          className={styles.bar}
          style={{ height: `${(value / Math.max(...data)) * 100}%` }}
        ></div>
      ))}
    </div>
  );
};
export default Histogram;
