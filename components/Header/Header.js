import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import { HEADER_LINKS } from '../../public/assets/data';
import logo from '../../public/logo1.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <div className={styles.logoBox}>
          <Image
            src={logo}
            alt="ApexCare"
            width={150}
            height={45}
            className={styles.logo}
          />
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          {HEADER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={`${styles.link} ${styles.active}`}>{link.label}</Link>
          ))}

        </nav>

        {/* Button */}
        <div className='Header-btn'>
        <button className={styles.button}>
          Let’s Talk →
        </button>
        </div>

      </div>
    </header>
  );
}
