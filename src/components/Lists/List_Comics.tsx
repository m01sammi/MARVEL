import React, { useState, useEffect } from 'react';
import { fetchComics } from '../../api/requestsApi'; 
import styles from './List_Comics.module.scss';
import { MdError } from 'react-icons/md';
import { HashLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { setComicsId } from '../../redux/slices/comicsSlice';
import { useNavigate } from 'react-router';
import { RootState } from '../../redux/store';

interface Comics {
  id: number;
  title: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
  prices?: { price: number }[];
}

export const List_Comics: React.FC = () => {
  const [comics, setComics] = useState<Comics[]>([]);
  const [visibleComics, setVisibleComics] = useState<number>(6);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const comicsId = useSelector((state: RootState) => state.comics.comicsId);

  useEffect(() => {
    const loadComics = async () => {
      try {
        setLoading(true);
        const data: Comics[] = await fetchComics();
        setComics(data);
      } catch (error) {
        setError('Не удалось загрузить комиксы');
      } finally {
        setLoading(false);
      }
    };
    loadComics();
  }, []);

  const handleOpenComics = (id: number): void => {
    dispatch(setComicsId(id));
    navigate(`/comics/${id}`);
  };

  const handleShowMore = (): void => {
    setVisibleComics((prev) => prev + 6);
  };

  if (loading)
    return (
      <div className={styles.load}>
        <HashLoader color="black" size={50} loading={true} />
      </div>
    );
  
  if (error) return <p>{error}</p>;

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
                <img
                  className={styles.list__line__card__img}
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
