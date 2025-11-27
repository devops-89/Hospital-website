"use client";
import React from "react";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ContactForm from "../../components/ContactForm/ContactForm";
import Banner from "../../components/Banner/Banner";

export default function ContactPage() {
  return (
    <>
      <Banner
        heading1={"Get in touch with our"}
        heading2={"friendly team today"}
        pageTitle={"contact"}
      />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
