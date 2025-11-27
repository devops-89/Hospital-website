import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import LogoBadge from "../LogoBadge/LogoBadge";
import HeroCards from "../HeroCards/HeroCards";
import HeroBg from"@/public/images/hero-bg.jpg.png";
<div className={styles.logoContainer}>
  <LogoBadge />
</div>;
export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.bgImage}>
        <Image
          src={HeroBg}
          alt="Expert dental care"
          fill
          priority
          className={styles.image}
        />
      </div>

      {/* Overlay Content */}
      <div className={styles.overlay}>
        <div className={styles.container}>
          <p className={styles.tagline}>#1 DENTAL CENTRE</p>
          <h1 className={styles.title}>
            Brighten your <br />
            smile with{" "}
            <span className={styles.highlight}>
              expert <br /> dental care{" "}
            </span>
          </h1>
          <Link href="/schedule" className={styles.ctaButton}>
            Schedule Your Visit
          </Link>
          
          <div className={styles.logoContainer}>
            <LogoBadge />
          </div>
        
        </div>
      </div>
     <HeroCards/>
     
    </section>
  );
}
