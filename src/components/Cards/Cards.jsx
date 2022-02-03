import styles from './Cards.module.css'
import { Card } from '../'

function Cards(props) {
    const cards = []
    if (props.type === '') {
        for (let i = 0; i < props.query.length; i++) {
            // console.log(props.query[i])
            cards.push(
                <Card first={props.query[i][props.first]} second={props.query[i][props.second]} third={props.query[i][props.third]}></Card>
            )
        }
    } else {
        const type = props.type
        for (let i = 0; i < props.query.length; i++) {
            if (props.query[i]['Type'] === type) {
                cards.push(
                    <Card first={props.query[i][props.first]} second={props.query[i][props.second]} third={props.query[i][props.third]}></Card>
                )
            }
        }
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