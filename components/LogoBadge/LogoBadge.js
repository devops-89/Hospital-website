import styles from "./LogoBadge.module.css";

export default function LogoBadge() {
  return (
    <div className={styles.badgeWrapper}>
      <div className={styles.rotatingRing}>
        <svg
          viewBox="0 0 200 200"
          className={styles.circleText}
        >
          <defs>
            <path
              id="circlePath"
              d="
                M 100, 100
                m -80, 0
                a 80,80 0 1,1 160,0
                a 80,80 0 1,1 -160,0
              "
            />
          </defs>

          <text className={styles.text}>
            <textPath href="#circlePath" startOffset="0%">
              YOUR DENTAL ASSISTANT • YOUR DENTAL ASSISTANT •
            </textPath>
          </text>
        </svg>
      </div>

      <div className={styles.centerCircle}>
        <span>M</span>
      </div>
    </div>
  );
}
