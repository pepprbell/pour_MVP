import styles from './Card.module.css'
import exarch from '../../assets/exarch.jpg'

function Card(props) {
    return (
        <div className={styles.card}>
        <img src={exarch} alt="" />
        <div className={styles.hoverInfo}>
          <div>
            <h4>{props.character}</h4>
            <a href={props.href}>{props.content}</a>
          </div>
        </div>
      </div>
    )
}

export default Card