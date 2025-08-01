import styles from './nav.module.css'

export default function Nav({aboutUsRef, contactRef, servicesRef, homeRef}) {
    
    return <div className={styles.navContainer}>
        <h1 className={styles.navHeading} onClick={() =>  homeRef()}>Belle Studio</h1>
        <div className={styles.navLinksContainer}>
            <p className={styles.navLink} onClick={() =>  homeRef()}>Home</p>
            <p className={styles.navLink} onClick={() =>  servicesRef()}>Services</p>
            <p className={styles.navLink} onClick={() =>  aboutUsRef()}>About</p>
            <p className={styles.navLink} onClick={() =>  contactRef()}>Contact</p>
        </div>
        <button className={styles.navButton} onClick={() =>  contactRef()}>Book Now</button>
    </div>
}