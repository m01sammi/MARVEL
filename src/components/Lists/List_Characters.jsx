import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../api/requestsApi';
import styles from './List_Characters.module.scss';
import { MdError } from 'react-icons/md';
import { HashLoader } from 'react-spinners';

export const List_Characters = () => {
  const [characters, setCharacters] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true);
        const data = await fetchCharacters();
        setCharacters(data); 
      } catch (error) {
        setError("Не удалось загрузить персонажей");
      } finally {
        setLoading(false);
      }
    };
    loadCharacters();
  }, []);

  if (loading) return (
    <div className={styles.load}>
      <HashLoader color="black" size={50} loading={true} />
    </div>
  );

  if (error) return (
    <div className={styles.error}>
      <MdError size={50} color="red" />
      <p>{error}</p>
    </div>
  );

  const handleShowMore = () => {
    setVisibleCharacters((prev) => prev + 6);
  };

  return (
    <div className={styles.list}>
      <div className={styles.list__line}>
        {characters.map((character) => (
          <>
            <div key={character.id} className={styles.list__line__card}>
              {character.thumbnail ? (
                <img
                  className={styles.list__line__card__img}
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
              ) : (
                <MdError size={50} color="gray" />
              )}
              <p className={styles.list__line__card__name}>{character.name}</p>
            </div>
            <div key={character.id} className={styles.list__line__card}>
              {character.thumbnail ? (
                <img
                  className={styles.list__line__card__img}
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
              ) : (
                <MdError size={50} color="gray" />
              )}
              <p className={styles.list__line__card__name}>{character.name}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
