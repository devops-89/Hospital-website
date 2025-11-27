"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./meet-doctor.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      
      
      
      <div className={styles.wrapper}>
        
        {/* LEFT SIDE TEXT */}
        <div className={styles.left}>
          <p className={styles.tag}># ABOUT METIER</p>

          <h2 className={styles.heading}>
            Your trusted partners <br /> in dental care
          </h2>
          <p className={styles.desc}>
            At ApexCare, we believe that a healthy smile is a happy smile. Our
            dedicated team of professionals combines years of experience,
            cutting-edge technology, and a warm, caring atmosphere to ensure
            you get the best dental care possible.
          </p>
          <button className={styles.doctorBtn}>
            Meet a Doctor <ArrowUpRight size={20} />
          </button>
        </div>
        {/* RIGHT SIDE IMAGE */}
        <div className={styles.right}>
          <Image
            src="/images/about1.png"
            width={650}
            height={420}
            alt="doctor"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
