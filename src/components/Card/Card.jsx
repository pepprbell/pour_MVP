import styles from './Card.module.css'
import exarch from '../../assets/exarch.jpg'

function Card(props) {
    return (
        <span className={styles.card}>
        <img src={exarch} alt="" />
        <div className={styles.hoverInfo}>
          <div className={styles.cardDesc} data-bs-toggle="modal" data-bs-target="#exampleModal">
            <h4>수정공</h4>
            <p>Final Fantasy XIV <i class="fas fa-desktop"></i></p>
            <p>SQUARE ENIX</p>
          </div>
          <a className={styles.link} href="https://www.ff14.co.kr" target='_blank'>
              <i class="fas fa-external-link-alt" title="공식 홈페이지"></i>
          </a>
        </div>
      </span>
    )
}

export default Card