import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { Header } from "../../components/Header/Header";
import { fetchComicsById } from "../../api/requestsApi";
import { HashLoader } from "react-spinners";
import { setComicsInfo } from "../../redux/slices/comicsSlice";
import styles from "./ComicsDetailCard.module.scss";
import { MdError } from "react-icons/md";

interface Comics {
  id: number;
  title: string;
  description: string;
}

export const ComicsDetailCard: React.FC = () => {
  const { comicsId, comicsInfo } = useSelector((state: RootState) => state.comics);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const loadComicDetails = async () => {
      if (!comicsId) return;

      try {
        setLoading(true);
        const data = await fetchComicsById(comicsId);
        if (data && Array.isArray(data) && data.length > 0) {
          dispatch(setComicsInfo(data[0]));
        } else {
          setError("Комикс не найден");
        }
      } catch (error) {
        setError("Ошибка загрузки информации о комиксе");
      } finally {
        setLoading(false);
      }
    };

    loadComicDetails();
  }, [comicsId, dispatch]);

  if (loading)
    return (
        <div className={styles.load}>
            <HashLoader color="black" size={50} loading={true} />
        </div>
    );

 if (error)
     return (
       <div className={styles.error}>
         <MdError size={50} color="red" />
         <p>{error}</p>
       </div>
     );

  return (
    <div className={styles.detailCard}>
      {comicsInfo && (
        <>
          <h2>{comicsInfo.title}</h2>
          <p>{comicsInfo.description || "Описание отсутствует"}</p>
        </>
      )}
    </div>
  );
};
