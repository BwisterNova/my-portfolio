import styles from "./experiences.module.css";
import fhg from "../../assets/images/fhg.jpeg";

// Experience data array (add more objects as needed)
const experiences = [
  {
    title: "Website Developer",
    company: "Faitheroic Generation ",
    date: "2023-2025",
    description:
      "Gained hand-on experience building responsive websites using Wix, Wordpress and other no-code platforms from initial concept to live deployment.",
    logo: fhg,
  },
  {
    title: "Freelance Web Developer",
    company: "Fiverr & Upwork",
    date: "2023 - Present",
    description:
      "Completed a paid niche website project on fiverr, and continue to focus on solving real client challenges across both platforms, delivering responsive, user-focused web solutions.",
    logo: fhg,
  },
  // Add more experience objects here
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
