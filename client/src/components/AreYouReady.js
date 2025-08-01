import styles from './areYouReady.module.css'

export default function AreYouReady({sectionData}) {    
    const sectionHeading = sectionData.heading
    const buttonName = sectionData.buttonName
    const sectionParagraph = sectionData.paragraph

    return(
        <div className={styles.sectionContainer}>
            <h1 className={styles.sectionHeading}>{sectionHeading}</h1>
            {sectionParagraph && <p className={styles.sectionParagraph}>{sectionParagraph}</p>}
            <button className={styles.sectionButton}>{buttonName}</button>
        </div>
    )
}