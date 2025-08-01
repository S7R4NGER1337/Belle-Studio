import styles from './ourServices.module.css'

export default function OurServices() {
    return(
        <div className={styles.ourServicesContainer}>
            <h1 className={styles.ourServicesHeading}>Our Services</h1>
            <p className={styles.ourServicesParagraph}>Discover our comprehensive range of beauty treatments designed to pamper and revitalize</p>
            <div className={styles.servicesCardsContainer}>

            </div>
        </div>
    )
}