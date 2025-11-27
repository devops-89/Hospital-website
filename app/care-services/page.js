import TransformSection from "../../components/TransformSection/TransformSection.jsx";
import SpecialistsSection from "../../components/ServicesSpecialists/SpecialistsSection.jsx";
import ServicesSection from "../../components/ServicesDental/Services.jsx";
import PricingCards from "../../components/PricingCards/PricingCards.jsx";
import Banner from "../../components/Banner/Banner.jsx";

export default function CareServices() {
  return (
    <>
      <Banner
        heading1={"Expert dental services"}
        heading2={"for a brighter Smile"}
        pageTitle={"Services"}
      />
      <ServicesSection />
      <SpecialistsSection />
    </>
  );
}
