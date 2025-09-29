import styles from "./skills.module.css";

import frontend from "../../assets/images/frontend.png";
import backend from "../../assets/images/backend.png";
import tools from "../../assets/images/tools.png";

// Fixed unique IDs for each card
const Expertise = [
  {
    id: 1,
    src: frontend,
    title: "Frontend Development",
    skills: "React, Html5, Css, Tailwind, Js",
  },
  {
    id: 2,
    src: backend,
    title: "Backend Development",
    skills: "Node.Js",
  },
  {
    id: 3,
    src: tools,
    title: "Tools Development",
    skills: "Git & Github, Vs Code, Figma, Wordpress, Wix",
  },
];

export default function Skills() {
  return (
    <section className={styles.skillContainer} id="skills">
      <h2>TECHNICAL EXPERTISE</h2>
      {/* Centered and equal-width cards */}
      <div className={styles.expertiseContainer}>
        {Expertise.map((skill) => (
          <div className={styles.card} key={skill.id}>
            <img src={skill.src} alt={skill.title} />
            <h3>{skill.title}</h3>
            <p>{skill.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
