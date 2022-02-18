import React, { useState, useEffect } from "react"
import styles from './index.module.css'
import {
    Profile, CardCarousel
} from '../../components'

function Home(props) {
    const [current, setCurrent] = useState(0)
    const [last, setLast] = useState(0)

    const goTo = () => {
      window.location.pathname = '/ad'
    }
  
    const getLast = () => {
      if (window.innerWidth >= 1318) {
        setLast(-436 * 1)
        return
      }
      if (window.innerWidth >= 870) {
        setLast(-436 * 2)
        return
      }
      if (window.innerWidth < 436) {
        setLast(-436 * 3)
      }
    }
  
    useEffect(() => {
      getLast()
    }, [])
  
    const left = () => {
      setCurrent(current+436)
    }
  
    const right = () => {
      setCurrent(current-436)
    }

    return (
        <div className={styles.container}>
          <Profile></Profile>
          <div className={styles.gap}></div>
          <CardCarousel></CardCarousel>
        </div>
    )
}

export default Home