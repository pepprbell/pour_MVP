import styles from './Profile.module.css'

function Profile(props) {
    return (
        <div>
            <div className={styles.profile}>
                <div className={styles.left}>
                <h1>이름</h1>
                <div className={styles.line}></div>
                <div>
                    <a className={styles.lov} href="https://lordofvoice.com/seungwoo" target='_blank'>로드오브보이스</a>
                    <a className={styles.insta} href="https://www.instagram.com/minswoosh/" target='_blank'>인스타그램</a>
                    <a className={styles.naver} href="https://cafe.naver.com/mvp1103" target='_blank'>네이버 카페</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Profile