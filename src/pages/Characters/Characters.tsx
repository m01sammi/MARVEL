import React from 'react'
import { List_Characters } from '../../components/Lists/List_Characters'
import styles from './Characters.module.scss'
import { Search } from '../../components/Search/Search'

export const Characters: React.FC = () => {
  return (
    <>  
      <div className={styles.content}>
        <div className={`col-sm-12 col-md-10 col-lg-8 ${styles.content__block}`}>
          <Search/>
          <List_Characters/>
        </div>
      </div>
    </>
  )
}
