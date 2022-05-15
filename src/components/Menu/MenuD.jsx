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
        <div className={styles.navbar}>
          <div className={styles.content}>
            <div className={styles.nav}>
              <img className={styles.goHome} src={sml} alt="" onClick={goHome} />
              <p onClick={() => {goTo('dubbing')}}>더빙</p>
              <p onClick={() => {goTo('ad')}}>광고</p>
              {/* <p onClick={() => {goTo('foreign')}}>외화</p> */}
              <p onClick={() => {goTo('audiobook')}}>오디오북</p>
              {/* <p onClick={() => {goTo('short')}}>기타</p> */}
            </div>
            <div><p onClick={() => {goTo('create')}}>데이터 입력</p></div>
          </div>
        </div>
      </div>
        
    )
}

export default MenuD

