import styles from './CardCarousel.module.css'
import classnames from 'classnames'
import { useEffect, useState } from 'react'

import {
    VidCard, Card
} from '../../components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faMaximize } from '@fortawesome/free-solid-svg-icons'

export default function CardCarousel(props) {
  const [current, setCurrent] = useState(0)
  const [last, setLast] = useState(0)
  const query = props.query
  const [gap, setGap] = useState(436)
 
  const getLast = () => {
    const times = query.length - parseInt((window.innerWidth-Math.max(0.0015 * window.innerWidth, 0.5 * window.innerWidth - 658))/gap)
    if (times <= 0) {
      setLast(props.last)
    } else {
      setLast(-gap * times)
    }
    console.log(times)
  }

  const goTo = () => {
    window.location.pathname = '/'+ props.redirectTo
  }

  const left = () => {
    setTimeout(setCurrent(current+gap), 150)
  }

  const right = () => {
    setTimeout(setCurrent(current-gap), 150)
    console.log(current)
  }

  useEffect(() => {
    if (props.mode) {
      setGap(221)
    }
    getLast()
  }, [])
  
  
  const [prev, setPrev] = useState('')
  const stopAndRun = (data) => {
    if (prev) {
      prev.current.internalPlayer.pauseVideo()
    }
    setPrev(data)
  }

  return(
    <div className={styles.hash}>
      <div className={styles.center}>
        <h1 className={styles.main}><a id={props.id} href=''></a>{props.title}</h1>
        <div className={styles.buttons}>
          <button onClick={left} disabled={current === 0 ? true : false}><FontAwesomeIcon icon={faChevronLeft}/></button>
          <button onClick={right} disabled={current === last ? true : false}><FontAwesomeIcon icon={faChevronRight}/></button>
        </div>
      </div>
      <div className={styles.carContainer}>
      <ul className={classnames(styles.items)} role="list">
        {query.map((item, index) => {
          if (props.mode) {
            return (
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+index*gap)+"px,0)", padding: "0 2.5px"}}>
                <Card query={item} first='Book' second='Author' third='Date'></Card>
              </li>
            )
          } else {
            return (
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+index*gap)+"px,0)", padding: "0 10px"}}>
                <VidCard query={item} first='Ad' second='Date' isPlaying={stopAndRun}></VidCard>
              </li>
            )
          }
        })}
      </ul>
    </div>
    <div className={classnames(styles.center, styles.pDiv)}><p className={styles.redirect} onClick={goTo}>{props.redirectText}</p></div>
    </div>
  )
}