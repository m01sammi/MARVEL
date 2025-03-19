import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../api/requestsApi';
import styles from './List_Characters.module.scss';
import { MdError } from 'react-icons/md';
import { HashLoader } from 'react-spinners';
import classNames from "classnames";

export const List_Characters = () => {
  const [characters, setCharacters] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 
  const [activeId, setActiveId] = useState(null);

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

  const handleShowInfo = (id) => {
    setActiveId(activeId === id ? null : id);  
  }

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

  return (
    <div className={styles.list}>
      <div className={styles.list__line}>
        {characters.map((character) => (
          <>
            <div key={character.id} className={styles.list__line__card}>
              <div onClick={() => handleShowInfo(character.id)}
                className={ activeId === character.id ? styles.list__line__card__blockActive : styles.list__line__card__block}
              >
                {character.thumbnail ? (
                  <img
                    className={styles.list__line__card__block__img}
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt={character.name}
                  />
                ) : (
                  <MdError size={50} color="gray" />
                )}
                <p className={styles.list__line__card__block__name}>{character.name}</p>
              </div>
            </div>
            <div key={character.id} className={styles.list__line__info}>
              {activeId === character.id && (
                <div className={styles.list__line__info__block}>
                  {character.thumbnail ? (
                    <img
                      className={styles.list__line__info__block__img}
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt={character.name}
                    />
                  ) : (
                    <MdError size={50} color="gray" />
                  )}
                  <p className={styles.list__line__info__block__name}>
                    Имя: {character.name}
                  </p>
                  <p className={styles.list__line__info__block__description}>
                    Описание: {character.description || "Нет описания"}
                  </p>
                  <p className={styles.list__line__info__block__comics}>
                    Комиксы:{" "}
                    {character.comics.items.length > 0
                      ? character.comics.items.map((comic) => comic.name).join(", ")
                      : "Нет информации"}
                  </p>
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
