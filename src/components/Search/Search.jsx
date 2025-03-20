import React, { useEffect } from 'react'
import styles from './Search.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchItem } from '../../redux/slices/searchSlice';

export const Search = () => {
  const searchItem = useSelector((state) => state.search.searchItem);
  const dispatch = useDispatch();
  console.log(searchItem);

  useEffect (() => {
    dispatch(setSearchItem(''))
  },[])
  const handleSearch = (event) => {
   setTimeout(() => {
    dispatch(setSearchItem(event.target.value));
   },1000)
  }

  return (
    <div className={styles.search}>
        <input type="text" placeholder='Введите имя персонажа' onChange={handleSearch} className={styles.search}/>
    </div>
  )
}
