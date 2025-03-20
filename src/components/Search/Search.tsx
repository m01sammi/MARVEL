import React, { useEffect, ChangeEvent } from "react";
import styles from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItem } from "../../redux/slices/searchSlice";
import { RootState, AppDispatch } from "../../redux/store";

export const Search: React.FC = () => {
  const searchItem = useSelector((state: RootState) => state.search.searchItem);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchItem(""));
  }, [dispatch]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      dispatch(setSearchItem(event.target.value));
    }, 1000);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Введите имя персонажа"
        onChange={handleSearch}
        className={styles.search}
      />
    </div>
  );
};
