import React, { useState, useEffect } from 'react';
import { fetchComics } from '../../api/configApi'; 

export const Commics = () => {
  const [comics, setComics] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 

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

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Комиксы Marvel</h1>
      <div className="comics-list">
        {comics.length === 0 ? (
          <p>Комиксы не найдены.</p>
        ) : (
          comics.map((comic) => (
            <div key={comic.id} className="comic-card">
              <h3>{comic.title}</h3>
              {comic.thumbnail ? (
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                  width="150"
                />
              ) : (
                <p>Изображение не доступно</p>
              )}

              {/* Отображаем описание комикса */}
              <p>{comic.description || "Нет описания"}</p>

              {/* Отображаем цену */}
              {comic.prices && comic.prices[0]?.price ? (
                <p>Цена: ${comic.prices[0].price}</p>
              ) : (
                <p>Цена не указана</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
