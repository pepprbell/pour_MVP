import { useRef, useState } from 'react'
import styles from './MenuM.module.css'
import classnames from 'classnames';
import sml from '../../assets/sml.png'
import up from '../../assets/up.png'
import {
  Hamburger
} from '../'


function MenuM(props) {
  const [menuOn, setMenuOn] = useState(0)
  // const dubbing = useRef()

  // 메뉴 클릭
  const openMenu = () => {
      if (menuOn === 0) {
          setMenuOn(1)
      } else {
          setMenuOn(0)
      }
  }

  const goHome = () => {
    window.location.href = '/'
  }

  const goUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goTo = (path) => {
    window.location.href = '/'+path
  }

  // const toggle = (e) => {
  //   if (dubbing.current.className === styles.none) {
  //     dubbing.current.className = styles.display
  //   } else {
  //     goTo('dubbing')
  //   }
  // }

  return (
    <div className={styles.container}>
    <div className={styles.navbar}>
      <Hamburger onclick={openMenu}></Hamburger>
      <img className={styles.goHome} src={sml} alt="" onClick={goHome} />
      <img className={classnames(styles.goUp, (menuOn ? styles.hidden : styles.goUp))} src={up} alt="" onClick={goUp} />
    </div>
    <div>
      <div className={classnames(styles.menu, (menuOn ? styles.show : styles.menu))}>
      <div className={styles.search}>
        <input type="text" placeholder={"검색 기능 준비 중"} disabled/>
      </div>
        <ul>
          <li onClick={() => {goTo("")}}>홈</li>
          <li onClick={() => {goTo("dubbing")}}>더빙</li>
          <li onClick={() => {goTo("ad")}}>광고</li>
          <li onClick={() => {goTo("audiobook")}}>오디오북</li>
        </ul>
      </div>
    </div>
    </div>
    
  )
}

export default MenuM