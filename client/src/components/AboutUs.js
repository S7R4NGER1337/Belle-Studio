import styles from './aboutUs.module.css'

export default function AboutUs() {
    return <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsInfo}>
            <h1 className={styles.heading}>About Belle Studio</h1>
            <p className={styles.paragraph}>Founded with a passion for enhancing natural beauty, Belle Studio has been a sanctuary of elegance and wellness for over a decade. Our expert team combines artistry with the latest techniques to deliver exceptional results.</p>
            <p className={styles.paragraph}>We believe that true beauty comes from within, and our treatments are designed not just to enhance your appearance, but to nurture your well-being and confidence.</p>
            <div className={styles.additionalData}>
                <div className={styles.additionalDataCard}>
                    <h1 className={styles.additionalDataH1}>500+</h1>
                    <p className={styles.additionalDataP}>Happy Clients</p>
                </div>
                <div className={styles.additionalDataCard}>
                    <h1 className={styles.additionalDataH1}>10+</h1>
                    <p className={styles.additionalDataP}>Years Experience</p>
                </div>
                <div className={styles.additionalDataCard}>
                    <h1 className={styles.additionalDataH1}>15+</h1>
                    <p className={styles.additionalDataP}>Premium Services</p>
                </div>
                <div className={styles.additionalDataCard}>
                    <h1 className={styles.additionalDataH1}>98%</h1>
                    <p className={styles.additionalDataP}>Satisfaction Rate</p>
                </div>
            </div>
        </div>
        <img src="/aboutus.png" alt="ourStudio" className={styles.aboutUsImage}/>
    </div>
}