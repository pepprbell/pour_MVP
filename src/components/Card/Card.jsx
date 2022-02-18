import styles from './Card.module.css'
import classnames from 'classnames';
import { useState } from 'react'

function Card(props) {
  const none = "https://user-images.githubusercontent.com/67995526/154494368-d2a4d6e1-dd45-42b0-8d0e-22e6719bc2d0.png"

  const movePage = () => {
    window.open(props.query.Link, "_blank")
  }
  
  return (
    <div className={classnames(styles.card, (props.type ? styles.homeCard : styles.allCard))} style={{visibility:props.visible}} onClick={movePage}>
    <figure><img className={styles.img} src={props.query ? props.query.Image : none} alt="" /></figure>
    <div className={classnames(styles.white, (props.type ? styles.homeWhite : styles.allWhite))}>
      <div className={(props.type ? styles.homeDiv : styles.allDiv)}>
        <h4 className={styles.first}>{props.first}</h4>
        <p className={styles.second} href={props.href}>{props.second}</p>
        <p className={styles.second}>{props.third}</p>
      </div>
    </div>
  </div>
  )
}

export default Card