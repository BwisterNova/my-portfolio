import styles from "./projects.module.css";

// Images
import kreaImage from "../../assets/images/kreaAi.png";
import defavour from "../../assets/images/defavour.png";
import todoImage from "../../assets/images/todoImage.png";
import songScribe from "../../assets/images/songScribe.png";
import starlight from "../../assets/images/starlight.png";
import instaWeb from "../../assets/images/instaWeb.png";

import { BiWorld } from "react-icons/bi";

const projects = [
  {
    id: 1,
    image: instaWeb,
    title: "Instagram Clone (Modern Form)",
    description:
      "A modern Instagram login/signup form built with html, css, and javascript featuring a clean design, responsive layout, and smooth user experience.",
    link: "https://modern-instagram-form.vercel.app/login.html",
  },
  {
    id: 2,
    image: starlight,
    title: "Starlight ",
    description:
      "A luxury-inspired perfume website built with React, featuring polished visuals, responsive layouts, and modern component-based design.",
    link: "https://starlight-web.netlify.app",
  },
  {
    id: 3,
    image: songScribe,
    title: "SongScribe ",
    description:
      "SongScribe is a smart music companion that identifies songs, retrieves lyrics, and provides seamless access across platforms.",
    link: "https://songscribe-lyrics.vercel.app/",
  },
  {
    id: 4,
    image: kreaImage,
    title: "Krea AI ",
    description:
      "A simple landing page without backends, routing or any actions just simple, clean UI design with toggle dark / light mode.",
    link: "https://kea-landing-page.vercel.app/",
  },
  {
    id: 5,
    image: defavour,
    title: "Defavour Cakes & Events ",
    description:
      "A modern, mobile-friendly business site showcasing Defavour's services in cake making, decorations and event planning.",
    link: "https://defavour-global-concepts-and-events.netlify.app/",
  },
  {
    id: 6,
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
                  <BiWorld />{" "}
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    LIVE DEMO
                  </a>
                </button>
              </div>
            </div>
          ))}
        </span>
      </div>
    </section>
  );
}
