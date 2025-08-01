import styles from './getInTouchCard.module.css'

export default function GetInTouchCard({cardData}) {
    return (
        <div className={styles.cardContainer}>
            <h1 className={styles.cardName}>{cardData.name}</h1>
            <p className={styles.cardParagraph}>{cardData.first}</p>
            <p className={styles.cardParagraph}>{cardData.second}</p>
            <p className={styles.cardParagraph}>{cardData.third}</p>
        </div>
    )
}