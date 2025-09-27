import styles from "./contact.module.css";
import { useState } from "react";

export default function Contact() {
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
    // /^\S+@\S+\.\S+$/ means:
    //   - ^ and $: start and end of string
    //   - \S+: one or more non-whitespace characters
    //   - @: must have an @ symbol
    //   - \S+: one or more non-whitespace characters after @
    //   - \. : must have a dot
    //   - \S+: one or more non-whitespace characters after the dot
    // This is a basic check for email format
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Invalid email";
    // Check if message is empty
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  // Handle input changes: update form state and clear error for the field
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submit
    const newErrors = validate(); // Validate fields
    setErrors(newErrors); // Set errors if any
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true); // Show success message
      // Here you can connect to emailjs or formspree
    }
  }

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.description}>
        Feel free to reach out for collaborations, freelance work, or just to
        say hello! I’ll get back to you as soon as possible.
      </p>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
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
        <button type="submit" className={styles.submitBtn}>
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
