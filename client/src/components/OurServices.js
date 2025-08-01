import styles from './ourServices.module.css'
import OurServicesCard from './OurServicesCard'

export default function OurServices() {

    const services = [
        {
            type: 'Signature Facials',
            price: 120,
            time: 60,
            description: 'Customized facial treatments using premium skincare products to rejuvenate and refresh your complexion.'
        },
        {
            type: 'Relaxing Massage',
            price: 150,
            time: 90,
            description: 'Therapeutic massage therapy to release tension and promote deep relaxation for body and mind.'
        },
        {
            type: 'Professional Manicure',
            price: 45,
            time: 45,
            description: 'Complete nail care service including shaping, cuticle care, and premium polish application.'
        },
        {
            type: 'Luxe Pedicure',
            price: 65,
            time: 60,
            description: 'Indulgent foot treatment with exfoliation, massage, and beautiful nail art in our spa chairs.'
        },
        {
            type: 'Eyebrow Shaping',
            price: 35,
            time: 30,
            description: 'Expert eyebrow design and shaping to frame your face perfectly with precision and care.'
        },
        {
            type: 'Body Treatments',
            price: 180,
            time: 75,
            description: 'Luxurious body wraps and scrubs to nourish your skin and leave you feeling renewed.'
        }
    ]
    return(
        <div className={styles.ourServicesContainer}>
            <h1 className={styles.ourServicesHeading}>Our Services</h1>
            <p className={styles.ourServicesParagraph}>Discover our comprehensive range of beauty treatments designed to pamper and revitalize</p>
            <div className={styles.servicesCardsContainer}>
            {services.map(service => 
            <div className={styles.serviceCard}> 
            <OurServicesCard serviceData={service} key={service.type}/>
            </div>
            )}
            </div>
        </div>
    )
}