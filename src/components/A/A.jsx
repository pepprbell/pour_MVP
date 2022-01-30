import { useEffect, useState } from 'react'
import styles from './A.module.css'

function A(props) {
    const [type,setType] = useState()
    const [style,setStyle] = useState(styles.mobile)

    useEffect(() => {
        if (props.type==="mobile") {
            setStyle(styles.mobile)
        }
        if (props.type==="web") {
            setStyle(styles.web)
        }
    }, [])


    return (
        <div>
            <h2 className={style} onClick={() => window.location.href=props.goTo} href={props.goOutside}>{props.value}</h2>
        </div>
    )
}

export default A