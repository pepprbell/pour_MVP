import React, { useState, useEffect } from "react"
import styles from './index.module.css'
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Player from '../../components/Player.js'
import upButton from '../../assets/up.png'
import {
    Card, Header
} from '../../components'

function Home(props) {
    // const profile = useRef()

    // 헤더 스크롤할때 효과
    const [scroll, setScroll] = useState(0)
    const [topCss, setTopCss] = useState(0)
    const [visibleCss, setVisibleCss] = useState("visible")
    const [profilePos, setProfilePos] = useState("relative")
    const [profileTop, setProfileTop] = useState("140px")

    const handleScroll = () => {
        const position = window.pageYOffset
        const vh = window.innerHeight
        setScroll(position)
        setTopCss(position/100*-30)
        
        if (position >= vh) {
            setProfilePos("fixed")
        }
        else if (position < vh) {
            setProfilePos("relative")
        }
    }

    useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true})
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
    }, [])

    // 스크롤 컨트롤

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
        <div>
            <Header topCss={topCss} visibleCss={visibleCss}></Header>
            <div className={styles.goUp} onClick={goUp}>
            <img src={upButton} alt="" />
            </div>
            <div className={styles.blank}></div>
            {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="modal-body" className={styles.modalBody}>
                    <iframe width="1138" height="620" src="https://www.youtube.com/embed/RYzczF4vL-g" frameborder="0" autoplay="1"></iframe>
                    </div>
                </div>
                </div>
            </div> */}
            <div className={styles.content}>
            <div className={styles.rear}>
                <div className={styles.rearLeft}>
                <div className={styles.profileFix} style={{position: profilePos, top: profileTop}}>
                <h1>이름</h1>
                <div className={styles.line}></div>
                <span>
                <a className={styles.lov} href="https://lordofvoice.com/seungwoo" target='_blank'>로드오브보이스</a>
                <a className={styles.insta} href="https://www.instagram.com/minswoosh/" target='_blank'>인스타그램</a>
                <a className={styles.naver} href="https://cafe.naver.com/mvp1103" target='_blank'>네이버 카페</a>
                </span>
                </div>
                </div>
                <div className={styles.rearRight}>
                <div className={styles.desc}>설명?</div>
                <div className={styles.profileSample}>
                    <span className={styles.title}>
                    <h1>게임</h1>
                    <p>모두보기</p>
                    </span>
                    <span className={styles.cards}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    </span>
                </div>
                <div className={styles.profileSample}>
                    <span className={styles.title}>
                    <h1>광고</h1>
                    <p>모두보기</p>
                    </span>
                    <span className={styles.cards}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    </span>
                </div>
                </div>
                <div className={styles.black}></div>
            </div>
            </div>
        <footer>
        <div className={styles.footer}>
            <div className={styles.fCard}>
            <p>for us. @bellpeppr</p>
            </div>
            <div className={styles.fCard}>
            </div>
            <div className={styles.fCard}>          
            <p></p>
            </div>
        </div>
        </footer>
    </div>
    )
}

export default Home