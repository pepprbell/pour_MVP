import styles from './MiniCard.module.css'

function MiniCard(props) {
    const none = "https://user-images.githubusercontent.com/67995526/154494368-d2a4d6e1-dd45-42b0-8d0e-22e6719bc2d0.png"

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