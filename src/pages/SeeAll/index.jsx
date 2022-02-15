import { useState, useEffect } from 'react'
import {
    Navbar, Cards, MiniCards
} from '../../components'
import styles from './index.module.css'

import { DataStore } from '@aws-amplify/datastore'
import { Audiobook } from '../../models'

import awsConfig from '../../aws-exports.js'
import { Amplify } from '@aws-amplify/core'
import { useHistory } from 'react-router-dom'
Amplify.configure(awsConfig)


function SeeAll(props) {
    const history = useHistory()
    const move = () => {
        window.location.href = '#' + history.location.state.type
    }

    const [audiobook, setAudiobook] = useState({})
    const [dubbing, setDubbing] = useState({})
    const [ad, setAd] = useState({})
    const [foreign, setForeign] = useState({})
    const [short, setShort] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (history.location.state != undefined) {
            move()
        }
        getData()
        setIsLoading(false)
    }, [])

    const getData = () => {
        DataStore.query(Audiobook).then(res => {
            setAudiobook(res)
            })
        // DataStore.query(Dubbing).then(res => {
        //     setDubbing(res)
        //     })
        // DataStore.query(Short).then(res => {
        //     setShort(res)
        //     })
        // DataStore.query(Foreign).then(res => {
        //     setForeign(res)
        //     })
        // DataStore.query(Ad).then(res => {
        //     setAd(res)
        //     })
    }

    const subKr = ['TV 애니메이션', '극장 애니메이션', '게임', '드라마CD', '오디오드라마', '특촬']
    const subEn = ['tv', 'theater', 'game', 'dramacd', 'audiodrama', 'kamen']

    // if (isLoading) {
    //     return (
    //         <div>loading</div>
    //     )
    // } else {
    return (
        <div className={styles.container}>
        <Navbar subKr={subKr} subEn={subEn}></Navbar>
        <div className={styles.rear}>
            <div className={styles.content}>
                <div className={styles.category}>
                    <h1 className={styles.main}><a id='dubbing'></a>더빙</h1>
                    <h1 className={styles.sub}><a id='tv'></a>TV 애니메이션</h1>
                    <Cards first='Character' second='Content' query={dubbing} type='tv'></Cards>
                    <h1 className={styles.sub}><a id='theater'></a>극장 애니메이션</h1>
                    <Cards first='Character' second='Content' query={dubbing} type='theater'></Cards>
                    <h1 className={styles.sub}><a id='game'></a>게임</h1>
                    <Cards first='Character' second='Content' query={dubbing} type='game'></Cards>
                    <h1 className={styles.sub}><a id='dramacd'></a>드라마 CD</h1>
                    <Cards first='Character' second='Content' query={dubbing} type='dramacd'></Cards>
                    <h1 className={styles.sub}><a id='audiodrama'></a>오디오드라마</h1>
                    <Cards first='Character' second='Content' query={dubbing} type='audiodrama'></Cards>
                    <h1 className={styles.sub}><a id='kamen'></a>특촬</h1>
                    <Cards first='Character' second='Content' query={dubbing} type='kamen'></Cards>
                </div>
                <div className={styles.line}></div>
                <div className={styles.category}>
                    <h1 className={styles.main}><a id='ad'></a>광고</h1>
                    <Cards first='Ad' second='' query={ad} type=''></Cards>
                </div>
                <div className={styles.line}></div>
                <div className={styles.category}>
                    <h1 className={styles.main}><a id='foreign'></a>외화</h1>
                    <Cards first='Character' second='Content' third='Actor' query={foreign} type=''></Cards>
                </div>
                <div className={styles.line}></div>
                <div className={styles.category}>
                    <h1 className={styles.main}><a id='audiobook'></a>오디오북</h1>
                    <MiniCards first='Book' second='Author' query={audiobook}></MiniCards>
                </div>
                <div className={styles.line}></div>
                <div className={styles.category}>
                    <h1 className={styles.main}><a id='short'></a>기타</h1>
                    <MiniCards first='Character' second='Content' query={short}></MiniCards>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SeeAll