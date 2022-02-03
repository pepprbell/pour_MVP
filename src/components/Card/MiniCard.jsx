import styles from './MiniCard.module.css'
import none from '../../assets/none.png'

function MiniCard(props) {
    return (
        <div className={styles.minicard}>
            <img className={styles.pic} src={none}></img>
            <div className={styles.white}>
                <div className={styles.textarea}>
                <h4 className={styles.h4} href={props.href}>{props.first}</h4>
                <p className={styles.a}>{props.second}</p>
                </div>
            </div>
        </div>
    )
}

export default MiniCard