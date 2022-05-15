import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { Tooltip } from '../'
import styles from './Navbar.module.css'

function Navbar(props) {
  const sub = props.sub

  return (
    <div className={classnames(styles.navbar, (props.dark ? styles.dark : styles.white))}>
      <div className={styles.content}>
        {sub.map((title, index) => {
          if (title[2]) {
            return <Link id={title[1]} key={index} className={styles.active} to={{hash: title[1]}}>{title[0]}</Link>
          } else {
            return <Tooltip id={title[1]} key={index} where='bottom' message='데이터 준비 중!'><p id={title[1]+'dis'} className={styles.disabled}>{title[0]}</p></Tooltip>
          }
        })}
      </div>
    </div>
  )
}

export default Navbar