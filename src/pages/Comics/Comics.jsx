import React from 'react';
import { Header } from '../../components/Header/Header.jsx';
import { List_Comics } from '../../components/Lists/List_Comics.jsx';
import styles from './Comics.module.scss'
import { ComicsDetail } from '../ComicsDetail/ComicsDetail.jsx';

export const Comics = () => {
  
  return (
      <>
        <Header />
        <div className={styles.content}>
          <div className={`col-sm-12 col-md-10 col-lg-8 ${styles.content__block}`}>
            <List_Comics/>
          </div>
        </div>
      </>
    )
}
