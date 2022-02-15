import { useEffect, useState } from 'react'
import styles from './index.module.css'
import none from '../../assets/none.png'
import audiobook1 from '../../assets/audiobook1.png'
import audiobook2 from '../../assets/audiobook2.png'
import audiobook3 from '../../assets/audiobook3.png'
// import audiobook from '../../assets/audiobook.png'
// import audiobook from '../../assets/audiobook.png'
import {
    Navbar, Cards
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
        getData()
        setIsLoading(false)
    }, [])

    const getData = () => {
        DataStore.query(Audiobook, Predicates.All, {
            sort: s => s.Date(SortDirection.DESCENDING)
        }).then(res => {
            setAudiobook(res)
        })
    }

    const subKr = []
    const subEn = []

    return (
        <div className={styles.container}>
            {/* <Navbar subKr={subKr} subEn={subEn}></Navbar> */}
            <div className={styles.content}>
                <div className={styles.banner}>
                    <div className={styles.side}>
                        <img src={audiobook2} alt="" onClick={() => {goOut('https://audioclip.naver.com/audiobooks/C7F76AAC59')}} />
                        <img src={none} alt="" onClick={() => {goOut('')}} />
                    </div>
                    <div className={styles.middle}>
                        <img src={audiobook1} alt="" onClick={() => {goOut('https://audioclip.naver.com/audiobooks/B07205E56A')}} />
                    </div>
                    <div className={styles.side}>
                        <img src={audiobook3} alt="" onClick={() => {goOut('https://audioclip.naver.com/audiobooks/34CB7A1B43')}} />
                        <img src={none} alt="" onClick={() => {goOut('')}} />
                    </div>
                </div>
                <div className={styles.cards}>
                    <Cards first='Book' second='Author' third='Date' query={audiobook}></Cards>
                </div>
            </div>
        </div>
    )
}

export default Audiobooks