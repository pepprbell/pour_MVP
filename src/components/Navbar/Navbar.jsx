import styles from './Navbar.module.css'
import classnames from 'classnames'

function Navbar(props) {
  const goTo = (id) => {
    window.location.href = window.location.href + '/' + id
  }

  const sub = []
  for (let i = 0; i < props.subKr.length; i++) {
    sub.push(
      <p onClick={() => goTo(props.subEn[i])}>{props.subKr[i]}</p>
    )
  }

  return (
    <div className={classnames(styles.navbar, (props.dark ? styles.dark : styles.white))}>
      <div className={styles.content}>
        {sub}
      </div>
    </div>
  )
}

export default Navbar