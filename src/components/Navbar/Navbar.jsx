import styles from './Navbar.module.css'
import { useEffect, useState } from 'react'
import {
  Hamburger, MenuD
} from '../index'

function Navbar(props) {
  const goTo = (id) => {
    window.location.href = '#' + id
  }

  // const mainKr = ['더빙','광고','외화','오디오북','기타']
  // const mainEn = ['dubbing','ad','foreign','audiobook','short']
  const subKr = ['TV 애니메이션', '극장 애니메이션', '게임', '드라마CD', '오디오드라마', '특촬']
  const subEn = ['tv', 'theater', 'game', 'dramacd', 'audiodrama', 'kamen']

  const sub = []
  for (let i = 0; i < subKr.length; i++) {
    sub.push(
      <p for={subKr[i]} onClick={() => goTo(subEn[i])}>{subKr[i]}</p>
    )
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        {sub}
        {/* <p onClick={() => {goTo('dubbing')}}>더빙</p>
        <p onClick={() => {goTo('ad')}}>광고</p>
        <p onClick={() => {goTo('foreign')}}>외화</p>
        <p onClick={() => {goTo('audiobook')}}>오디오북</p>
        <p onClick={() => {goTo('short')}}>단역</p> */}
        <button className={styles.right}><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>
  )
}

export default Navbar