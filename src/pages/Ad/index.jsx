import { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import classnames from 'classnames'
import {
    Navbar, VidCard, Carousel
} from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Ads () {
  const subKr = []
  const subEn = []
  const [current, setCurrent] = useState(0)

  const left = () => {
    if (current !== 0 && true) {
      setCurrent(current+436)
    }
  }

  const right = () => {
    if (current !== 3) {
      setCurrent(current-436)
    }
  }

  return(
    <div className={styles.container}>
        <Navbar subKr={subKr} subEn={subEn}></Navbar>
        <div className={styles.banner}></div>
        <Carousel></Carousel>
        <div className={styles.content}>
          <div className={styles.hash}>
            <div className={styles.center}>
              <h1 className={styles.main}><a id='dubbing'></a>#Hashtag&nbsp;&nbsp; #hash</h1>
              <div className={styles.buttons}>
                <button onClick={left} disabled={current === 0 ? true : false}><FontAwesomeIcon icon={faChevronLeft}/></button>
                <button onClick={right} disabled={current === -436 ? true : false}><FontAwesomeIcon icon={faChevronRight}/></button>
              </div>
            </div>
            <div className={styles.carContainer}>
            <ul className={classnames(styles.items)}role="list">
              <li className={classnames(styles.item)} style={{transform: "translate("+current+"px,0)"}}>
                <VidCard></VidCard>
              </li>
              {/* <li className={classnames(styles.item, styles.two)}> */}
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+436)+"px,0)"}}>
                <VidCard></VidCard>
              </li>
              {/* <li className={classnames(styles.item, styles.three)}> */}
              <li className={classnames(styles.item)} style={{transform: "translate("+(current+872)+"px,0)"}}>
                <VidCard></VidCard>
              </li>
              {/* <li className={classnames(styles.item, styles.four)}> */}
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