import styles from './Card.module.css'
import classnames from 'classnames';

function Card(props) {
  const query = props.query
  const none = "https://user-images.githubusercontent.com/67995526/154494368-d2a4d6e1-dd45-42b0-8d0e-22e6719bc2d0.png"

  const movePage = (id) => {
    if (query.Link) {
      // window.open(props.query.Link, "_blank")
    } else {
      console.log('none')
    }
  }
  
  return (
    <div className={styles.card} style={{visibility:props.visible}} onClick={() => {movePage(query['id'])}} key={query['id']} ref={props.refs}>
    <figure><img className={styles.img} src={props.query ? props.query.Image : none} alt="" /></figure>
    <div className={styles.white}>
      <div>
        <h4 className={classnames(styles.first, styles.text)}>{query[props.first]}</h4>
        <p className={classnames(styles.second, styles.text)} href={props.href}>{query[props.second]}</p>
        <p className={classnames(styles.second, styles.text)}>{query[props.third]}</p>
      </div>
    </div>
  </div>
  )
}

export default Card