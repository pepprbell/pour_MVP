import styles from './Input.module.css'

function Input(props) {
    return(
        <input className={styles.input} type={props.type} placeholder={props.placeholder} onChange={props.inputHandler}/>
    )
}

export default Input