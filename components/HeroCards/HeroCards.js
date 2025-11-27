
"use client";
import React from "react";
import styles from "./HeroCards.module.css";
import { ArrowUpRight, Heart, Crown } from "lucide-react";
export default function HeroCards() {
  const cards = [
    {
      type: "info",
      title: "Caring Dentists",
      desc: "Your health and safety are our top priority",
      button: "Explore More",
      icon: <ArrowUpRight size={16} />,
    },
    {
      type: "stats",
      icon: <Heart className={styles.statIcon} color="#1C4FD1" />,
      statLabel: "Smiles Transformed",
      statNumber: "5,000+",
    },

    {
      type: "people",
      title: "Join 5,000+",
      desc: "Trusted by 5,000+ teams",
      images: [
        "/images/client1.png",
        "/images/client2.png",
        "/images/client3.png",
      ],
    },
    {
      type: "testimonial",
      icon: <Crown color="#1C4FD1" size={26} />,
      quote: "“Best dentist experience ever! Friendly staff and pain-free visits.”",
      quoteName: "— Sarah M",
    },
  ];
  return (
    <div className={styles.cardsWrapper}>
      {cards.map((card, index) => (
        <div className={styles.card} key={index}>
          {card.type === "info" && (
            <>
              <h2 className={styles.title}>{card.title}</h2>
              <p className={styles.desc}>{card.desc}</p>
              <button className={styles.exploreBtn}>
                {card.button} {card.icon}
              </button>
            </>
          )}
          {card.type === "stats" && (
            <>
              {card.icon}
              <p className={styles.statLabel}>{card.statLabel}</p>
              <p className={styles.statNumber}>{card.statNumber}</p>
            </>
          )}
          {card.type === "people" && (
            <>
              <h2 className={styles.title}>{card.title}</h2>
              <p className={styles.desc}>{card.desc}</p>
              <div className={styles.peopleRow}>
                {card.images.map((img, i) => (
                  <img key={i} className={styles.personImg} src={img} alt="client" />
                ))}

              </div>
            </>
          )}
          {card.type === "testimonial" && (
            <>
              {card.icon}
              <p className={styles.quote}>{card.quote}</p>
              <p className={styles.quoteName}>{card.quoteName}</p>
            </>
          )}

        </div>
      ))}
    </div>
  );
}

