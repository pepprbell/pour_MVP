
import {
    Card, MiniCard } from '../../components'
import styles from './index.module.css'

import { DataStore } from '@aws-amplify/datastore'
import { Short, Ad, Dubbing, Audiobook, Foreign } from '../../models'
import { useEffect } from 'react'

import awsConfig from '../../aws-exports.js'
import { Amplify } from '@aws-amplify/core'
import { useState } from 'react'
Amplify.configure(awsConfig)


function SeeAll(props) {
    const state = props.location.state
    const [type, setType] = useState('all')

    useEffect(() => {
        if (state) {
            setType(state.type)
        }
        DataStore.query(Dubbing).then(res => {const dubbing = res})
        DataStore.query(Ad).then(res => {const ad = res})
        DataStore.query(Foreign).then(res => {const foreign = res})
        DataStore.query(Audiobook).then(res => {const audiobook = res})
        DataStore.query(Short).then(res => {const short = res})
    }, [])

    

    return (
        <div className={styles.rear}>
            <div className={styles.genre}></div>
            <div className={styles.content}>
                <div className={styles.category}>
                    <h1 className={styles.main}>분류1</h1>
                    <h1 className={styles.sub}>하위분류1</h1>
                    <div className={styles.cards}>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                    <h1 className={styles.sub}>하위분류2</h1>
                    <div className={styles.cards}>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.category}>
                    <h1 className={styles.main}>분류2</h1>
                    <div className={styles.cards}>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.category}>
                    <h1 className={styles.main}>분류3</h1>
                    <div className={styles.cards}>
                        <MiniCard></MiniCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeeAll