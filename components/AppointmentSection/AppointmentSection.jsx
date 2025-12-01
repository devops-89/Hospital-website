"use client";
import use
import Image from "next/image";
import styles from "./AppointmentSection.module.css";

export default function AppointmentSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT FORM AREA */}
        <div className={styles.left}>
          <span className={styles.tag}># APPOINTMENT BOOKING</span>

          <h2 className={styles.heading}>
            Easy & quick <br /> appointment booking
          </h2>

          {/* <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Full name *</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div className={styles.field}>
                <label>Email *</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Appointment date *</label>
                <input type="date" />
              </div>

              <div className={styles.field}>
                <label>Appointment time *</label>
                <input type="time" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.fieldFull}>
                <label>Phone number *</label>
                <input type="text" placeholder="Enter phone number" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.fieldFull}>
                <label>Additional Notes *</label>
                <textarea placeholder="Write your message..." />
              </div>
            </div>
            

            <button className={styles.btn}>Reserve Your Spot</button>
          </form> */}

        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <div className={styles.imageBox}>
            <Image
              src="/images/appointment.avif"
              alt="Doctor"
              width={600}
              height={650}
              className={styles.heroImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
