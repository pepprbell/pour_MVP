import styles from './MiniCard.module.css'
import none from '../../assets/none.png'

function MiniCard(props) {
    return (
        <div className={styles.minicard}>
            <img className={styles.pic} src={none}></img>
            <div className={styles.white}>
                <div>
                <h4 className={styles.allH4}>캐릭터{props.character}</h4>
                <a className={styles.allA}>작품{props.content}</a>
                </div>
            </div>
        </div>
    )
}

export default MiniCard