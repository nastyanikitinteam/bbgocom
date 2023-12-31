import { FC } from "react";
import styles from "./alphabetical.module.scss";
import cn from "classnames";

interface IProps {
  carBrands: any;
  selectedLetter: string;
  onLetterSelect: (bool: string) => void;
}

const Alphabetical: FC<IProps> = ({
  carBrands,
  selectedLetter,
  onLetterSelect,
}) => {
  // TODO: ADD IT TO CONFIG, TO ARRAY
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // TODO: USEMAP
  const existingLetters = carBrands
    .map((brand) => brand.charAt(0).toUpperCase())
    .filter((value, index, self) => self.indexOf(value) === index);

  // TODO: CALLBACK
  const handleLetterClick = (letter) => {
    if (selectedLetter === letter) {
      onLetterSelect("");
    } else {
      onLetterSelect(letter);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Alphabetical index</h3>
      <div className={styles.list}>
        {/* TODO: CHECK IF IS ALPHABET EXISTS */}
        {alphabet.map((letter) => (
          <span
            className={cn(
              styles.letter,
              {
                [styles.active]: selectedLetter === letter,
              },
              { [styles.hidden]: !existingLetters.includes(letter) }
            )}
            key={letter}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Alphabetical;
