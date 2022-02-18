import styles from './BookBanner.module.css'
import audiobook1 from '../../assets/audiobook1.png'
import audiobook2 from '../../assets/audiobook2.png'
import audiobook3 from '../../assets/audiobook3.png'

function BookBanner () {
    const none = "https://user-images.githubusercontent.com/67995526/154494368-d2a4d6e1-dd45-42b0-8d0e-22e6719bc2d0.png"
    
    const goOut = (url) => {
        window.open(url, "_blank")
    }

    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.side}>
                    <img src={audiobook2} alt="" onClick={() => {goOut('https://audioclip.naver.com/audiobooks/C7F76AAC59')}} />
                    <img src={none} alt="" onClick={() => {goOut('')}} />
                </div>
                <div className={styles.middle}>
                    <img src={audiobook1} alt="" onClick={() => {goOut('https://audioclip.naver.com/audiobooks/B07205E56A')}} />
                </div>
                <div className={styles.side}>
                    <img src={audiobook3} alt="" onClick={() => {goOut('https://audioclip.naver.com/audiobooks/34CB7A1B43')}} />
                    <img src={none} alt="" onClick={() => {goOut('')}} />
                </div>
            </div>
        </div>
    )
}

export default BookBanner