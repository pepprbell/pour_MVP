import styles from './VidCard.module.css'
import classnames from 'classnames'
import YouTube from 'react-youtube'
import { useRef, useState } from 'react'

function VidCard (props) {
  const none = "https://user-images.githubusercontent.com/67995526/154494368-d2a4d6e1-dd45-42b0-8d0e-22e6719bc2d0.png"
  const opts = {
    playerVars: {
      rel: 0,
      listType: 'playlist',
    }
  }
  const vid0 = useRef(null)
  const videoId = "dyw2TA1YlxM"

  return(
      <div className={classnames(styles.card, (props.type ? styles.homeCard : styles.allCard))} style={{visibility:props.visible}}>
        {/* <div><YouTube videoId={videoId} className={styles.img} opts={opts} ref={vid0}></YouTube></div> */}
        <div><img src={none} className={styles.img} alt="" /></div>
      <div className={styles.white}>
        <div>
          <h4 className={styles.first}>{props.first}광고이름</h4>
          <p className={styles.second}>{props.second}2022</p>
          <p className={styles.second}>{props.third}</p>
        </div>
      </div>
    </div>
  )
}

export default VidCard