import styles from './Cards.module.css'
import { Card } from '../'

function Cards(props) {
    const cards = []
    for (let i = 0; i < props.query.length; i++) {
        cards.push(
            <Card first={props.query[i][props.first]} second={props.query[i][props.second]} third={props.query[i][props.third]} query={props.query[i]}></Card>
        )
    }
    if (cards.length%4) {
        for (let i = 0; i < cards.length%4; i++) {
            cards.push(
                <Card visible="hidden"></Card>
            )
        }
    }

    return (
        <div className={styles.cards}>
            {cards}
        </div>
    )
}

export default Cards