import styles from './nav.module.css'

export default function Nav() {
    return <div className={styles.navContainer}>
        <h1 className={styles.navHeading}>Belle Studio</h1>
        <div className={styles.navLinksContainer}>
            <p className={styles.navLink}>Home</p>
            <p className={styles.navLink}>Services</p>
            <p className={styles.navLink}>About</p>
            <p className={styles.navLink}>Contact</p>
        </div>
        <button className={styles.navButton}>Book Now</button>
    </div>
}