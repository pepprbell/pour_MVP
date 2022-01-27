import styles from './MiniCards.module.css'
import { MiniCard } from '../'

function MiniCards(props) {
    const cards = []
    for (let i = 0; i < props.query.length; i++) {
        // console.log(props.query[i])
        cards.push(
            <MiniCard first={props.query[i][props.first]} second={props.query[i][props.second]}></MiniCard>
        )
    }

    return (
        <div className={styles.cards}>
            {cards}
        </div>
    )
}

export default MiniCards