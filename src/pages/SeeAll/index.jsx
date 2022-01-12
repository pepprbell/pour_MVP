
import Card from '../../components/Card/Card'
import styles from './index.module.css'

import { DataStore } from '@aws-amplify/datastore'
import { Short } from '../../models'
import { useEffect } from 'react'

import awsConfig from '../../aws-exports.js'
import { Amplify } from '@aws-amplify/core'
Amplify.configure(awsConfig)


function SeeAll() {

    useEffect(() => {
        DataStore.query(Short).then(res => console.log(res))
    }, [])

    return (
        <div className={styles.rear}>
            <div className={styles.genre}></div>
            <div className={styles.content}>
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
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}

export default SeeAll