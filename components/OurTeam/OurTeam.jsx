"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./OurTeam.module.css";
import Doctor from "@/public/images/doctor.jpg";
import {useRouter} from "next/navigation"

export default function OurTeam() {
  const router = useRouter()
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT TEXT BLOCK */}
        <div className={styles.left}>
          <span className={styles.tag}># OUR TEAM</span>

          <h2 className={styles.heading}>
            Your trusted dental <br /> professionals
          </h2>

          <button onClick= {() => router.push("/about")} className={styles.btn}>
            See a Doctor Today <ArrowUpRight size={18} />
          </button>
        </div>

        {/* RIGHT DOCTOR CARD */}
        <div className={styles.right}>
          <div className={styles.card}>
            <Image src={Doctor} alt="Doctor" className={styles.heroImg} />

            <div className={styles.info}>
              <h3>Dr. John Smith</h3>
              <p>Lead Dentist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
