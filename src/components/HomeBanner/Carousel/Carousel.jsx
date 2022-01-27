import styles from './Carousel.module.css'
import YouTube from 'react-youtube';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import classnames from 'classnames';
import none from '../../../assets/none.png'
import cola from '../../../assets/cocacola.jpg'
import bbq from '../../../assets/bbq.jpg'
import mc from '../../../assets/mc.jpg'
import guma from '../../../assets/guma.jpg'
import shangchi from '../../../assets/shangchi.jpg'
import zenos from '../../../assets/zenos.jpg'
import Carousels from 'react-bootstrap/Carousel'
import { useEffect, useRef, useState } from 'react';

function Carousel(params) {
  const [interval, setInterval] = useState(null)
  const [youtubeOn, setYoutubeOn] = useState(false)

  const imgUrl = 'http://i.ytimg.com/vi/'
  const original = '/original.jpg'

  const adId = ['dyw2TA1YlxM','Chgi1gCyLko','MYbfOPIRtkc']
  const dubId = ['wNVuxwHylhc','YPsGch6p3Uw','E_UGkPagwZc']
  const adTime = [0,0,0]
  const dubTime = [0,11,0]
  // const adImg = [imgUrl+adId[0]+original,imgUrl+adId[1]+original,imgUrl+adId[2]+original]
  // const dubImg = [imgUrl+dubId[0]+original,imgUrl+dubId[1]+original,imgUrl+dubId[2]+original]
  const adImg = [cola,bbq,mc]
  const dubImg = [shangchi, zenos, guma]
  const adUrl = [adId[0]+'/?t='+adTime[0],adId[1]+'/?t='+adTime[1],adId[2]+'/?t='+adTime[2]]
  const dubUrl = [dubId[0]+'/?t='+dubTime[0],dubId[1]+'/?t='+adTime[1],dubId[2]+'/?t='+dubTime[2]]
  const adName = ['코카-콜라 2022년 리얼매직 - 30"','BBQ 김연경의 가을편 - 35"','맥도날드 1955 스모키 더블 베이컨 - 6"']
  const dubName = ['샹치와 텐 링즈의 전설 - 샹치','원펀맨 - 제노스','쿠키런 킹덤 - 자색고구마맛 쿠키']

  const [videoId, setVideoId] = useState(adUrl)
  const [thumb, setThumb] = useState(adImg)
  const [name, setName] = useState(adName)

  useEffect(() => {
    if (params.content === 'etc') {
      setVideoId(dubUrl)
      setThumb(dubImg)
      setName(dubName)
    }
  }, [])

  // ref
  const vid0 = useRef(null)
  const vid1 = useRef(null)
  const vid2 = useRef(null)

  // data

  const opts = {
    playerVars: {
      rel: 0,
      listType: 'playlist',
    }
  }

  // play youtube
  function clickImage() {
    setYoutubeOn(true)
  }

  // stop youtube
  function handleSlide() {
    setYoutubeOn(false)
    stopYoutube()
  }

  function stopYoutube() {
    vid0.current.internalPlayer.pauseVideo()
    vid1.current.internalPlayer.pauseVideo()
    vid2.current.internalPlayer.pauseVideo()
  }

  return (
    <div className={styles.container}>
      <Carousels interval={interval} className={styles.carousel} onSlide={handleSlide}>
        <Carousels.Item className={styles.item} >
          <div className={youtubeOn ? styles.on : styles.off}>
            <YouTube className={styles.youtube} videoId={videoId[0]} opts={opts} ref={vid0}></YouTube>
          </div>
          <img className="d-block w-100" src={thumb[0]} alt="First slide" onClick={clickImage}/>
          <Carousels.Caption className={styles.caption}>
            <h5>{name[0]}</h5>
          </Carousels.Caption>
        </Carousels.Item>
        <Carousels.Item className={styles.item}>
          <div className={youtubeOn ? styles.on : styles.off}>
            <YouTube className={styles.youtube} videoId={videoId[1]} opts={opts} ref={vid1}></YouTube>
          </div>
          <img className="d-block w-100" src={thumb[1]} alt="Second slide" onClick={clickImage}/>
          <Carousels.Caption className={styles.caption}>
            <h5>{name[1]}</h5>
          </Carousels.Caption>
        </Carousels.Item>
        <Carousels.Item className={styles.item}>
          <div className={youtubeOn ? styles.on : styles.off}>
            <YouTube className={styles.youtube} videoId={videoId[2]} opts={opts} ref={vid2}></YouTube>
          </div>
          <img className="d-block w-100" src={thumb[2]} alt="Second slide" onClick={clickImage}/>
          <Carousels.Caption className={styles.caption}>
            <h5>{name[2]}</h5>
          </Carousels.Caption>
        </Carousels.Item>
        </Carousels>
    </div>
  )
}

export default Carousel