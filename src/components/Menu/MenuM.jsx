import { useState } from 'react'
import styles from './MenuM.module.css'
import classnames from 'classnames';
import menu from '../../assets/menu.png'
import { A } from '..';


function MenuM(props) {
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
      <div style={{visibility:props.visible}}>
          <img className={styles.menuDiv} src={menu} onClick={openMenu} alt="" />
        <div className={classnames(styles.menu, (menuOn ? styles.show : styles.menu))}>
          <div className={styles.rear}>
            <div className={styles.flex}>
              <ul className={styles.ul}>
                <li className={styles.li}><A value="홈" goTo="/"></A></li>
                <li className={styles.li}><A value="데이터 생성" goTo="/create"></A></li>
                <li className={styles.li}><A value="See All" goTo="/seeall"></A></li>
              </ul>
            </div>
            <div className={styles.gallery}>
              <div className={styles.title}>
                <p>Current</p>
              </div>
              <div className={styles.images}>
                <a className={styles.imageLink} href="#">
                  <div className={styles.image} data-label="star"><img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" alt=""/></div>
                </a>
                <a className={styles.imageLink} href="#">
                  <div className={styles.image}><img src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg" alt=""/></div>
                </a>
                <a className={styles.imageLink} href="#">
                  <div className={styles.image}><img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" alt=""/></div>
                </a>
                <a className={styles.imageLink} href="#">
                  <div className={styles.image}><img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" alt=""/></div>
                </a>
              </div>
            </div>
            </div>
        </div>
      </div>
        
    )
}

export default MenuM

