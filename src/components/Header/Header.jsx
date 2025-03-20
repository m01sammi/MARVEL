import React, { useState } from 'react'
import styles from './Header.module.scss'
import marvelLogo from '../../assets/img/marvel-logo.png'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setActivePage } from '../../redux/slices/activePageSlice'

export const Header = () => {
  const navigate = useNavigate();
  // const [activePage, setActivePage] = useState('');
  const activePage = useSelector((state) => state.activePage.activePage);
  const dispatch = useDispatch();

  const handleClickComics = () => {
    navigate('/')
    dispatch(setActivePage('comics'));
  }

  const handleClickCharacters = () => {
    navigate('/characters')
    dispatch(setActivePage('characters'));
  }

  return (
    <header>
        <div className={`col-sm-12 col-md-10 col-lg-8 ${styles.navigation}`}>
            <h1>Marvel information portal</h1>
            <p className={(activePage === 'comics' ? styles.navigation__button__active : styles.navigation__button)} onClick={handleClickComics}>Коммиксы</p>
            <p className={(activePage === 'characters' ? styles.navigation__button__active : styles.navigation__button)} onClick={handleClickCharacters}>Персонажи</p>
            <img src={marvelLogo} alt='MARVEL'></img>
        </div>
    </header>
  )
}
