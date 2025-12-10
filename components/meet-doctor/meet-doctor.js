"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./meet-doctor.module.css";
import bgImage from "@/public/images/About-meet.svg";
import about1 from "@/public/images/About-meet1.webp";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();
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
            cutting-edge technology, and a warm, caring atmosphere to ensure you
            get the best dental care possible.
          </p>
          <button onClick={() => router.push("/pricing")} className={styles.doctorBtn}>
            Meet a Doctor <ArrowUpRight size={20} />
          </button>
        </div>
        {/* RIGHT SIDE IMAGE */}
        <div className={styles.bgImageWrapper}>
          <Image src={bgImage} alt="doctor" className={styles.bgImage} />
        </div>
        <div className={styles.right}>
          <Image
            src={about1}
            alt="doctor"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
