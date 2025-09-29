import Typewriter from "typewriter-effect";
import styles from "./heroSection.module.css";
import { motion } from "framer-motion";
import {
  FaDotCircle,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import profilePic from "../../assets/images/profile.jpg";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroIntro}>
        <span className={styles.mobileHead}>
          <h3>Hello, I'm</h3>
          <h1>Bright Ayomide</h1>
        </span>
        <h3 style={{ display: "flex", gap: "5px" }} className={styles.mobileh3}>
          And I'm a{" "}
          <span
            style={{
              color: "#a259ec",
              fontWeight: "bold",
            }}
          >
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Frontend Developer",
                  "UI/UX Designer",
                  "Backend Developer",
                  "No Code Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
              }}
            />
          </span>
        </h3>
        <p className={styles.heroDescription}>
          I create modern websites and applications using both tech stacks and
          no-code tools, delivering solutions that are fast, functional, and
          visually appealing.
        </p>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/bright.arubuola?mibextid=ZbWKwL">
            <FaFacebook className={styles.socialLinks} />
          </a>
          <a href="https://github.com/BwisterNova">
            <FaGithub className={styles.socialLinks} />
          </a>
          <a href="https://www.instagram.com/_brightayomide_?igsh=YzljYTk1ODg3Zg==">
            <FaInstagram className={styles.socialLinks} />
          </a>
          <a href="https://ng.linkedin.com/in/bright-ayomide-1725a72aa">
            <FaLinkedin className={styles.socialLinks} />
          </a>
        </div>
        <div className={styles.heroButtons}>
          <button className={styles.heroButton1}>Contact me</button>
          <button className={styles.heroButton2}>
            <FaDotCircle
              style={{
                color: "#22c55e",
                background: "#16a34a",
                borderRadius: "100%",
                width: "10px",
                height: "10px",
                marginRight: "5px",
              }}
            />
            Open to work
          </button>
        </div>
      </div>

      <motion.div
        className={styles.profile}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <img src={profilePic} alt="Bright Ayomide portfolio profile" />
      </motion.div>
    </div>
  );
}
