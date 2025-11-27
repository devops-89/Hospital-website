"use client";

import Banner from "../../components/Banner/Banner.jsx";
import AboutJourney from "../../components/OurJourney/OurJourney.jsx";
import ServicesSpecialists from "../../components/ServicesSpecialists/SpecialistsSection.jsx";

export default function AboutPage() {
  return (
    <>
      <Banner
        heading1={"Committed to your"}
        heading2={"smile and health"}
        pageTitle={"about us"}
      />
      {/* <Hero/> */}
      <AboutJourney />
      <ServicesSpecialists />
    </>
  );
}
