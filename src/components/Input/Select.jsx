import styles from './Select.module.css'

function Select(props) {
    const options = []
    let disabled = false
    for (let i = 0; i < props.option.length; i++) {
        options.push(<option value={props.value[i]}>{props.option[i]}</option>)
    }
    if (props.option.length === 1) {
        disabled = true
    }

    return(
        <select className={styles.select} name={props.name} id={props.id} disabled={disabled} onChange={props.selectHandler}>
            {options}
        </select>
    )
}

export default Select