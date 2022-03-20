import styles from './Profile.module.css'
import classnames from 'classnames';
import GetSample from '../../hooks/getSample'
import { Storage } from '@aws-amplify/storage'
import { useEffect, useRef, useState } from 'react';

function Profile(props) {
  const profM = 'https://user-images.githubusercontent.com/67995526/159160943-50cfa8a8-0fa9-4a29-a248-56e7c6720941.png'
  const profD = 'https://user-images.githubusercontent.com/67995526/159160307-3a12239c-b655-4f86-8ea1-14ac4b2109b4.png'
  const alv = 'https://user-images.githubusercontent.com/67995526/154688191-2f498cc1-0465-4942-86f6-5711e0d3567c.jpg'
  const insta = 'https://user-images.githubusercontent.com/67995526/154688260-45b70367-50e6-4428-97a2-4416cded9e4b.png'
  const lov = 'https://user-images.githubusercontent.com/67995526/154688373-2f55d7eb-fb6e-4505-a5f3-056b2f7d05b7.png'
  const cafe = 'https://user-images.githubusercontent.com/67995526/154688340-5e0975f4-84af-4e66-82ad-148d4c9db820.png'
  const [v1, setV1] = useState('')
  const [v2, setV2] = useState('')
  const [v3, setV3] = useState('')
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()

  const movePage = (href) => {
    window.open(href, "_blank")
  }
  useEffect(() => {
    Storage.get("voice/제네시스.wav", {
      level: "public"
    }).then(res => {
      setV1(res)
    })
    Storage.get("voice/자구마.wav", {
      level: "public"
    }).then(res => {
      setV2(res)
    })
    Storage.get("voice/에마.wav", {
      level: "public"
    }).then(res => {
      setV3(res)
    })
    ref1.current.volume = 0.9
  })
  
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
          <audio id="voice1" src={v1} ref={ref1} controls className={styles.audio}></audio>
          <p>자색고구마맛 쿠키 - 쿠키런: 킹덤</p>
          <audio id="voice1" src={v2} ref={ref2} controls className={styles.audio}></audio>
          <p>에마 - Library of Ruina</p>
          <audio id="voice1" src={v3} ref={ref3} controls className={styles.audio}></audio>
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