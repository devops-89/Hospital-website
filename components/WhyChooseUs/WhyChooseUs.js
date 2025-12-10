"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./WhyChooseUs.module.css";
import whyChoose1 from "@/public/images/whychooseusteeth.svg";
import whyChoose2 from "@/public/images/whychooseiconstate.svg";
import whyChoose3 from "@/public/images/whychooseiconcare.svg";
import whyChooseus2 from "@/public/images/whychooseus1.webp";

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      {/* ====== TOP ROW ====== */}
      <div className={styles.topRow}>
        <p className={styles.tag}># WHY CHOOSE US</p>
      </div>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>
          The top reasons our <br /> patients love us
        </h2>
        <div className={styles.certBox}>
          <Image
            src="/images/whychooseicon.svg"
            width={70}
            height={70}
            alt=""
          />
          <div>
            <p className={styles.certTitle}>
              Certified by the American Dental Association
            </p>
            <a href="/contact-us" className={styles.visitLink}>
              Schedule Your Visit <ArrowUpRight size={25} />
            </a>
          </div>
        </div>
      </div>

      {/* ====== CONTENT CARDS ====== */}
      <div className={styles.cards}>
        {/* CARD 1 */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <Image src={whyChoose1} width={40} height={40} alt="" />
          </div>

          <h3>Experienced & Caring Dentists</h3>
          <p>
            With over 25 years of experience, our team provides expert care with
            a gentle touch, ensuring a comfortable and effective experience
            every time.
          </p>
        </div>
        {/* CARD 2 */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <Image src={whyChoose2} width={40} height={40} alt="" />
          </div>

          <h3>State-of-the-Art Technology</h3>
          <p>
            We use the latest dental technology to provide precise, efficient,
            and effective treatments, reducing discomfort.
          </p>
        </div>

        {/* CARD 3 */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            <Image src={whyChoose3} width={40} height={40} alt="" />
          </div>

          <h3>Comprehensive Care for the Whole Family</h3>
          <p>
            From routine check-ups to advanced treatments, we offer dental
            services for all ages — ensuring the whole family receives the best
            care.
          </p>
        </div>

        {/* RIGHT BIG IMAGE CARD */}
        <div className={styles.imageCard}>
          <Image
            src={whyChooseus2}
            alt="dental"
            width={500}
            height={500}
            className={styles.img}
          />

          {/* <div className={styles.overlay}>
            Affordable & <br /> Transparent Pricing
          </div> */}
        </div>
      </div>
    </section>
  );
}
