import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { fetchComicsById } from '../../api/requestsApi';
import { HashLoader } from 'react-spinners';
import { setComicsInfo } from '../../redux/slices/comicsSlice';
import styles from './ComicsDetailCard.module.scss'

export const ComicsDetailCard = () => {
    const {comicsId, comicsInfo} = useSelector((state) => state.comics);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(""); 
    const dispatch = useDispatch();
    console.log(comicsInfo);

    useEffect(() => {
        const loadComicDetails = async () => {
            if (!comicsId) return;
        
            try{
            setLoading(true);
            const data = await fetchComicsById(comicsId);
            dispatch(setComicsInfo(data[0]));
            } catch (error) {
            setError("Ошибка загрузки информации о коммиксе");
            } finally {
            setLoading(false);
            }
        };

        loadComicDetails();
    }, [comicsId]); 
        
    if (loading) return (
        <div className={styles.load}>
            <HashLoader color="black" height={4} width={100} loading={true} />
        </div>
    );
    
    if (error) return (<p>{error}</p>)

  return (
    <div>ComicsDetailCard</div>
  )
}
