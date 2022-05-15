import { useState, useRef, useCallback } from 'react'
import styles from './index.module.css'
import {
    Card, Navbar
} from '../../../components'
import GetGame from '../../../hooks/getGame'

function Game () {
  const [pageNumber, setPageNumber] = useState(0)

  const {
    games,
    hasMore,
    loading,
    error
  } = GetGame(30, pageNumber)

  const observer = useRef()
  const lastGameElementRef = useCallback(node => {
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
      <div className={styles.content}>
        <div className={styles.cards}>
          {games.map((game,index) => {
            if (games.length === index+1) {
              return <Card refs={lastGameElementRef} key={index} query={game} first='Character' second='Content'></Card>
            } else {
              return <Card query={game} key={index} first='Character' second='Content'></Card>
            }
          })}
        </div>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </div>
    </div>
  )
}

export default Game