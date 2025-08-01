import AboutUs from "../components/AboutUs";
import AreYouReady from "../components/AreYouReady";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";

export default function Home() {
    const readyForYourJourney = {
        heading: 'Ready for Your Beauty Journey?',
        buttonName: 'Book Your Session'
    }

    return <>
        <HeroSection />
        <OurServices />
        <AreYouReady sectionData={readyForYourJourney}/>
        <AboutUs />
        <GetInTouch />
    </>
}