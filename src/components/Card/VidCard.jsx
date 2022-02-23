import styles from './VidCard.module.css'
import classnames from 'classnames'
import YouTube from 'react-youtube'
import { useRef, useState } from 'react'

function VidCard (props) {
  const playButton = 'https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/play-icon-18-256.png'
  const [youtubeOn, setYoutubeOn] = useState(false)
  const query = props.query
  const videoId = query['Link'].split('/')[3]
  const date = query['Date'].split('-')[0] + '. ' + query['Date'].split('-')[1] + '.'
  const img = 'https://i.ytimg.com/vi/' + videoId + '/original.jpg'

  const opts = {
    playerVars: {
      rel: 0,
      listType: 'playlist',
    }
  }

  const vidRef = useRef()
  const handleClick = () => {
    setYoutubeOn(true)
    vidRef.current.internalPlayer.playVideo()
    props.isPlaying(vidRef)
  }

  return(
      <div className={classnames(styles.card, (props.type ? styles.homeCard : styles.allCard))} style={{visibility:props.visible}} ref={props.refs} onClick={props.onclick}>
        <div className={styles.content}>
          <YouTube videoId={videoId} className={classnames(styles.img, (youtubeOn ? styles.on : styles.off))} opts={opts} ref={vidRef}></YouTube>
          <div onClick={handleClick} className={(youtubeOn ? styles.off : styles.on)}>
            <img src={img} className={classnames(styles.cover, styles.img)} alt=""/>
            <img src={playButton} className={styles.playButton} alt=""/>
          </div>
        </div>
      <div className={styles.white}>
        <div>
          <h4 className={styles.first}>{query[props.first]}</h4>
          <p className={styles.second}>{date}</p>
          {/* <p className={styles.second}>{props.third}</p> */}
        </div>
      </div>
    </div>
  )
}

export default VidCard