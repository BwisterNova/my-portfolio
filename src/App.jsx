import { useEffect, useState } from "react";
import "./App.css";
import Page from "./page/Page";
import { FiArrowUp } from "react-icons/fi";
import { ThemeProvider } from "./components/Theme/ThemeContext";

// App component wrapped in ThemeProvider for dark/light mode
function App() {
  const [showScroll, setShowScroll] = useState(false);

  //Show the button when scrolling
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //scroll to top function
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <ThemeProvider>
      <Page />
      {/*Back to Top Button */}
      {showScroll && (
        <div
          style={{
            position: "fixed",
            bottom: "60px",
            right: "20px",
            zIndex: "1000",
            cursor: "pointer",
            background: "rgba(0, 0, 0, 0.2)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            borderRadius: "10px",
            padding: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            transition: "background 0.3s ease",
          }}
          onClick={scrollToTop}
        >
          <FiArrowUp size={24} />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
