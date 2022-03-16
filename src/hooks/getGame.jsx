import { useEffect, useState } from "react"
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { Dubbing } from '../models'

export default function GetGame (howMuch, pageNumber) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [games, setGames] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setGames([])
    }, [])

    useEffect(() => {
        setLoading(true)
        setError(false)

        DataStore.query(Dubbing, c => c.Type('eq', 'game'), {
            page: pageNumber,
            limit: howMuch
        }).then(res => {
            setGames(prevGames => {
                return [...new Set([...prevGames, ...res.map(b => b)])]
            })
            setHasMore(res.length > 0)
            setLoading(false)
        }).catch(e => {
            setError(true)
        })
    }, [pageNumber])

    return { loading, error, games, hasMore }
}