import styles from './index.module.css'
import {
    Input
} from '../../components'

function Create() {
    return (
        <div>
            <div className={styles.rear}>
                <Input placeholder="character"></Input>
            </div>
        </div>
    )
}

export default Create