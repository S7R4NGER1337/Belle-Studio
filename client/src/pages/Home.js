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
    const readyToTransform = {
        heading: 'Ready for Your Beauty Journey?',
        paragraph: 'Book your appointment today and let our experts help you discover your most beautiful self',
        buttonName: 'Book Your Session'
    }

    return <>
        <HeroSection />
        <OurServices />
        <AreYouReady sectionData={readyForYourJourney}/>
        <AboutUs />
        <GetInTouch />
        <AreYouReady sectionData={readyToTransform}/>

    </>
}