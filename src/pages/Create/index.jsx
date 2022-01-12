import { useEffect, useState } from 'react'
import styles from './index.module.css'
import {
  Input, Select, Button
} from '../../components'
import awsConfig from '../../aws-exports.js'
import { Amplify } from '@aws-amplify/core'

import { DataStore } from '@aws-amplify/datastore'
import { Short, Ad, Audiobook, Dubbing, Foreign } from '../../models'

Amplify.configure(awsConfig)

function Create() {

  // 타입 옵션 지정

  const dubbing = [['TV 애니메이션', '극장 애니메이션', '특촬', '게임', '드라마 CD', '오디오드라마'],['배역 이름', '작품 이름'],['Character', 'Content'],['tv','theater','kamen','game','dramacd','audiodrama']]
  const short = [['단역'],['배역 이름', '작품 이름'],['Character', 'Content'],['short']]
  const foreign = [['외화'],['배역 이름', '작품 이름', '배우 이름'],['Character', 'Content', 'Actor'],['foreign']]
  const audiobook = [['오디오북'],['책 이름', '작가'],['Book', 'Author'],['audiobook']]
  const ad = [['광고'],['광고 이름'],['Ad'],['ad']]

  const [selected, setSelected] = useState(dubbing)

  function handleType(type) {
    if (type==="dubbing") {
      setSelected(dubbing)
    }
    if (type==="short") {
      setSelected(short)
    }
    if (type==="foreign") {
      setSelected(foreign)
    }
    if (type==="audiobook") {
      setSelected(audiobook)
    }
    if (type==="ad") {
      setSelected(ad)
    }
  }

  useEffect(() => {
    handleType('dubbing')
  }, [])

  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [type, setType] = useState('tv')

  function handleInput(num,e) {
    if (num===0) {
      setInput1(e.target.value)
    }
    if (num===1) {
      setInput2(e.target.value)
    }
    if (num===2) {
      setInput3(e.target.value)
    }
  }

  // Input 폼
  const createForm = []
  for (let i = 0; i < selected[1].length; i++) {
    createForm.push(
      <p>{selected[1][i]}<span> *</span></p>
    )
    createForm.push(
      <Input placeholder={selected[1][i]} id={String(i)} inputHandler={(e) => handleInput(i,e)}></Input>
    )
  }

  function submit() {
    if (selected[3][0]==='tv') {
      const saveForm = {
        "Character": input1,
        "Content": input2,
        "Type": type,
      }
      console.log(saveForm)
      DataStore.save(
        new Dubbing(saveForm)
      )
    }
    if (selected[3][0]==='ad') {
      const saveForm = {
        "Ad": input1,
      }
      console.log(saveForm)
      DataStore.save(
        new Ad(saveForm)
      )
    }
    if (selected[3][0]==='foreign') {
      const saveForm = {
        "Character": input1,
        "Content": input2,
        "Actor": input3,
      }
      console.log(saveForm)
      DataStore.save(
        new Foreign(saveForm)
      )
    }
    if (selected[3][0]==='audiobook') {
      const saveForm = {
        "Author": input1,
        "Book": input2,
      }
      console.log(saveForm)
      DataStore.save(
        new Audiobook(saveForm)
      )
    }
    if (selected[3][0]==='short') {
      const saveForm = {
        "Character": input1,
        "Content": input2,
      }
      console.log(saveForm)
      DataStore.save(
        new Short(saveForm)
      )
    }
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
          <Select option={selected[0]} value={selected[3]} selectHandler={e => setType(e.target.value)}></Select>
          {createForm}
        </div>
        <Button className={styles.button} text="데이터 저장" clickHandler={submit}></Button>
      </div>
    </div>
  )
}

export default Create