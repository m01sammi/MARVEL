import React from 'react'
import styles from './Search.module.scss'

export const Search = () => {
  return (
    <div className={styles.search}>
        <input type="text" placeholder='Введите имя персонажа' className={styles.search}/>
    </div>
  )
}
