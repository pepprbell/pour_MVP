import { useEffect, useState } from "react"
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { Ad } from '../models'

export default function GetAd (howMuch, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [ads, setAds] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setAds([])
    }, [])

    useEffect(() => {
        setLoading(true)
        setError(false)

        DataStore.query(Ad, Predicates.All, {
            sort: s => s.Date(SortDirection.DESCENDING),
            page: pageNumber,
            limit: howMuch
        }).then(res => {
            setAds(prevAds => {
                return [...new Set([...prevAds, ...res.map(b => b)])]
            })
            setHasMore(res.length > 0)
            setLoading(false)
        }).catch(e => {
            setError(true)
        })
    }, [pageNumber])

    return { loading, error, ads, hasMore }
}