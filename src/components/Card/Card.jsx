import styles from './Card.module.css'
import none from '../../assets/none.png'
import classnames from 'classnames';
import { useState } from 'react'

function Card(props) {

  //  type: home, seeall, 
  // className={classnames(styles.menu, (menuOn ? styles.show : styles.menu))}

    return (
        <div className={styles.card}>
        <img className={(props.type ? styles.homeImg : styles.allImg)} src={none} alt="" />
        <div className={classnames(styles.white, (props.type ? styles.homeWhite : styles.allWhite))}>
          <div className={(props.type ? styles.homeDiv : styles.allDiv)}>
            <h4 className={(props.type ? styles.homeH4 : styles.allH4)}>캐릭터{props.character}</h4>
            <a className={(props.type ? styles.homeA : styles.allA)} href={props.href}>작품{props.content}</a>
          </div>
        </div>
      </div>
    )
}

export default Card