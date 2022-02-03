import styles from './Card.module.css'
import none from '../../assets/none.png'
import classnames from 'classnames';
import { useState } from 'react'

function Card(props) {
  //  type: home, seeall, 
  // className={classnames(styles.menu, (menuOn ? styles.show : styles.menu))}
  // console.log(props.first)
  
  return (
    <div className={classnames(styles.card, (props.type ? styles.homeCard : styles.allCard))} style={{visibility:props.visible}}>
    <img className={(props.type ? styles.homeImg : styles.allImg)} src={none} alt="" />
    <div className={classnames(styles.white, (props.type ? styles.homeWhite : styles.allWhite))}>
      <div className={(props.type ? styles.homeDiv : styles.allDiv)}>
        <h4 className={(props.type ? styles.homeH4 : styles.allH4)}>{props.first}</h4>
        <a className={(props.type ? styles.homeA : styles.allA)} href={props.href}>{props.second}</a>
        <a className={(props.type ? styles.homeA : styles.allA)}>{props.third}</a>
      </div>
    </div>
  </div>
  )
}

export default Card