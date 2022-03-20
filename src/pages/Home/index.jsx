import React, { useState, useEffect } from "react"
import styles from './index.module.css'
import {
    Profile, CardCarousel
} from '../../components'
import GetAd from '../../hooks/getAd'
import GetAudiobook from '../../hooks/getAudiobook'

function Home(props) {
    const { ads, hasMore, loading, error } = GetAd(6, 0)  
    const { books, hasMoreb, loadingb, errorb } = GetAudiobook(9, 0)
  
    useEffect(() => {
    }, [])

    return (
        <div className={styles.container}>
          <Profile></Profile>
          {/* <div className={styles.gap}></div> */}
          {/* <CardCarousel query={ads} title="광고" redirectTo="ad" redirectText="+ 광고 더보기" last={3}></CardCarousel> */}
          {/* <CardCarousel query={books} title="오디오북" redirectTo="audiobook" redirectText="+ 오디오북 더보기" last={3} mode="card"></CardCarousel> */}
        </div>
    )
}

export default Home