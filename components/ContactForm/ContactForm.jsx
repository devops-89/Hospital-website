"use client";
import { useState } from "react";
import "./ContactForm.css";
export default function ContactForm() {
  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  //   input change handle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  //   input submit handle
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", form);
    alert("Message sent successfully");
    setForm({ name: "", email: "", phone: "", comment: "" });
  };

  return (
    <section className="contact-form-section">
      {/* heading  */}
      <p className="form-tag"># GET IN TOUCH</p>
      <h2 className="form-heading">
        Do you have some <br />
        question?
      </h2>
      {/* form start  */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              required
              // className="full-name"
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

        {/* phone field  */}
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone *"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        {/* comment box  */}
        <div className="form-group">
          <textarea
            name="comment"
            placeholder="Comment *"
            value={form.comment}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {/* submit button  */}
        <button type="submit" className="form-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}
