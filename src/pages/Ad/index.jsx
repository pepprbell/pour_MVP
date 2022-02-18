import { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import classnames from 'classnames'
import {
    Navbar, VidCard, Carousel
} from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Ads () {
  const subKr = ['#해시태그1','#해시태그2','#해시태그3']
  const subEn = ['hashtag1','hashtag2','hashtag3']
  const [current, setCurrent] = useState(0)
  const [last, setLast] = useState(0)

  const getLast = () => {
    if (window.innerWidth >= 1318) {
      setLast(-436 * 1)
      return
    }
    if (window.innerWidth >= 870) {
      setLast(-436 * 2)
      return
    }
    if (window.innerWidth < 436) {
      setLast(-436 * 3)
    }
  }

  useEffect(() => {
    getLast()
  }, [])

  const left = () => {
    setCurrent(current+436)
  }

  const right = () => {
    setCurrent(current-436)
  }

  return(
    <div className={styles.container}>
        <Navbar subKr={subKr} subEn={subEn} dark='123'></Navbar>
        <div className={styles.banner}>
          <Carousel></Carousel>
        </div>
        <div className={styles.content}>
          <div className={styles.hash}>
            <div className={styles.center}>
              <h1 className={styles.main}><a id='hashtag1'></a>#Hashtag&nbsp;&nbsp; #hash</h1>
              <div className={styles.buttons}>
                <button onClick={left} disabled={current === 0 ? true : false}><FontAwesomeIcon icon={faChevronLeft}/></button>
                <button onClick={right} disabled={current === last ? true : false}><FontAwesomeIcon icon={faChevronRight}/></button>
              </div>
            </div>
            <div className={styles.carContainer}>
            <ul className={classnames(styles.items)}role="list">
              <li className={classnames(styles.item)} style={{transform: "translate("+current+"px,0)"}}>
                <VidCard></VidCard>
              </li>
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+436)+"px,0)"}}>
                <VidCard></VidCard>
              </li>
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+872)+"px,0)"}}>
                <VidCard></VidCard>
              </li>
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+1308)+"px,0)"}}>
                <VidCard></VidCard>
              </li>
            </ul>
          </div>
          </div>
          <div className={styles.hash}>
            <div className={styles.center}>
              <h1 className={styles.main}><a id='hashtag2'></a>#Hashtag&nbsp;&nbsp; #hash</h1>
              <div className={styles.buttons}>
                <button onClick={left} disabled={current === 0 ? true : false}><FontAwesomeIcon icon={faChevronLeft}/></button>
                <button onClick={right} disabled={current === last ? true : false}><FontAwesomeIcon icon={faChevronRight}/></button>
              </div>
            </div>
            <div className={styles.carContainer}>
            <ul className={classnames(styles.items)}role="list">
              <li className={classnames(styles.item)} style={{transform: "translate("+current+"px,0)"}}>
                <VidCard></VidCard>
              </li>
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+436)+"px,0)"}}>
                <VidCard></VidCard>
              </li>
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+872)+"px,0)"}}>
                <VidCard></VidCard>
              </li>
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+1308)+"px,0)"}}>
                <VidCard></VidCard>
              </li>
            </ul>
          </div>
          </div>
          <div className={styles.hash}>
            <div className={styles.center}>
              <h1 className={styles.main}><a id='hashtag3'></a>#Hashtag&nbsp;&nbsp; #hash</h1>
              <div className={styles.buttons}>
                <button onClick={left} disabled={current === 0 ? true : false}><FontAwesomeIcon icon={faChevronLeft}/></button>
                <button onClick={right} disabled={current === last ? true : false}><FontAwesomeIcon icon={faChevronRight}/></button>
              </div>
            </div>
            <div className={styles.carContainer}>
            <ul className={classnames(styles.items)} role="list">
              <li className={classnames(styles.item)} style={{transform: "translate("+current+"px,0)"}}>
                <VidCard></VidCard>
              </li>
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+436)+"px,0)"}}>
                <VidCard></VidCard>
              </li>
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+872)+"px,0)"}}>
                <VidCard></VidCard>
              </li>
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+1308)+"px,0)"}}>
                <VidCard></VidCard>
              </li>
            </ul>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Ads