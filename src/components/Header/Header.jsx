import styles from './Header.module.css'
import voice from '../../assets/adelaide.mp3'
import tommy from '../../assets/tommy.png'
import signature from '../../assets/signature.png'

function Header(props) {
  return (
    <header id="main" className={styles.main} style={{top: props.topCss, visibility: props.audiovisibleCss}}>
      <div className={styles.intro}>
        <h1>프로필 사진이나<br/>승우버스 짤 같은 것 ></h1>
        <audio id="voice" controls src={voice} className={styles.audio}></audio>
      </div>
      <img src={tommy} alt="" className={styles.tommy}/>
      <img src={signature} alt="" className={styles.sig}/>
    </header>
  )
}

export default Header