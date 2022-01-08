import styles from './Navbar.module.css'
import logo from '../../assets/mvplogo.png'

function Navbar(props) {
  return (
    <div className={styles.navbar}>
    <div className={styles.max}>
    <div className={styles.navHome}>
      <img className={styles.logo} src={logo} alt="" onClick={() => window.location.href="/"}/>
    </div>
    <div className={styles.navMenu}>
      <p onClick={() => window.location.href="/"}>Profile</p>
      <p onClick={() => window.location.href="/create"}>Create</p>
    </div>
    </div>
  </div>
  )
}

export default Navbar