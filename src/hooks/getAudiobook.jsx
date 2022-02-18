import { useEffect, useState } from "react"
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { Audiobook } from '../models'

export default function GetAudiobook (pageNumber) {
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

        DataStore.query(Audiobook, Predicates.All, {
            sort: s => s.Date(SortDirection.DESCENDING),
            page: pageNumber,
            limit: 30
        }).then(res => {
            setBooks(prevBooks => {
                return [...new Set([...prevBooks, ...res.map(b => b)])]
            })
            setHasMore(res.length > 0)
            setLoading(false)
        }).catch(e => {
            setError(true)
        })
    }, [pageNumber])

    return { loading, error, books, hasMore }
}