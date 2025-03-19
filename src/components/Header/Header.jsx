import React, { useState } from 'react'
import styles from './Header.module.scss'
import marvelLogo from '../../assets/img/marvel-logo.png'
import { useNavigate } from 'react-router'

export const Header = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('');

  const handleClickCommics = () => {
    navigate('/')
    setActivePage('commics');
  }

  const handleClickCharacters = () => {
    navigate('/characters')
    setActivePage('characters');
  }

  return (
    <header>
        <div className={`col-sm-12 col-md-10 col-lg-8 ${styles.navigation}`}>
            <h1>Marvel information portal</h1>
            <p className={(activePage === 'commics' ? styles.navigation__button__active : styles.navigation__button)} onClick={handleClickCommics}>Коммиксы</p>
            <p className={(activePage === 'characters' ? styles.navigation__button__active : styles.navigation__button)} onClick={handleClickCharacters}>Персонажи</p>
            <img src={marvelLogo} alt='MARVEL'></img>
        </div>
    </header>
  )
}
