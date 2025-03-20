import React from 'react'
import { ComicsDetailCard } from '../../components/ComicsDetailCard/ComicsDetailCard';


export const ComicsDetail = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className={`col-sm-12 col-md-10 col-lg-8 ${styles.content__block}`}>
          <ComicsDetailCard/>
        </div>
      </div>
    </>
  )
}
