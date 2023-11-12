import { useCallback, FC, useState } from "react";
import { Form, Field } from "react-final-form";
import Item from "./Item/Item";
import NoResult from "components/SearchBar/SearchLocation/NoResult/NoResults";
import NewWishList from "../NewWishList/NewWishList";
import { wishlistArr } from "../../WishPage/Lists/config";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import styles from "./add-to-wish-list.module.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import SearchIcon from "images/icons/search.svg";
import PlusIcon from "images/icons/add.svg";

interface IProps {
  cancel: () => void;
}

const AddToWishList: FC<IProps> = ({ cancel }) => {
  const [isOpenAddNew, setIsOpenAddNew] = useState(false);
  const [isActiveList, setIsActiveList] = useState(null);
  const [isSearchQuery, setIsSearchQuery] = useState("");
  const validationSchema = yup.object().shape({});
  const validate = validateForm(validationSchema);

  const { t } = useTranslation();

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    cancel();
  }, []);

  const searchResults = searchArray(wishlistArr, isSearchQuery);

  const onChangeSearchInput = (event) => {
    setIsSearchQuery(event.target.value);
    // setIsSearchList(searchArray(list, event.target.value));
  };

  function searchArray(array, query) {
    const results = [];
    const regex = new RegExp(query, "i");

    for (const item of array) {
      if (regex.test(item.name)) {
        results.push(item);
      }
    }

    return results;
  }

  return (
    <>
      {isOpenAddNew ? (
        <NewWishList cancel={cancel} />
      ) : (
        <div className={styles.container}>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.top}>
                  <h3 className={styles.title}>
                    {t(`wishlist.addToWishlist`)}
                  </h3>
                  <div
                    className={cn(styles.search, {
                      [styles.fill]: isSearchQuery.length > 0,
                    })}
                  >
                    <span className={styles.icon}>
                      <SearchIcon />
                    </span>
                    <input
                      type="text"
                      value={isSearchQuery}
                      onChange={onChangeSearchInput}
                      placeholder={t(`general.search`)}
                    />
                  </div>
                </div>

                <div className={styles.items}>
                  {searchResults.length > 0 ? (
                    searchResults.map((item, id) => {
                      return (
                        <Item
                          item={item}
                          key={id}
                          isActiveList={isActiveList}
                          setIsActiveList={setIsActiveList}
                        />
                      );
                    })
                  ) : (
                    <NoResult title={t(`searchbar.noSearchResult`)} />
                  )}
                </div>

                <div className={styles.bottom}>
                  <div
                    className={cn("link", styles.add)}
                    onClick={() => setIsOpenAddNew(true)}
                  >
                    <span className={styles.icon}>
                      <PlusIcon />
                    </span>
                    {t(`wishlist.newWishlist`)}
                  </div>
                  <button
                    type="submit"
                    className={cn("default-button sm", styles.button)}
                    aria-label="Done"
                  >
                    {t(`general.done`)}
                  </button>
                </div>
              </form>
            )}
          ></Form>
        </div>
      )}
    </>
  );
};

export default AddToWishList;
