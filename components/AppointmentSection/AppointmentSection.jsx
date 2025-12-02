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
          <form className="AppointmentForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
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
            <div className="form-row">
              <div className="form-group">
                <input
                  type="date"
                  name="appointmentDate"
                  placeholder="Appointment Date *"
                  value={form.appointmentDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
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
            <div className="form-row">
              <div className="form-group">
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
            <div className="form-row">
              <div className="form-group">
                <textarea
                  name="appointmentNote"
                  placeholder="Appointment Note *"
                  value={form.appointmentNote}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="form-btn">
              Reserve Your Spot
            </button>
          </form>
          
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
          {/* form start */}
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
