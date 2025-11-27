"use client";
import React from "react";
import styles from "./Footer.module.css";
import { ArrowUpRight, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* LEFT COLUMN  */}
        <div className={styles.company}>
          <div className={styles.logo}>
            <img src="/images/footerlogo.svg" alt="ApexCare Logo" />
          </div>

          <p className={styles.address}>
            2066 Duncan Avenue, <br />
            Brooklyn, New York
          </p>

          <p className={styles.copy}>
            © 2025, <span>ApexCare.</span> <br />
            All Rights Reserved.
          </p>
        </div>

        {/* MIDDLE BOX */}
        <div className={styles.whiteBox}>
          <p className={styles.whiteText}>
            Expert medical care, <br />
            easily scheduled at your <br />
            convenience
          </p>

          <h3 className={styles.phone}>+(1234)-123-56</h3>
          <a className={styles.email} href="mailto:info@apexcare.com">
            info@apexcare.com
          </a>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.links}>
          <h4>Quick Links</h4>

          <div className={styles.linkGrid}>
            <a>About</a>
            <a>Services</a>
            <a>Pricing</a>
            <a>Contact</a>
            <a>Style guide</a>
            <a>Licenses</a>
            <a>Change Log</a>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className={styles.newsletter}>
          <h4>Newsletter</h4>

          <div className={styles.inputBox}>
            <input type="text" placeholder="Email Address" />
            <button>
              <Send size={18} />
            </button>
          </div>

          <div className={styles.socials}>
            <div className={styles.icon}>f</div>
            <div className={styles.icon}>𝕏</div>
            <div className={styles.icon}>in</div>
            <div className={styles.icon}>⍟</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
