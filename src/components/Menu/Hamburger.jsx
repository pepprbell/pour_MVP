import { useState } from 'react'
import styles from './Hamburger.module.css'
import classnames from 'classnames'

function Hamburger(props) {
    const [toggle, setToggle] = useState(false)
    const changeShape = (e) => {
        if (toggle) {
            setToggle(false)
            console.log('off')
        } else {
            setToggle(true)
        }
    }

    return(
    <div className={styles.container} onClick={props.onclick}>
        <input className={styles.checkbox} onChange={changeShape} type="checkbox" />
        <div>
            <div className={classnames(styles.b, (toggle ? styles.bcheck : styles.b))}></div>
            <div className={classnames(styles.c, (toggle ? styles.ccheck : styles.c))}></div>
        </div>
    </div>
    )
}

export default Hamburger