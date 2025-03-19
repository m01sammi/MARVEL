import React from 'react';
import { Header } from '../../components/Header/Header.jsx';
import { List_Commics } from '../../components/Lists/List_Commics.jsx';
import styles from './Commics.module.scss'

export const Commics = () => {
  
  return (
      <>
        <Header />
        <div className={styles.content}>
          <div className={`col-sm-12 col-md-10 col-lg-8 ${styles.content__block}`}>
            <List_Commics/>
          </div>
        </div>
      </>
    )
}
