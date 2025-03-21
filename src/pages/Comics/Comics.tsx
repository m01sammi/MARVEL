import React from "react";
import { List_Comics } from "../../components/Lists/List_Comics";
import styles from "./Comics.module.scss";

export const Comics: React.FC = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.content__block}>
          <List_Comics />
        </div>
      </div>
    </>
  );
};
