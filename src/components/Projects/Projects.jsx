import styles from "./projects.module.css";

// Images
import kreaImage from "../../assets/images/kreaAi.png";
import defavour from "../../assets/images/defavour.png";
import todoImage from "../../assets/images/todoImage.png";

import { BiWorld } from "react-icons/bi";

const projects = [
  {
    id: 1,
    image: kreaImage,
    title: "Krea AI ",
    description:
      "A simple landing page without backends, routing or any actions just simple, clean UI design with toggle dark / light mode.",
    link: "https://kea-landing-page.vercel.app/",
  },
  {
    id: 2,
    image: defavour,
    title: "Defavour Cakes & Events ",
    description:
      "A modern, mobile-friendly business site showcasing Defavour's services in cake making, decorations and event planning.",
    link: "https://defavour-cakes-and-event.netlify.app/",
  },
  {
    id: 3,
    image: todoImage,
    title: "Todo List",
    description:
      "A simple yet functional To-Do List app that allows users to add, mark and delete tasks, helping them stay organized.",
    link: "https://bucket-list-sand.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className={styles.projectSection} id="projects">
      <h2 className={styles.title}>LATEST WORK</h2>
      <div>
        <span className={styles.projectItem}>
          {projects.map((item, pt) => (
            <div key={pt} className={styles.projectCard}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.projectImg}
              />
              <div className={styles.info}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className={styles.btn}>
                  <BiWorld /> <a href={item.link}>LIVE DEMO</a>
                </button>
              </div>
            </div>
          ))}
        </span>
      </div>
    </section>
  );
}
