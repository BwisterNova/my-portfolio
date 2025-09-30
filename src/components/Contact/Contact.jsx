import styles from "./contact.module.css";
import React, { useRef, useState } from "react";

export default function Contact() {
  // Form state: stores the values of the form fields
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // Errors state: stores validation error messages for each field
  const [errors, setErrors] = useState({});
  // Message state: { type: 'success' | 'error', text: string }
  const [message, setMessage] = useState(null);
  // Timer for auto-dismiss
  const timerRef = useRef(null);

  // Simple validation function for the form fields
  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  // Handle input changes: update form state and clear error for the field
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  }

  // Handle form submission with Formspree
  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        // Send form data to Formspree
        const response = await fetch("https://formspree.io/f/xkgqreqb", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        });
        if (response.ok) {
          setForm({ name: "", email: "", message: "" });
          showMessage({
            type: "success",
            text: "Message sent! I'll get back to you soon.",
          });
        } else {
          showMessage({
            type: "error",
            text: "Failed to send message. Please try again.",
          });
        }
      } catch (err) {
        showMessage({
          type: "error",
          text: "Failed to send message. Please try again.",
        });
      }
    }
  }

  // Show message and auto-dismiss after 4s (or keep if user closes early)
  function showMessage(msg) {
    setMessage(msg);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setMessage(null), 4000);
  }

  // Manual close for message
  function handleCloseMessage() {
    setMessage(null);
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.description}>
        Feel free to reach out for collaborations, freelance work, or just to
        say hello! I’ll get back to you as soon as possible.
      </p>
      {/* Success/Error message popup */}
      {message && (
        <div
          className={
            message.type === "success"
              ? styles.successMsg + " " + styles.popupMsg
              : styles.errorMsg + " " + styles.popupMsg
          }
        >
          {message.text}
          <button
            onClick={handleCloseMessage}
            className={styles.closeMsgBtn}
            aria-label="Close message"
            type="button"
          >
            ×
          </button>
        </div>
      )}
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <div className={styles.rowInputs}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? styles.errorInput : ""}
              required
            />
            {errors.name && (
              <span className={styles.errorMsg}>{errors.name}</span>
            )}
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : ""}
              required
            />
            {errors.email && (
              <span className={styles.errorMsg}>{errors.email}</span>
            )}
          </div>
        </div>
        <div className={styles.inputGroup}>
          <textarea
            name="message"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            className={errors.message ? styles.errorInput : ""}
            rows={5}
            required
          />
          {errors.message && (
            <span className={styles.errorMsg}>{errors.message}</span>
          )}
        </div>
        <button type="submit" value="Send" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    </section>
  );
}
