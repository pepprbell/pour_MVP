import { useState } from 'react'
import styles from './MenuD.module.css'
import classnames from 'classnames';
import menu from '../../assets/menu.png'
import { A } from '..';


function MenuD(props) {
    function goHome() {
        window.location.pathname = '/'
    }

    return (
      <div style={{visibility:props.visible}}>
        <img className={styles.menuIcon} src={menu} alt="" style={{visibility:props.web}} onClick={goHome}/>
        {/* <div className={styles.menu}>
            <A type="web" value="더빙" goTo="/seeall#dubbing"></A>
            <A type="web" value="광고" goTo="/seeall#ad"></A>
            <A type="web" value="외화" goTo="/seeall#"></A>
            <A type="web" value="오디오북" goTo="/seeall"></A>
            <A type="web" value="단역" goTo="/seeall"></A>
        </div> */}
      </div>
        
    )
}

export default MenuD

