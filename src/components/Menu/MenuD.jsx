import { useState } from 'react'
import styles from './MenuD.module.css'
import classnames from 'classnames'
import menu from '../../assets/menu.png'
import { A } from '../'


function MenuD(props) {
    const goHome = () => {
        window.location.pathname = '/'
    }

    const goTo = (id) => {
      window.location.href = '#' + id
    }

    return (
      <div className={styles.container}>
        <img className={styles.menuIcon} src={menu} alt="" onClick={goHome}/>
        <div className={classnames(styles.menu)}>
            <A type="web" value="홈" goTo="/"></A>
            <A type="web" value="출연작" goTo="/seeall"></A>
        </div>
        <div className={(window.location.pathname === '/' ? styles.hidden : '')}>
          <div className={styles.navbar}>
            <div className={styles.content}>
              <p onClick={() => {goTo('dubbing')}}>더빙</p>
              <p onClick={() => {goTo('ad')}}>광고</p>
              <p onClick={() => {goTo('foreign')}}>외화</p>
              <p onClick={() => {goTo('audiobook')}}>오디오북</p>
              <p onClick={() => {goTo('short')}}>단역</p>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default MenuD

