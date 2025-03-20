import React from 'react';
import styles from './Header.module.scss';
import marvelLogo from '../../assets/img/marvel-logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../../redux/slices/activePageSlice';
import { RootState } from '../../redux/store';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const activePage = useSelector((state: RootState) => state.activePage.activePage);

  const handleClickComics = (): void => {
    navigate('/');
    dispatch(setActivePage('comics'));
  };

  const handleClickCharacters = (): void => {
    navigate('/characters');
    dispatch(setActivePage('characters'));
  };

  return (
    <header>
      <div className={`col-sm-12 col-md-10 col-lg-8 ${styles.navigation}`}>
        <h1>Marvel information portal</h1>
        <p 
          className={activePage === 'comics' ? styles.navigation__button__active : styles.navigation__button} 
          onClick={handleClickComics}
        >
          Комиксы
        </p>
        <p 
          className={activePage === 'characters' ? styles.navigation__button__active : styles.navigation__button} 
          onClick={handleClickCharacters}
        >
          Персонажи
        </p>
        <img src={marvelLogo} alt="MARVEL" />
      </div>
    </header>
  );
};
