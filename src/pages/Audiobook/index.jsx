import { useState, useRef, useCallback } from 'react'
import styles from './index.module.css'
import {
    Card, BookBanner
} from '../../components'
import GetAudiobook from '../../hooks/getAudiobook'

function Audiobooks () {
    const [pageNumber, setPageNumber] = useState(0)

    const {
        books,
        hasMore,
        loading,
        error
    } = GetAudiobook(30, pageNumber)

    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <div className={styles.container}>
            {/* <Navbar subKr={subKr} subEn={subEn}></Navbar> */}
            <div className={styles.banner}>
                <div className={styles.content}>
                    <BookBanner></BookBanner>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.cards}>
                    {books.map((book,index) => {
                        if (books.length === index+1) {
                            return <Card refs={lastBookElementRef} key={index} query={book} first='Book' second='Author' third='Date'></Card>
                        } else {
                            return <Card query={book} key={index} first='Book' second='Author' third='Date'></Card>
                        }
                    })}
                </div>
                <div>{loading && 'Loading...'}</div>
                <div>{error && 'Error'}</div>
            </div>
        </div>
    )
}

export default Audiobooks