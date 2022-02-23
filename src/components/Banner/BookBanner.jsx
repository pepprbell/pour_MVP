import styles from './BookBanner.module.css'

function BookBanner () {
    // const none = "https://user-images.githubusercontent.com/67995526/154494368-d2a4d6e1-dd45-42b0-8d0e-22e6719bc2d0.png"
    const src = ['155146422-4864e9ba-e49d-4fc7-b963-f434bb0535e8.png','155146433-a2a7ba52-2f3d-46ec-b612-c15ad1e02ea3.png',
                 '155146439-0499de37-7ad8-4937-871e-36ed572d28bf.png','155146446-3c6408e6-9f5e-4344-acbd-9d3adf3ddb9c.png',
                 '155147474-02805818-9360-48ad-ac5f-c20be57cdd8e.png']
    const header = 'https://user-images.githubusercontent.com/67995526/'
    
    const goOut = (url) => {
        window.open(url, "_blank")
    }

    return (
        <div>
            <div className={styles.banner}>
                <div className={styles.side}>
                    <img src={header+src[2]} alt="" onClick={() => {goOut('https://audioclip.naver.com/audiobooks/34CB7A1B43')}} />
                    <img src={header+src[4]} alt="" onClick={() => {goOut('https://audioclip.naver.com/audiobooks/B36667044C')}} />
                </div>
                <div className={styles.middle}>
                    <img src={header+src[0]} alt="" onClick={() => {goOut('https://audioclip.naver.com/audiobooks/B07205E56A')}} />
                </div>
                <div className={styles.side}>
                    <img src={header+src[1]} alt="" onClick={() => {goOut('https://audioclip.naver.com/audiobooks/C7F76AAC59')}} />
                    <img src={header+src[3]} alt="" onClick={() => {goOut('https://audioclip.naver.com/audiobooks/97F19D3F03')}} />
                </div>
            </div>
        </div>
    )
}

export default BookBanner