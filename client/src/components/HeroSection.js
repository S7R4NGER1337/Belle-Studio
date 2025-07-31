import styles from './heroSection.module.css'

export default function HeroSection() {
    return <div className={styles.heroSectionBackground}>
        <div className={styles.heroSectionContainer}>
        <div className={styles.heroHeading}>
            <h1 className={styles.importantHeading}>Radiate</h1>
            <h1>Your Natural</h1>
            <h1>Beauty</h1>
        </div>
        <p className={styles.heroParagraph}>Experience luxury beauty treatments in our serene studio. From rejuvenating facials to expert nail care, we enhance your natural glow with personalized attention.</p>
        <div className={styles.heroButtons}>
            <button className={styles.bookAppointment}>Book Appointment</button>
            <button className={styles.viewServices}>View Services</button>
        </div>
        </div>
    </div>
}