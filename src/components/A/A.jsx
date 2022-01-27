import styles from './A.module.css'

function A(props) {
    const type = props.type
    const style = styles.menu
    if (type==="menu") {
        const style = styles.menu
    }
    if (type==="profile") {
        const style = styles.menu
    }

    return (
        <div>
            <h2 className={style} onClick={() => window.location.href=props.goTo} href={props.goOutside}>{props.value}</h2>
        </div>
    )
}

export default A