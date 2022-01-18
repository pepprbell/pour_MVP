import React, { useState, useEffect } from "react"
import styles from './index.module.css'
import { useHistory } from "react-router-dom"
import {
    Card, Header, Profile, Footer, AdCarousel
} from '../../components'

function Home(props) {
    const history = useHistory()

    // 헤더 스크롤할때 효과
    const [scroll, setScroll] = useState(0)
    const [topCss, setTopCss] = useState(0)
    const [visibleCss, setVisibleCss] = useState("visible")
    // const [profilePos, setProfilePos] = useState("relative")
    // const [profileTop, setProfileTop] = useState("140px")

    const handleScroll = () => {
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
    // const [modalOn, setModalOn] = useState(false)
    
    // const closeModal = () => {
    // setModalOn(false)
    // console.log('close')
    // }

    // const openModal = () => {
    // setModalOn(true)
    // console.log('const')
    // }

    // function showDetail(props) {
    // setModalOn(true)
    // console.log('open')
    // }

    return (
        <div>
            <Header></Header>
            <div className={styles.blank}></div>
            <div className={styles.content}>
            <Profile></Profile>
            <div className={styles.rear}>
                <div className={styles.profileSample}>
                    <div className={styles.title}>
                    <h1>게임</h1>
                    <p>모두보기</p>
                    </div>
                    <div className={styles.cards}>
                        <Card type="home"></Card>
                        <Card type="home"></Card>
                        <Card type="home"></Card>
                        <Card type="home"></Card>
                    </div>
                </div>
                <div className={styles.profileSample}>
                    <div className={styles.title}>
                    <h1>광고</h1>
                    <p onClick={() => history.push({pathname:'/seeall', state:{type:'ad'}})}>모두보기</p>
                    </div>
                    <div className={styles.cards}>
                        <Card type="home"></Card>
                        <Card type="home"></Card>
                        <Card type="home"></Card>
                        <Card type="home"></Card>
                    </div>
                </div>
            </div>
            </div>
                <AdCarousel></AdCarousel>
            <Footer></Footer>
        </div>
    )
}

export default Home