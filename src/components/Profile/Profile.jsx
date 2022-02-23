import styles from './Profile.module.css'
import classnames from 'classnames';

function Profile(props) {
  const prof = 'https://user-images.githubusercontent.com/67995526/155153214-d3951a47-c8b0-4647-a923-92dbef43a26a.png'
  const alv = 'https://user-images.githubusercontent.com/67995526/154688191-2f498cc1-0465-4942-86f6-5711e0d3567c.jpg'
  const insta = 'https://user-images.githubusercontent.com/67995526/154688260-45b70367-50e6-4428-97a2-4416cded9e4b.png'
  const lov = 'https://user-images.githubusercontent.com/67995526/154688373-2f55d7eb-fb6e-4505-a5f3-056b2f7d05b7.png'
  const cafe = 'https://user-images.githubusercontent.com/67995526/154688340-5e0975f4-84af-4e66-82ad-148d4c9db820.png'

  const movePage = (href) => {
    window.open(href, "_blank")
  }

  return (
    <div className={styles.profile}>
      <div className={styles.left}>
        <div className={styles.desc}>
          {/* <img className={styles.profilePic} src={prof} alt="" /> */}
          <h1>민승우</h1>
          <p>대교방송 성우극회 6기</p>
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
          <audio id="voice" controls src="" className={styles.audio}></audio>
          <p>~~하고 ~~한</p>
          <audio id="voice" controls src="" className={styles.audio}></audio>
          <p>~~하고 ~~한</p>
          <audio id="voice" controls src="" className={styles.audio}></audio>
          {/* <p onClick={goTo}>+ 출연작 더보기</p> */}
        </div>
      </div>
      {/* <img className={styles.pic} src={prof} alt="" />
      <img className={styles.sign} src={sign} alt="" /> */}
    </div>
  )
}

export default Profile