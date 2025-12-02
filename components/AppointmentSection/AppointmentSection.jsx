"use client";
import { useState } from "react";
import Image from "next/image";
import AppointmentImage from "@/public/images/appointment.avif";
import styles from "./AppointmentSection.module.css";
export default function AppointmentSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
    phoneNumber: "",
    appointmentNote: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", form);
    alert("Message sent successfully");
    setForm({
      name: "",
      email: "",
      appointmentDate: "",
      appointmentTime: "",
      phoneNumber: "",
      appointmentNote: "",
    });
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT FORM AREA */}
        <div className={styles.left}>
          <span className={styles.tag}># APPOINTMENT BOOKING</span>
          <h2 className={styles.heading}>
            Easy & quick <br /> appointment booking
          </h2>
          <form className={styles.AppointmentForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input
                  type="date"
                  name="appointmentDate"
                  placeholder="Appointment Date *"
                  value={form.appointmentDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="time"
                  name="appointmentTime"
                  placeholder="Appointment Time *"
                  value={form.appointmentTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number *"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <div className={styles.formGroup}>
                <textarea
                  name="appointmentNote"
                  placeholder="Appointment Note *"
                  value={form.appointmentNote}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.formBtn}>
                Reserve Your Spot
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          <div className={styles.imageBox}>
            <Image
              src={AppointmentImage}
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
