import "./App.scss";
import Header from "./components/Header";
import IntroBox from "./components/IntroBox";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import About from "./components/About";
import { useState, useEffect } from "react";

function App() {
  const [modalId, openModal] = useState("");

  // Handle case of hash in url on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <div className="app-container">
        <Header />
        <IntroBox />
        <Modal projectId={modalId} openModal={openModal} />
      </div>

      <div className="grid-wrapper">
        <div className="the-grid">
          {/*<aside className="aside-left"></aside>*/}
          <main>
            <Projects openModal={openModal} />
            <About />
          </main>
          {/*<aside className="aside-right"></aside>*/}
        </div>
      </div>
    </>
  );
}

export default App;
