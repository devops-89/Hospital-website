import PricingCards from "../../components/PricingCards/PricingCards.jsx";
import AppointmentSection from "../../components/AppointmentSection/AppointmentSection.jsx";
import TransformSection from "../../components/TransformSection/TransformSection.jsx";
import Banner from "../../components/Banner/Banner.jsx";

export default function Pricing() {
  return (
    <>
      <Banner
        heading1={"Transparent pricing for"}
        heading2={"quality dental care"}
        pageTitle={"pricing"}
      />

      <PricingCards />
      <AppointmentSection />
    </>
  );
}
