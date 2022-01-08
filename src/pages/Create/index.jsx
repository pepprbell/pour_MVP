import { useState } from 'react'
import styles from './index.module.css'
import {
  Input, Select, Button
} from '../../components'

function Create() {
  // 타입 옵션 지정
  const dubbing = ['TV 애니메이션', '극장 애니메이션', '특촬', '게임', '드라마 CD', '오디오드라마']
  const short = ['단역']
  const foreign = ['외화']
  const audiobook = ['오디오북']
  const ad = ['광고']

  // 폼 옵션 지정
  const dubbingF = ['배역 이름', '작품 이름']
  const shortF = ['배역 이름', '작품 이름']
  const foreignF = ['배역 이름', '작품 이름', '배우 이름']
  const audiobookF = ['책 이름', '작가']
  const adF = ['광고 이름']

  const [selOption, setSelOption] = useState(dubbing)
  const [typeIn, setTypeIn] = useState(dubbingF)

  function handleType(type) {
    if (type=="dubbing") {
      setSelOption(dubbing)
      setTypeIn(dubbingF)
    }
    if (type=="short") {
      setSelOption(short)
      setTypeIn(shortF)
    }
    if (type=="foreign") {
      setSelOption(foreign)
      setTypeIn(foreignF)
    }
    if (type=="audiobook") {
      setSelOption(audiobook)
      setTypeIn(audiobookF)
    }
    if (type=="ad") {
      setSelOption(ad)
      setTypeIn(adF)
    }
  }

  // 폼
  const createForm = []
  for (let i = 0; i < typeIn.length; i++) {
    createForm.push(
      <p>{typeIn[i]}<span> *</span></p>
    )
    createForm.push(
      <Input placeholder={typeIn[i]}></Input>
    )
    
  }

  return (
    <div className={styles.bg}>
      <div className={styles.rear}>
        <div className={styles.tab}>
          <input id="dubbing" type="radio" name="type"/>
          <label className={styles.tab_item} for="dubbing" onClick={() => {handleType('dubbing')}}>더빙</label>
          <input id="ad" type="radio" name="type"/>
          <label className={styles.tab_item} for="ad" onClick={() => {handleType('ad')}}>광고</label>
          <input id="foreign" type="radio" name="type"/>
          <label className={styles.tab_item} for="foreign" onClick={() => {handleType('foreign')}}>외화</label>
          <input id="audiobook" type="radio" name="type"/>
          <label className={styles.tab_item} for="audiobook" onClick={() => {handleType('audiobook')}}>오디오북</label>
          <input id="short" type="radio" name="type"/>
          <label className={styles.tab_item} for="short" onClick={() => {handleType('short')}}>단역</label>
        </div>
        <div className={styles.form}>
          <p>작품 유형<span> *</span></p>
          <Select option={selOption}></Select>
          {createForm}
        </div>
        <Button className={styles.button} text="데이터 저장"></Button>
      </div>
    </div>
  )
}

export default Create