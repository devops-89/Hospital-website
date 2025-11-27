import HeroSection from "../components/HeroSection/HeroSection";
import MeetDoctor from "../components/meet-doctor/meet-doctor";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import ServiceSection from "../components/ServicesSection/ServicesSection";
import Appointment from "../components/AppointmentSection/AppointmentSection";
import SuccessStory from "../components/SuccessStory/SuccessStory";
import OurTeam from "../components/OurTeam/OurTeam";
import Insight from "../components/InsightsSection/InsightsSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <MeetDoctor />
      <WhyChooseUs />
      <ServiceSection />
      <Appointment />
      <SuccessStory />
      <OurTeam />
      <Insight />
    </>
  );
}
