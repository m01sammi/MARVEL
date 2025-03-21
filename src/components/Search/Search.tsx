import React, { useEffect, ChangeEvent, useState } from "react";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItem } from "../../redux/slices/searchSlice";
import { RootState, AppDispatch } from "../../redux/store";
import { HashLoader } from "react-spinners";

export const Search: React.FC = () => {
  const searchItem = useSelector((state: RootState) => state.search.searchItem);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchItem(""));
  }, [dispatch]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setSearchItem(event.target.value));
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Введите имя персонажа"
          onChange={handleSearch}
          className={styles.search}
        />
      </div>
      {isLoading && <div className={styles.load}>
        <HashLoader color="black" size={50} loading={true} />
      </div>}
    </>
  );
};
