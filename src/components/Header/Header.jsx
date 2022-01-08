import styles from './Header.module.css'
import voice from '../../assets/adelaide.mp3'
import tommy from '../../assets/tommy.png'
import signature from '../../assets/signature.png'

function Header(props) {
  return (
    <header id="main" className={styles.main} style={{top: props.topCss, visibility: props.audiovisibleCss}}>
      <div className={styles.intro}>
        <h1>여기엔 인삿말<br/>저쪽엔 프사 ></h1>
        <audio id="voice" controls src={voice} className={styles.audio}></audio>
      </div>
      <img src={tommy} alt="" className={styles.tommy}/>
      <img src={signature} alt="" className={styles.sig}/>
    </header>
  )
}

export default Header