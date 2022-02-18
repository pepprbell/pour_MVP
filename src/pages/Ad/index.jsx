import styles from './index.module.css'
import {
    Navbar, Carousel, CardCarousel
} from '../../components'

function Ads () {
  const subKr = ['#해시태그1','#해시태그2','#해시태그3']
  const subEn = ['hashtag1','hashtag2','hashtag3']

  return(
    <div className={styles.container}>
      <Navbar subKr={subKr} subEn={subEn} dark='dark'></Navbar>
      <div className={styles.banner}>
        <Carousel></Carousel>
      </div>
      <div className={styles.content}>
        <CardCarousel></CardCarousel>
      </div>
    </div>
  )
}

export default Ads