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
    } = GetAudiobook(pageNumber)

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

    function handleData(e) {
        setPageNumber(0)
    }

    
    const goOut = (url) => {
        window.open(url, "_blank")
    }


    return (
        <div className={styles.container}>
            {/* <Navbar subKr={subKr} subEn={subEn}></Navbar> */}
            <div className={styles.content}>
                <BookBanner></BookBanner>
                    {/* <button onClick={handleData}></button> */}
                <div className={styles.cards}>
                    {books.map((book,index) => {
                        if (books.length === index+1) {
                            return <Card refs={lastBookElementRef} query={book} first='Book' second='Author' third='Date'></Card>
                        } else {
                            return <Card query={book} first='Book' second='Author' third='Date'></Card>
                        }
                    })}
                    <div>{loading && 'Loading...'}</div>
                    <div>{error && 'Error'}</div>
                    {/* <Cards first='Book' second='Author' third='Date' query={audiobook}></Cards> */}
                </div>
            </div>
        </div>
    )
}

export default Audiobooks