import styles from "./header.module.css";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";

// Nav items for easier mapping
const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  // For mobile nav, theme toggle, and active nav item
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); // Track active nav item

  // Toggle mobile nav
  function handleNav() {
    setNav((prev) => !prev);
  }

  // Toggle theme (light/dark)
  function handleTheme() {
    setTheme((prev) => !prev);
  }

  // Set active nav item
  function handleActive(index) {
    setActiveIndex(index);
    setNav(false); // Close mobile nav on selection
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
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Theme Toggle */}
        <div className={styles.themeToggle} onClick={handleTheme}>
          {theme ? <FaMoon size={20} /> : <FaSun size={20} />}
        </div>
        {/* Mobile Nav Icon */}
        <div className={styles.mobileNavIcon} onClick={handleNav}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Mobile Nav Drawer */}
        <nav
          className={`${styles.mobileNavDrawer} ${nav ? styles.open : ""}`}
          // aria-hidden for accessibility
          aria-hidden={!nav}
        >
          <ul className={styles.mobileNavList}>
            {navItems.map((item, idx) => (
              <li
                key={item.label}
                className={`${styles.navItem} ${
                  activeIndex === idx ? styles.active : ""
                }`}
                onClick={() => handleActive(idx)}
              >
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
