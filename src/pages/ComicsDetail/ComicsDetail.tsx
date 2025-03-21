import React from 'react'
import { ComicsDetailCard } from '../../components/ComicsDetailCard/ComicsDetailCard';
import styles from './ComicsDetail.module.scss'


export const ComicsDetail: React.FC = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.content__block}>
          <ComicsDetailCard/>
        </div>
      </div>
    </>
  )
}
