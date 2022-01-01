import { useEffect, useState, useRef } from 'react';
import './App.css'
import styles from './App.module.css'
import logo from './assets/mvplogo.png'
import voice from './assets/adelaide.mp3'
import tommy from './assets/tommy.png'
import Player from './components/Player.js'
import upButton from './assets/up.png'
import playButton from './assets/play.png'
import pauseButton from './assets/pause.png'
import dodesho from './assets/dodesho.png'
import gray from './assets/none.png'
import ruin from './assets/R6-edit.png'
import exarch from './assets/exarch.jpg'
import bio from './assets/bio.jpg'
import { Route } from 'react-router-dom'

function App() {
  // const profile = useRef()

  // 헤더 스크롤할때 효과
  const [scroll, setScroll] = useState(0)
  const [topCss, setTopCss] = useState(0)
  const [visibleCss, setVisibleCss] = useState("visible")
  const [profilePos, setProfilePos] = useState("relative")
  const [profileTop, setProfileTop] = useState("140px")
  const handleScroll = () => {
    const position = window.pageYOffset
    setScroll(position)
    setTopCss(position/100*-30)
    if (position >= 920) {
      setProfilePos("fixed")
      setProfileTop("191px")
    }
    else if (position < 920) {
      setProfilePos("relative")
      setProfileTop("140px")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // 스크롤 컨트롤
  const goContact = () => {
    window.scrollTo({
      top: 999999,
      behavior: 'smooth',
    })
  }

  const goProfile = () => {
    window.scrollTo({
      top: 920,
      behavior: 'smooth',
    })
  }

  const goHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // 카드 클릭시 모달
  const [modalOn, setModalOn] = useState(false)
  const [iframeSrc, setIframeSrc] = useState('')
  
  const closeModal = () => {
    setModalOn(false)
    console.log('close')
  }

  const openModal = () => {
    setModalOn(true)
    console.log('const')
  }

  function showDetail(props) {
    setModalOn(true)
    console.log('open')
  }

  return (
    <div className="App">
      <div className={styles.navbar}>
        <div className={styles.max}>
        <div className={styles.navHome}>
          <img className={styles.logo} src={logo} alt="" onClick={goHome} />
          {/* <p onClick={goHome}>Home</p> */}
        </div>
        <div className={styles.navMenu}>
          <p onClick={goProfile}>Profile</p>
          <p onClick={goContact}>???</p>
        </div>
        </div>
      </div>
      <header id="main" className={styles.main} style={{top: topCss, visibility: visibleCss}}>
        <div className={styles.intro}>
          <h1>프로필 사진이나<br/>승우버스 짤 같은 것 ></h1>
          <audio id="voice" controls src={voice} className={styles.audio}></audio>
        </div>
        <img src={tommy} alt="" className={styles.tommy}/>
      </header>
      <div className={styles.goUp} onClick={goUp}>
        <img src={upButton} alt="" />
      </div>
      <div className={styles.blank}></div>
      {/* <div className={styles.modal} onClick={closeModal} style={{display: modalOn}}>
        <div className={styles.modalContainer}></div>
      </div> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-body" className={styles.modalBody}>
        <iframe width="1138" height="620" src="https://www.youtube.com/embed/RYzczF4vL-g" frameborder="0" autoplay="1"></iframe>
      </div>
    </div>
  </div>
</div>
      <div className={styles.content}>
        <div className={styles.rear}>
          <div className={styles.rearLeft}>
            <div className={styles.profileFix} style={{position: profilePos, top: profileTop}}>
            <h1>이름</h1>
            <div className={styles.line}></div>
            <span>
            <a className={styles.lov} href="https://lordofvoice.com/seungwoo" target='_blank'>로드오브보이스</a>
            <a className={styles.insta} href="https://www.instagram.com/minswoosh/" target='_blank'>Instagram</a>
            <a className={styles.naver} href="https://cafe.naver.com/mvp1103" target='_blank'>Cafe</a>
            </span>
            </div>
          </div>
          <div className={styles.rearRight}>
            <div className={styles.desc}>설명?</div>
            <div className={styles.profileSample}>
              <span className={styles.title}>
                <h1>Game</h1>
                <p>모두보기</p>
              </span>
              <span className={styles.cards}>
                <span className={styles.card}>
                  <img src={exarch} alt="" />
                  <div className={styles.hoverInfo}>
                    <div className={styles.cardDesc} data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <h4>수정공</h4>
                      <p>Final Fantasy XIV <i class="fas fa-desktop"></i></p>
                      <p>SQUARE ENIX<br></br>액토즈소프트</p>
                    </div>
                    <a className={styles.link} href="https://www.ff14.co.kr" target='_blank'>
                        <i class="fas fa-external-link-alt" title="공식 홈페이지"></i>
                    </a>
                  </div>
                </span>
                <span className={styles.card}>
                  <img src={ruin} alt="" />
                  <div className={styles.hoverInfo}>
                    <div className={styles.cardDesc} data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <h4>루인</h4>
                      <p>로드 오브 히어로즈 <i class="fas fa-mobile-alt"></i></p>
                      <p>클로버게임즈</p>
                    </div>
                    <a className={styles.link} href="https://play.google.com/store/apps/details?id=com.clovergames.lordofheroes" target='_blank'>
                        <i class="fab fa-google-play" title="앱스토어"></i>
                    </a>
                  </div>
                </span>
                <span className={styles.card}>
                  <img src={bio} alt="" />
                  <div className={styles.hoverInfo}>
                    <div className={styles.cardDesc} data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <h4>강비오</h4>
                      <p>워너비챌린지<i class="fas fa-mobile-alt"></i></p>
                      <p>컴투스</p>
                    </div>
                    <a className={styles.link} href="https://play.google.com/store/apps/details?id=com.com2us.wannabe.android.google.global.normal" target='_blank'>
                        <i class="fab fa-google-play" title="앱스토어"></i>
                    </a>
                  </div>
                </span>
                <div>준비중</div>
              </span>
            </div>
            <div className={styles.profileSample}>
              <span className={styles.title}>
                <h1>Ad</h1>
                <p>모두보기</p>
              </span>
              <span className={styles.cards}>
                <span className={styles.card}>
                  {/* <img src={dodesho} alt="" /> */}
                  <iframe width="240" height="320" src="https://www.youtube.com/embed/4G3DA_0dirs" frameborder="0"></iframe>
                </span>
                <iframe width="240" height="320" src="https://www.youtube.com/embed/383VsEbCo0Q" frameborder="0"></iframe>
                <div>준비중</div>
                <div>준비중</div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className={styles.footer}>
          <div className={styles.fCard}>
            <p>for US @bellpeppr</p>
          </div>
          <div className={styles.fCard}>
          </div>
          <div className={styles.fCard}>          
            <p></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
