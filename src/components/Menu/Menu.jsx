import styles from './Menu.module.css'

function Menu() {
    return (
        <div>
        <div className={styles.max}>
        <div className={styles.navMenu}>
          <p onClick={() => window.location.href="/"}>Profile</p>
          <p onClick={() => window.location.href="/create"}>Create</p>
        </div>
        </div>
        </div>
    )
}

export default Menu