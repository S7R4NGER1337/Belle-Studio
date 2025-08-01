import { useRef } from "react";
import AboutUs from "../components/AboutUs";
import AreYouReady from "../components/AreYouReady";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";
import Nav from "../components/Nav";

export default function Home() {
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const homeRef = useRef(null);

  const readyForYourJourney = {
    heading: "Ready for Your Beauty Journey?",
    buttonName: "Book Your Session",
  };
  const readyToTransform = {
    heading: "Ready for Your Beauty Journey?",
    paragraph:
      "Book your appointment today and let our experts help you discover your most beautiful self",
    buttonName: "Book Your Session",
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Nav
        aboutUsRef={() => scrollToSection(aboutUsRef)}
        contactRef={() => scrollToSection(contactRef)}
        servicesRef={() => scrollToSection(servicesRef)}
        homeRef={() => scrollToSection(homeRef)}
      />
      <div ref={homeRef}>
        <HeroSection
          servicesRef={() => scrollToSection(servicesRef)}
          contactRef={() => scrollToSection(contactRef)}
        />
      </div>

      <div ref={servicesRef}>
        <OurServices />
      </div>

      <AreYouReady sectionData={readyForYourJourney} />

      <div ref={aboutUsRef}>
        <AboutUs />
      </div>

      <div ref={contactRef}>
        <GetInTouch />
      </div>

      <AreYouReady sectionData={readyToTransform} />
    </>
  );
}
