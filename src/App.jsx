import "./App.scss";
import Header from "./components/Header";
import IntroBox from "./components/IntroBox";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [modalId, openModal] = useState("");

  return (
    <div className="app-container">
      <Header />
      <IntroBox />
      <Projects openModal={openModal} />
      <About />
      <Modal projectId={modalId} openModal={openModal} />
    </div>
  );
}

export default App;
