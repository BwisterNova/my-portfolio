import styles from "./about.module.css";
import { useState, useEffect } from "react";

// Tech stacks images
import reactjs from "../../assets/images/reactjs.png";
import html from "../../assets/images/html.webp";
import Javasccript from "../../assets/images/Js.png";
import CSS from "../../assets/images/css.png";
import wix from "../../assets/images/wixLogo.png";
import figma from "../../assets/images/figma.png";
import wordpress from "../../assets/images/wordpress.png";
import tailwindCss from "../../assets/images/tailwind.png";
import nodeJs from "../../assets/images/nodeJs.png";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

// Add shadowColor for each tech stack card
const techStacks = [
  {
    id: 1,
    src: reactjs,
    title: "React",
    shadowColor: "#61dafb",
  },
  {
    id: 2,
    src: html,
    title: "HTML",
    shadowColor: "#e44d26",
  },
  {
    id: 3,
    src: Javasccript,
    title: "Javasccript",
    shadowColor: "#f7e018",
  },
  {
    id: 4,
    src: CSS,
    title: "CSS",
    shadowColor: "#2965f1",
  },
  {
    id: 5,
    src: wix,
    title: "Wix",
    shadowColor: "#ffcb05",
  },
  {
    id: 6,
    src: tailwindCss,
    title: "Tailwind",
    shadowColor: "#38bdf8",
  },
  {
    id: 7,
    src: figma,
    title: "Figma",
    shadowColor: "#a259ec",
  },
  {
    id: 8,
    src: wordpress,
    title: "Wordpress",
    shadowColor: "#21759b",
  },
  {
    id: 9,
    src: nodeJs,
    title: "NodeJs",
    shadowColor: "#3c873a",
  },
];

export default function About() {
  const [showMore, setShowMore] = useState(false);
  // Responsive: track if we're in mobile view
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768;
    }
    return false;
  });

  // Listen for window resize and update isMobile
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset showMore when switching to desktop
  useEffect(() => {
    if (!isMobile) setShowMore(false);
  }, [isMobile]);

  // Only show 6 cards on mobile unless showMore is true
  const visibleTechStacks =
    isMobile && !showMore ? techStacks.slice(0, 6) : techStacks;

  function toggleShowMore() {
    setShowMore((prev) => !prev);
  }



  return (
    <section className={styles.aboutContainer} id="about">
      <div className={styles.aboutIntro}>
        <p>INTRODUCTION</p>
        <h2>Overview</h2>
        <p>
          Hi, I'm Bright Ayomide, a developer specializing in both frontend and
          backend development. With expertise in modern web technologies, I
          create responsive websites and user-friendly applications. My skills
          extend to UI/UX design, writing codes and also using no-code
          development tools, allowing me to solve problems and deliver
          comprehensive solutions that combine functionality with
          attractiveness.
        </p>
      </div>
      <div className={styles.techStacks}>
        <div className={styles.techHeader}>
          <h3>Tech Stacks</h3>
          {/* Show more/less toggle only on mobile */}
          {isMobile && (
            <p onClick={toggleShowMore} className={styles.toggleShow}>
              {showMore ? (
                <>
                  <FaArrowUp /> Show Less
                </>
              ) : (
                <>
                  <FaArrowDown /> Show More
                </>
              )}
            </p>
          )}
        </div>
        <div className={styles.grid}>
          {visibleTechStacks.map((techStack, ts) => (
            <div
              key={ts}
              className={styles.card}
              // Per-image shadow color
              style={{ boxShadow: `0 4px 16px ${techStack.shadowColor}80` }}
            >
              <img src={techStack.src} alt={techStack.title} />
              <p>{techStack.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
