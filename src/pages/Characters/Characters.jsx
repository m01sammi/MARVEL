import React from 'react'
import { Header } from '../../components/Header/Header.jsx'
import { List_Characters } from '../../components/Lists/List_Characters.jsx'
import styles from './Characters.module.scss'

export const Characters = () => {
  return (
    <>  
      <Header />
      <div className={styles.content}>
        <div className={`col-sm-12 col-md-10 col-lg-8 ${styles.content__block}`}>
          <List_Characters/>
        </div>
      </div>
    </>
  )
}
