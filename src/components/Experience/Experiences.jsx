import styles from "./experiences.module.css";
import fhg from "../../assets/images/fhg.jpeg";

// Experience data array (add more objects as needed)
const experiences = [
  {
    title: "Website Developer",
    company: "Faitheroic Generation ",
    date: "2023 - Present",
    description:
      "Developed responsive, SEO-friendly websites, boosting page speed by 40% and organic traffic by 50% also built projects from concept to deployment using Wix, WordPress, and other no-code platforms, while enhancing design and functionality.",
    logo: fhg,
  },
  {
    title: "Freelance Web Developer",
    company: "Fiverr & Upwork",
    date: "2023 - Present",
    description:
      "Delivered 5+ websites for clients worldwide, optimizing for speed, usability, and SEO. Combined code and no-code solutions to meet diverse client needs, focusing on solving real challenges and delivering responsive, user-focused web experiences.",
    logo: fhg,
  },
  // Add more experience objects herea
];

export default function Experience() {
  return (
    <section className={styles.experienceSection} id="experience">
      <h2 className={styles.title}>WORK EXPERIENCE</h2>

      <div className={styles.experiencesList}>
        {experiences.map((exp, idx) => (
          <article key={idx} className={styles.experienceCards}>
            <span className={styles.date}>
              <p>{exp.date}</p>
            </span>
            <span className={styles.infos}>
              <h3>{exp.title}</h3>
              <p className={styles.company}>
                {exp.company}
                <span className={styles.mobileDate}>{exp.date}</span>
              </p>
              <p className={styles.description}>{exp.description}</p>
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
