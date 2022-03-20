import styles from './Profile.module.css'
import classnames from 'classnames';
import v1 from '../../assets/제네시스.mp3'
import v2 from '../../assets/자구마.mp3'
import v3 from '../../assets/에마.mp3'

function Profile(props) {
  const profM = 'https://user-images.githubusercontent.com/67995526/159160943-50cfa8a8-0fa9-4a29-a248-56e7c6720941.png'
  const profD = 'https://user-images.githubusercontent.com/67995526/159160307-3a12239c-b655-4f86-8ea1-14ac4b2109b4.png'
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
          <div className={styles.prof}>
            <div>
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
            <div><img className={classnames(styles.profilePic, styles.m)} src={profM} alt="" /></div>
          </div>
        </div>
        <div className={styles.sample}>
          <p className={styles.spacing}>SAMPLE</p>
          <p>제네시스 G70 CF (2019)</p>
          <audio id="voice1" controls className={styles.audio}><source src={v1} type="audio/mpeg"/></audio>
          <p>자색고구마맛 쿠키 - 쿠키런: 킹덤</p>
          <audio id="voice1" controls className={styles.audio}><source src={v2} type="audio/mpeg"/></audio>
          <p>에마 - Library of Ruina</p>
          <audio id="voice1" controls className={styles.audio}><source src={v3} type="audio/mpeg"/></audio>
          {/* <p onClick={goTo}>+ 출연작 더보기</p> */}
        </div>
      </div>
      <div className={styles.right}>
        <img className={classnames(styles.profilePic, styles.d)} src={profD} alt="" />
      </div>
    </div>
  )
}

export default Profile