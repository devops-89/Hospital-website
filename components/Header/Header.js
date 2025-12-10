"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { HEADER_LINKS } from "../../public/assets/data";
import logo from "../../public/logo.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoBox} onClick={() => router.push("/")}>
          <Image src={logo} alt="ApexCare" className={styles.logo} />
        </div>

        {/* Navigation - Desktop */}
        <nav className={styles.nav}>
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Button - Desktop */}
        <div className={styles.headerBtn}>
          <button
            className={styles.button}
            onClick={() => router.push("/contact-us")}
          >
            Let's Talk <ArrowUpRight />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${
          isMenuOpen ? styles.open : ""
        }`}
      >
        <nav className={styles.mobileNav}>
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${
                pathname === link.href ? styles.activeMobile : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            className={styles.mobileButton}
            onClick={() => router.push("/contact-us")}
          >
            Let's Talk <ArrowUpRight />
          </button>
        </nav>
      </div>
    </header>
  );
}
