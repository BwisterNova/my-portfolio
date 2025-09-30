import styles from "./contact.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // Ref for the form DOM node (for emailjs)
  const formRef = useRef();

  // Form state: stores the values of the form fields
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // Errors state: stores validation error messages for each field
  const [errors, setErrors] = useState({});
  // Submitted state: tracks if the form was successfully submitted
  const [submitted, setSubmitted] = useState(false);

  // Simple validation function for the form fields
  function validate() {
    const newErrors = {};
    // Check if name is empty
    if (!form.name.trim()) newErrors.name = "Name is required";
    // Check if email is empty
    if (!form.email.trim()) newErrors.email = "Email is required";
    // Check if email format is valid using a regular expression
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Invalid email";
    // Check if message is empty
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  // Handle input changes: update form state and clear error for the field
  function handleChange(e) {
    // Map input names to form state keys
    const { name, value } = e.target;
    let key = name;
    if (name === "user_name") key = "name";
    if (name === "user_email") key = "email";
    setForm({ ...form, [key]: value });
    setErrors({ ...errors, [key]: undefined });
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submit
    const newErrors = validate(); // Validate fields
    setErrors(newErrors); // Set errors if any
    if (Object.keys(newErrors).length === 0) {
      // Send email using emailjs
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setSubmitted(true); // Show success message
            setForm({ name: "", email: "", message: "" }); // Reset form
          },
          (error) => {
            setSubmitted(false);
            alert("Failed to send message. Please try again.");
            console.log("FAILED...", error.text);
          }
        );
    }
  }

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.description}>
        Feel free to reach out for collaborations, freelance work, or just to
        say hello! I’ll get back to you as soon as possible.
      </p>
      <form
        ref={formRef}
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
      >
        <div className={styles.rowInputs}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="user_name"
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
              name="user_email"
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
        {submitted && (
          <p className={styles.successMsg}>
            Message sent! I'll get back to you soon.
          </p>
        )}
      </form>
    </section>
  );
}
