import React, { useState, useEffect } from "react"
import styles from './index.module.css'
import { useHistory } from "react-router-dom"
import {
    Card, Profile, ProfileM, Carousel
} from '../../components'

function Home(props) {
    const history = useHistory()

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
        <div className={styles.container}>
            <ProfileM></ProfileM>
            <Profile></Profile>
        </div>
    )
}

export default Home