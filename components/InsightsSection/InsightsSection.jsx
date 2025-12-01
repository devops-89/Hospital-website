"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import styles from "./InsightsSection.module.css";

export default function InsightsSection() {
  const blogs = [
    {
      id: 1,
      date: "October 5, 2025",
      title: "5 Tips to Keep Your Teeth Healthy",
      desc: "Learn simple daily habits that keep your teeth clean and strong",
      image: "/images/blog1.jpg",
    },
    {
      id: 2,
      date: "October 4, 2025",
      title: "How to Choose the Right Toothbrush",
      desc: "Find out what toothbrush suits your dental needs best",
      image: "/images/blog2.jpg",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.topRow}>
        <div className={styles.left}>
          <span className={styles.tag}># INSIGHTS</span>
          <h2 className={styles.heading}>
            From our blog: tips & insights for <br /> healthy smiles
          </h2>
        </div>

        <button className={styles.btn}>
          Check All Insights <ArrowUpRight size={20} />
        </button>
      </div>

      {/* BLOG CARDS */}
      <div className={styles.cardsWrapper}>
        {blogs.map((b) => (
          <div key={b.id} className={styles.card}>
            <Image
              src={b.image}
              alt={b.title}
              width={450}
              height={350}
              className={styles.cardImage}
            />

            <div className={styles.content}>
              <p className={styles.date}>{b.date}</p>
              <h3 className={styles.title}>{b.title}</h3>
              <p className={styles.desc}>{b.desc}</p>
              <button className={styles.roundBtn}>
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
