import styles from './Navbar.module.css'
import { useEffect, useState } from 'react'

function Navbar(props) {
  function handlePosition(id) {
    window.location.href = '#' + id
  }

  const main = []
  const sub = []
  for (let i = 0; i < props.main.length; i++) {
    main.push(
      <input id={props.main[i]} type="radio" name="category" />
    )
    main.push(
      <label className={styles.menu} for={props.main[i]} onClick={() => handlePosition(props.mainhref[i])}>{props.main[i]}</label>
    )
  }
  for (let i = 0; i < props.sub.length; i++) {
    sub.push(
      <input id={props.sub[i]} type="radio" name="category"/>
    )
    sub.push(
      <label className={styles.menu} for={props.sub[i]} onClick={() => handlePosition(props.subhref[i])}>{props.sub[i]}</label>
    )
  }

  return (
    <div className={styles.navbar} > 
      <div className={styles.content}>
        <div className={styles.main}>
          {main}
        </div>
        <div className={styles.sub}>
          {sub}
        </div>
      </div>
    </div>
  )
}

export default Navbar