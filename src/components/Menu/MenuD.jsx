import styles from './MenuD.module.css'
import sml from '../../assets/sml.png'


function MenuD(props) {
    const goHome = () => {
        window.location.href = '/'
    }

    const goTo = (id) => {
      window.location.href = '/'+id
    }

    return (
      <div className={styles.container}>
        {/* <img className={classnames(styles.menuIcon, (window.location.pathname === '/' ? '' : styles.hidden))} src={menu} alt="" onClick={goHome}/>
        <div className={classnames(styles.menu, (window.location.pathname === '/' ? '' : styles.hidden))}>
            <A type="web" value="홈" goTo="/"></A>
            <A type="web" value="출연작" goTo="/seeall"></A>
        </div> */}
        <div className={styles.navbar}>
          <div className={styles.content}>
            <img className={styles.goHome} src={sml} alt="" onClick={goHome} />
            {/* <p onClick={() => {goTo('seeall')}}>더빙</p> */}
            <p onClick={() => {goTo('ad')}}>광고</p>
            {/* <p onClick={() => {goTo('foreign')}}>외화</p> */}
            <p onClick={() => {goTo('audiobook')}}>오디오북</p>
            {/* <p onClick={() => {goTo('short')}}>기타</p> */}
          </div>
        </div>
      </div>
        
    )
}

export default MenuD

