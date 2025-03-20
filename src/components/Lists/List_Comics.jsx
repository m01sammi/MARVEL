import React, { useState, useEffect } from 'react';
import { fetchComics } from '../../api/requestsApi.js'; 
import styles from './List_Comics.module.scss'
import { MdError } from 'react-icons/md';
import { HashLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { setComicsId } from '../../redux/slices/comicsSlice.js';
import { useNavigate } from 'react-router';


export const List_Comics = () => {
  const [comics, setComics] = useState([]); 
  const [visibleComics, setVisibleComics] = useState(6);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const comicsId = useSelector((state) => state.comics.comicsId);

  useEffect(() => {
    const loadComics = async () => {
      try {
        setLoading(true);
        const data = await fetchComics();
        setComics(data); 
      } catch (error) {
        setError("Не удалось загрузить комиксы");
      } finally {
        setLoading(false);
      }
    };
    loadComics();
  }, []);

  const handleOpenComics = (id) => {
    dispatch(setComicsId(id))
    navigate(`/comics/${id}`)
  }

  if (loading) return (
    <div className={styles.load}>
      <HashLoader color="black" height={4} width={100} loading={true} />
    </div>
  );
  if (error) return <p>{error}</p>;

  const handleShowMore = () => {
    setVisibleComics((prev) => prev + 6);
  };

  return (
    <div className={styles.list}>
      <div className={styles.list__line}>
        {comics.length === 0 ? (
          <div className={styles.list__line__error}>
            <MdError size={50} color="red" />
            <h1>Комиксы не найдены</h1>
          </div>
        ) : (
          comics.slice(0, visibleComics).map((comic) => (
            <div key={comic.id} onClick={() => handleOpenComics(comic.id)} className={styles.list__line__card}>
              {comic.thumbnail ? (
                <img className={styles.list__line__card__img}
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />
              ) : (
                <MdError size={50} color="gray" />
              )}

              <p className={styles.list__line__card__title}>{comic.title}</p>

              {comic.prices && comic.prices[0]?.price ? (
                <p className={styles.list__line__card__price}>${comic.prices[0].price}</p>
              ) : (
                <p>Цена не указана</p>
              )}
            </div>
          ))
        )}
      </div>

      {visibleComics < comics.length && (
        <button className={styles.list__button} onClick={handleShowMore}>
          Показать еще
        </button>
      )}
    </div>
  );
};