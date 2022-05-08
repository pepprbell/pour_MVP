import { useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import {
  Select, Button
} from '../../components'

import { Amplify } from '@aws-amplify/core'
import { DataStore } from '@aws-amplify/datastore'
import { Dubbing, Audiobook, Ad } from '../../models'

function Create() {

  // 타입 옵션 지정
  const option = ['더빙', '광고', '오디오북']
  const optionEn = ['dubbing', 'ad', 'audiobook']
  const [form, setForm] = useState([])
  const [genre, setGenre] = useState('dubbing')

  const input1 = useRef()
  const input2 = useRef()
  const input3 = useRef()
  const input4 = useRef()
  const input5 = useRef()
  // const [data,setData] = useState({
  //   'Character': '',
  //   'Content': '',
  //   'Image': '',
  //   'Ad': '',
  //   'Link': '',
  //   'Date': '',
  //   'Book': '',
  //   'Author': '',
  // })

  const dubbing = [['배역 이름','Character','',input1], ['작품 이름','Content','',input2],['이미지 링크','Image','',input3]]
  const ad = [['광고 이름','Ad','',input1],['광고 영상 링크','Link','',input2],['날짜','Date','date',input3]]
  const audiobook = [['책 이름','Book','',input1],['작가','Author','',input2],['이미지 링크', 'Image', '',input3],['오디오북 링크', 'Link', '',input4],['날짜','Date','date',input5]]

  const handleType = (type) => {
    setGenre(type)
    if (type==="dubbing") {
      forms(dubbing)
    }
    if (type==="ad") {
      forms(ad)
    }
    if (type==="audiobook") {
      forms(audiobook)
    }
  }

  useEffect(() => {
    handleType('dubbing')
  }, [])

  const forms = (selected) => {
    setForm([])
    for (let i = 0; i < selected.length; i++) {
      setForm(prevForm => [...prevForm, <p key={i}>{selected[i][0]}<span> *</span></p>])
      setForm(prevForm => [...prevForm, <input className={styles.input} key={'s'+i} type={selected[i][2]} placeholder={selected[i][0]} name={selected[i][1]} ref={selected[i][3]}></input>])
    }
  }


  const submit = () => {
    if (genre === 'dubbing') {
      const saveForm = {
        [input1.current.name]: input1.current.value,
        [input2.current.name]: input2.current.value,
        [input3.current.name]: input3.current.value,
        'Type': 'game'
      }
      DataStore.save(new Dubbing(saveForm)).catch(err => {console.log(err);alert('양식에 맞지 않습니다!')})
    }
    if (genre === 'ad') {
      const saveForm = {
        [input1.current.name]: input1.current.value,
        [input2.current.name]: input2.current.value,
        [input3.current.name]: input3.current.value,
      }
      DataStore.save(new Ad(saveForm)).catch(err => {console.log(err);alert('양식에 맞지 않습니다!')})
    }
    if (genre === 'audiobook') {
      const saveForm = {
        [input1.current.name]: input1.current.value,
        [input2.current.name]: input2.current.value,
        [input3.current.name]: input3.current.value,
        [input4.current.name]: input4.current.value,
        [input5.current.name]: input5.current.value,
      }
      DataStore.save(new Audiobook(saveForm)).catch(err => {console.log(err);alert('양식에 맞지 않습니다!')})
    }
  }

  return (
    <div className={styles.bg}>
      <div className={styles.rear}>
        <div className={styles.form}>
          <p>작품 유형<span> *</span></p>
          <Select option={option} value={optionEn} selectHandler={e => handleType(e.target.value)}></Select>
          {form.map((item) => {
            return item
          })}
        </div>
        <Button className={styles.button} text="입력!" clickHandler={submit}></Button>
      </div>
    </div>
  )
}

export default Create