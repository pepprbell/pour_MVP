import styles from './Profile.module.css'
import cafe from '../../assets/cafe.png'
import alv from '../../assets/allvoice.jpg'
import insta from '../../assets/insta.png'
import lov from '../../assets/lov.png'
import prof from '../../assets/prof.png'
import sign from '../../assets/signature.png'
import classnames from 'classnames';

function Profile(props) {
  const movePage = (href) => {
    window.open(href, "_blank")
  }

  const goTo = () => {
    window.location.pathname = '/seeall'
  }

  return (
    <div className={styles.profile}>
      <div className={styles.left}>
        <div className={styles.desc}>
          <h1>민승우</h1>
          <p>대교방송 성우극회 6기 (2014)</p>
          <p>1986. 11. 3.</p>
          <div className={styles.line}></div>
          <div>
            <img className={classnames(styles.link, styles.border)} src={lov} alt="" onClick={() => {movePage("https://lordofvoice.com/seungwoo")}}/>
            <img className={classnames(styles.link, styles.border)} src={alv} alt="" onClick={() => {movePage("https://allvoice.kr/shop/voiceDetail.php?cat=&mb_id=nid_31921726")}}/>
            <img className={styles.link} src={insta} alt="" onClick={() => {movePage("https://www.instagram.com/minswoosh/")}}/>
            <img className={styles.link} src={cafe} alt="" onClick={() => {movePage("https://cafe.naver.com/mvp1103")}}/>
          </div>
        </div>
        <div className={styles.sample}>
          <p className={styles.spacing}>SAMPLE</p>
          <p>~~하고 ~~한</p>
          <audio id="voice" controls src={voice} className={styles.audio}></audio>
          <p>~~하고 ~~한</p>
          <audio id="voice" controls src={voice} className={styles.audio}></audio>
          <p>~~하고 ~~한</p>
          <audio id="voice" controls src={voice} className={styles.audio}></audio>
          <p onClick={goTo}>+ 출연작 더보기</p>
        </div>
      </div>
      <img className={styles.pic} src={prof} alt="" />
      <img className={styles.sign} src={sign} alt="" />
    </div>
  )
}

export default Profile