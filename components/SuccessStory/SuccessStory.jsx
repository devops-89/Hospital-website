"use client";
import Image from "next/image";
import HappyPatient from "@/public/images/happypatient.webp";

import styles from "./SuccessStory.module.css";

export default function SuccessStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CARD */}
        <div className={styles.leftCard}>
          <span className={styles.tag}># SUCCESS STORY</span>

          <p className={styles.cardText}>
            The best dental experience I’ve ever had! Friendly staff and
            pain-free treatment
          </p>

          <div className={styles.profile}>
            <p className={styles.name}>Sarah M</p>
            <p className={styles.role}>– Teeth Whitening Patient</p>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className={styles.centerImage}>
          <Image
            src={HappyPatient}
            alt="Happy Patient"
            className={styles.heroImg}
          />
        </div>

        {/* RIGHT QUOTE */}
        <div className={styles.rightText}>
          <div className={styles.quoteIcon}>❞</div>

          <p className={styles.bigText}>
            Amazing experience! The team is caring, and professional. My smile
            has never looked better—highly recommend their dental care services.
          </p>

          <div className={styles.userInfo}>
            <Image src={HappyPatient} alt="" className={styles.userImg} />

            <div>
              <p className={styles.userName}>Juairiya</p>
              <p className={styles.userJob}>Medical Assistant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
