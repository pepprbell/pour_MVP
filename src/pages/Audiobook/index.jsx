import { useEffect, useState } from 'react'
import styles from './index.module.css'
import none from '../../assets/none.png'
import {
    Navbar, Cards
} from '../../components'

import { Audiobook } from '../../models'
import { DataStore } from '@aws-amplify/datastore'


function Audiobooks () {
    const goOut = (url) => {
        window.open(url, "_blank")
    }

    const [audiobook, setAudiobook] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getData()
        setIsLoading(false)
        console.log(audiobook)
    }, [])

    const getData = () => {
        DataStore.query(Audiobook).then(res => {
            setAudiobook(res)
        })
    }

    const subKr = []
    const subEn = []

    return (
        <div className={styles.container}>
            <Navbar subKr={subKr} subEn={subEn}></Navbar>
            <div className={styles.content}>
                <div className={styles.banner}>
                    <div className={styles.side}>
                        <img src={none} alt="" onClick={() => {goOut('')}} />
                        <img src={none} alt="" onClick={() => {goOut('')}} />
                    </div>
                    <div className={styles.middle}>
                        <img src={none} alt="" onClick={() => {goOut('')}} />
                    </div>
                    <div className={styles.side}>
                        <img src={none} alt="" onClick={() => {goOut('')}} />
                        <img src={none} alt="" onClick={() => {goOut('')}} />
                    </div>
                </div>
                <Cards first='Book' second='Author' query={audiobook}></Cards>
            </div>
        </div>
    )
}

export default Audiobooks