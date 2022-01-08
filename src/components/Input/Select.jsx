import styles from './Select.module.css'

function Select(props) {
    const options = []
    let disabled = false
    for (let i = 0; i < props.option.length; i++) {
        options.push(<option value={props.option[i]}>{props.option[i]}</option>)
    }
    if (props.option.length === 1) {
        disabled = true
    }

    return(
        <select name={props.name} id={props.id} disabled={disabled}>
            {options}
        </select>
    )
}

export default Select