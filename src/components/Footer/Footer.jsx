import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import styles from "./footer.module.css";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <hr className={styles.hr} />
      <div className={styles.footerInfo}>
        <p>
          Bright<span className={styles.accent}>.A</span>
        </p>
        <span className={styles.footerIcons}>
          <a
            href="https://wa.me/qr/WJGUKZ72AHPLH1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className={styles.socialLinks} />
          </a>
          <a
            href="https://www.facebook.com/bright.arubuola?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={styles.socialLinks} />
          </a>

          <a
            href="https://www.instagram.com/_brightayomide_?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.socialLinks} />
          </a>
          <a
            href="https://ng.linkedin.com/in/bright-ayomide-1725a72aa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.socialLinks} />
          </a>
        </span>
      </div>
    </footer>
  );
}
