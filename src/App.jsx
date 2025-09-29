import { useEffect, useState } from "react";
import "./App.css";
import Page from "./page/Page";
import { FiArrowUp } from "react-icons/fi";

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
  }, []);

  //scroll to top function
  function scrollToTop() {
    windows.scrollTo({ top: 0, behaviour: "smooth" });
  }
  return (
    <>
      <Page />

      {/*Back to Top Button */}
      {showScroll && (
        <div onClick={scrollToTop} style>
          <FiArrowUp size={24} />{" "}
        </div>
      )}
    </>
  );
}

export default App;
