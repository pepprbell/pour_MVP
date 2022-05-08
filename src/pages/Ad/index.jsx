import { useState, useRef, useCallback } from 'react'
import styles from './index.module.css'
import {
    Navbar, Carousel, CardCarousel, VidCard
} from '../../components'
import GetAd from '../../hooks/getAd'

function Ads () {
  const subKr = ['','','']
  const subEn = ['hashtag1','hashtag2','hashtag3']
  const [pageNumber, setPageNumber] = useState(0)

  const {
      ads,
      hasMore,
      loading,
      error
  } = GetAd(9, pageNumber)

  const observer = useRef()
  const lastAdElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])
  
  const [prev, setPrev] = useState('')
  const stopAndRun = (data) => {
    if (prev) {
      prev.current.internalPlayer.pauseVideo()
    }
    setPrev(data)
  }

  return(
    <div className={styles.container}>
      <div className={styles.banner}>
        <Carousel></Carousel>
      </div>
      <div className={styles.content}>
        <div className={styles.cards}>
          {ads.map((ad,index) => {
            if (ads.length === index+1) {
              return <VidCard refs={lastAdElementRef} query={ad} first='Ad' second='Date' isPlaying={stopAndRun}></VidCard>
            } else {
              return <VidCard query={ad} first='Ad' second='Date' isPlaying={stopAndRun}></VidCard>
            }
          })}
        </div>
      </div>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </div>
  )
}

export default Ads