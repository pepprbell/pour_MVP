import styles from './Card.module.css'
import exarch from '../../assets/exarch.jpg'

function Card(props) {
    return (
        <span className={styles.card}>
        <img src={exarch} alt="" />
        <div className={styles.hoverInfo}>
          <div>
            <h4>수정공</h4>
            <p href="https://www.ff14.co.kr">Final Fantasy XIV &nbsp;&nbsp;<i class="fas fa-desktop"></i></p>
          </div>
        </div>
      </span>
    )
}

export default Card