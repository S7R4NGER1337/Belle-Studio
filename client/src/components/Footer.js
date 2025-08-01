import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>

        <div className={styles.belleStudio}>
          <h1 className={styles.belleStudioHeading}>Belle Studio</h1>
          <p className={styles.belleStudioParagraph}>
            Your premier destination for luxury beauty treatments. Enhancing
            natural beauty with expert care and premium products.
          </p>
        </div>

        <div className={styles.quickLinks}>
          <h1 className={styles.quickLinksHeading}>Quick Links</h1>
          <p className={styles.quickLinksParagraph}>Home</p>
          <p className={styles.quickLinksParagraph}>Services</p>
          <p className={styles.quickLinksParagraph}>About</p>
          <p className={styles.quickLinksParagraph}>Contact</p>
        </div>

        <div className={styles.services}>
          <h1 className={styles.servicesHeading}>Services</h1>
          <p className={styles.servicesParagraph}>Facials</p>
          <p className={styles.servicesParagraph}>Massage</p>
          <p className={styles.servicesParagraph}>Nails</p>
          <p className={styles.servicesParagraph}>Body Treatments</p>
        </div>
      </div>
      <div className={styles.line}/>
      <p>2025 Belle Studio. All rights reserver.</p>
    </div>
  );
}
