import { useState } from 'react'
import styles from './MenuM.module.css'
import classnames from 'classnames';
import menu from '../../assets/menu.png'
import sml from '../../assets/sml.png'
import up from '../../assets/up.png'
import { A } from '..';
import {
  Hamburger, MenuD
} from '../'


function MenuM(props) {
  const [menuOn, setMenuOn] = useState(0)

  // 메뉴 클릭
  const openMenu = () => {
      if (menuOn === 0) {
          setMenuOn(1)
      } else {
          setMenuOn(0)
      }
  }

  const goHome = () => {
    window.location.pathname = '/'
  }

  const goUp = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goTo = (path) => {
    window.location.pathname = '/'+path
  }

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
          <li onClick={() => {goTo("seeall")}}>출연작</li>
          <li onClick={() => {goTo("seeall#dubbing")}}>더빙</li>
          <li onClick={() => {goTo("")}}>광고</li>
          <li onClick={() => {goTo("")}}>외화</li>
          <li onClick={() => {goTo("")}}>오디오북</li>
        </ul>
      </div>
    </div>
    </div>
    
  )
}

export default MenuM