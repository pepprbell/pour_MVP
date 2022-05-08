import parse from 'html-react-parser'
import { useState } from 'react'
import styles from './Modal.module.css'
import classnames from 'classnames'

function Modal(props) {
    return(
        <div className={styles.container}>
            <div className={styles.bg}></div>
            <div className={styles.modal}></div>
        </div>
    )
}

export default Modal