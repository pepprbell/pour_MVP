import { useEffect, useState } from "react"
import { Storage } from '@aws-amplify/storage'

export default function GetSample () {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setBooks([])
    }, [])

    useEffect(() => {
        setLoading(true)
        setError(false)

        // Storage.get("voice/에마.wav", {
        //     level: "public"
        // }).then(res => {
        //     setBooks(res => {
        //         return [res]
        //     })
        // })
        // Storage.get("voice/자구마.wav", {
        //   level: "public"
        // }).then(res => {
        //     books.push(res)
        // })
        // Storage.get("voice/제네시스.wav", {
        //   level: "public"
        // }).then(res => {
        //     books.push(res)
        // })
    }, [])

    return books
}