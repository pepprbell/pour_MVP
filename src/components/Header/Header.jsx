import styles from './Header.module.css'
import voice from '../../assets/adelaide.mp3'
import tommy from '../../assets/tommy.png'
import signature from '../../assets/signature.png'

function Header(props) {
  const height = window.innerHeight - 15

  return (
    <div id="main" className={styles.main} style={{height: height}}>
      <div className={styles.intro}>
        <h1>여기엔 인삿말<br/>저쪽엔 프사 ></h1>
        <audio id="voice" controls src={voice} className={styles.audio}></audio>
      </div>
      <img src={tommy} alt="" className={styles.tommy}/>
      <img src={signature} alt="" className={styles.sig}/>
    </div>
  )
}

export default Header