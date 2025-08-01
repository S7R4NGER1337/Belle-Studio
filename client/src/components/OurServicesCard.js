import styles from './ourServiceCard.module.css'

export default function OurServicesCard({serviceData}) {
    return(
        <div className={styles.ourServiceCardContainer}>
            <h1 className={styles.serviceType}>{serviceData.type}</h1>
            <p className={styles.serviceData}>{serviceData.time} min • From ${serviceData.price}</p>
            <p className={styles.serviceDescription}>{serviceData.description}</p>
            <button className={styles.serviceButton}>Learn More</button>
        </div>
    )
}