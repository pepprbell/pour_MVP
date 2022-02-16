import styles from './VidCard.module.css'
import none from '../../assets/none.png'
import classnames from 'classnames'
import YouTube from 'react-youtube'
import { useRef, useState } from 'react'

function VidCard (props) {
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
            <div><YouTube videoId={videoId} className={styles.img} opts={opts} ref={vid0}></YouTube></div>
        <div className={styles.white}>
          <div>
            <h4 className={styles.first}>{props.first}코카콜라</h4>
            <p className={styles.second}>{props.second}2022</p>
            <p className={styles.second}>{props.third}</p>
          </div>
        </div>
      </div>
    )
}

export default VidCard