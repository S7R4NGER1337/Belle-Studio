import styles from './getInTouch.module.css'
import GetInTouchCard from './GetInTouchCard';

export default function GetInTouch() {
  const getInTouchCards = [
    {
      name: "📍 Visit Us",
      first: "123 Beauty Boulevard",
      second: "Elegant District",
      third: "New York, NY 10001",
    },
    {
      name: "📞 Call Us",
      first: "(555) 123-BELLE",
      second: "Mon-Sat: 9AM-7PM",
      third: "Sunday: 10AM-5PM",
    },
    {
      name: "✉️ Email Us",
      first: "hello@bellestudio.com",
      second: "We respond within 24hrs",
      third: "24/7 Online booking",
    },
  ];

  return (
    <div className={styles.getInTouchContainer}>
      <h1 className={styles.getIntouchHeading}>Get In Touch</h1>
      <p className={styles.getInTouchParagraph}>
        Ready to experience the Belle Studio difference? Book your appointment
        today
      </p>
      <div className={styles.getIntouchCardsContainer}>
        {getInTouchCards.map(card => <GetInTouchCard cardData={card} key={card.name}/>)}
      </div>
    </div>
  );
}
