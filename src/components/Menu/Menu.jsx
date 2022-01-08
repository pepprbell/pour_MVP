import { useState } from 'react'
import styles from './Menu.module.css'
import classnames from 'classnames';
import menu from '../../assets/mvplogo.png'
import { A } from '..';


function Menu() {
    const [menuOn, setMenuOn] = useState(0)

    // 메뉴 클릭
    function openMenu() {
        if (menuOn === 0) {
            setMenuOn(1)
        } else {
            setMenuOn(0)
        }
    }

    return (
      <div>
        <div className={styles.menuDiv}>
          <img className={styles.menuImg} src={menu} onClick={openMenu} alt="" />
        </div>
        <div className={classnames(styles.menu, (menuOn ? styles.show : styles.menu))}>
            <div className={styles.rear}>
                <A value="홈" goTo="/"></A>
                <A value="데이터 생성" goTo="/create"></A>
                <A value="See All" goTo="/seeall"></A>
            </div>
        </div>
      </div>
        
    )
}

export default Menu

