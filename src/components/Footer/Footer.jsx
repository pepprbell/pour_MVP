import styles from './Footer.module.css'

function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.fCard}>
                    {/* <p>for us.</p> */}
                </div>
                <div className={styles.fCard}>
                </div>
                <div className={styles.fCard}>          
                    <p className={styles.right}>Contact : pepprbell@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer