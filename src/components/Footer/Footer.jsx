import styles from './Footer.module.css'

function Footer(props) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {/* <div className={styles.fCard}>
                    <p>for us.</p>
                </div>
                <div className={styles.fCard}>
                </div> */}
                <div className={styles.fCard}>          
                    <p>Contact: pepprbell@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer