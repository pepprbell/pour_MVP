import { useEffect, useState } from 'react'
import styles from './index.module.css'
import {
    Navbar, Cards, BookBanner
} from '../../components'

import { Audiobook } from '../../models'
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'


function Audiobooks () {
    const goOut = (url) => {
        window.open(url, "_blank")
    }

    const [audiobook, setAudiobook] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // getData()
        setIsLoading(false)
    }, [])
    DataStore.query(Audiobook, Predicates.All, {
        sort: s => s.Date(SortDirection.DESCENDING)
    }).then(res => {
        setAudiobook(res)
    })

    const getData = () => {
        // DataStore.query(Audiobook, Predicates.All, {
        //     sort: s => s.Date(SortDirection.DESCENDING)
        // }).then(res => {
        //     setAudiobook(res)
        // })
    }

    const subKr = []
    const subEn = []

    return (
        <div className={styles.container}>
            {/* <Navbar subKr={subKr} subEn={subEn}></Navbar> */}
            <div className={styles.content}>
                <BookBanner></BookBanner>
                <div className={styles.cards}>
                    <Cards first='Book' second='Author' third='Date' query={audiobook}></Cards>
                </div>
            </div>
        </div>
    )
}

export default Audiobooks