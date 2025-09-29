import styles from "./header.module.css";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";

// Nav items for easier mapping
const navItems = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export default function Header() {
  // For mobile nav, theme toggle, and active nav item
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); // Track active nav item

  // Prevent body scroll and add blur when mobile nav is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("nav-blur");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("nav-blur");
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("nav-blur");
    };
  }, [nav]);

  // Toggle mobile nav
  function handleNav() {
    setNav((prev) => !prev);
  }

  // Toggle theme (light/dark)
  function handleTheme() {
    setTheme((prev) => !prev);
  }

  // Smooth scroll to section
  function handleActive(index) {
    setActiveIndex(index);
    setNav(false); // Close mobile nav on selection
    // Get the section by id and scroll smoothly
    const sectionId = navItems[index].href;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className={styles.header}>
      <div>
        <h2 className={styles.title}>
          Bright<span className={styles.accent}>.A</span>
        </h2>
      </div>

      {/* Desktop Nav */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Desktop navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navItems.map((item, idx) => (
              <li
                key={item.label}
                className={`${styles.navItem} ${
                  activeIndex === idx ? styles.active : ""
                }`}
                onClick={() => handleActive(idx)}
              >
                {/* Use button for accessibility and smooth scroll */}
                <button
                  className={styles.navLink}
                  type="button"
                  tabIndex={0}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Theme toggle button */}
        <div className={styles.themeToggle} onClick={handleTheme}>
          {theme ? <FaMoon size={20} /> : <FaSun size={20} />}
        </div>
        {/* Mobile nav icon (hamburger/close) */}
        <div className={styles.mobileNavIcon} onClick={handleNav}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Mobile Nav Drawer */}
        <nav className={`${styles.mobileNavDrawer} ${nav ? styles.open : ""}`}>
          <ul className={styles.mobileNavList}>
            {navItems.map((item, idx) => (
              <li
                key={item.label}
                className={`${styles.navItem} ${
                  activeIndex === idx ? styles.active : ""
                }`}
                onClick={() => handleActive(idx)}
                style={{ width: "100%", textAlign: "center" }}
              >
                <button
                  className={styles.navLink}
                  type="button"
                  tabIndex={0}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
