import styles from './Navbar.module.css'
import logo from '../../assets/mvplogo.png'

function Navbar(props) {
  const goContact = () => {
    window.scrollTo({
      top: 999999,
      behavior: 'smooth',
    })
  }

  const goProfile = () => {
    window.scrollTo({
      top: 920,
      behavior: 'smooth',
    })
  }

  const goHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.navbar}>
    <div className={styles.max}>
    <div className={styles.navHome}>
      <img className={styles.logo} src={logo} alt="" onClick={() => window.location.href="/"}/>
    </div>
    <div className={styles.navMenu}>
      <p onClick={() => window.location.href="/"}>Profile</p>
      <p onClick={goContact}>???</p>
      <p onClick={() => window.location.href="/create"}>Create</p>
    </div>
    </div>
  </div>
  )
}

export default Navbar