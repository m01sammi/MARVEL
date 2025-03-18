import React from 'react'
import styles from './Header.module.scss'
import marvelLogo from '../../assets/img/marvel-logo.png'

export const Header = () => {
  return (
    <header>
        <div className={styles.navigation}>
            <img src={marvelLogo} alt='MARVEL'></img>
            <p className={styles.navigation__button}>Коммиксы</p>
            <p className={styles.navigation__button}>Персонажи</p>
            <h1>Marvel information portal</h1>
        </div>
    </header>
  )
}
