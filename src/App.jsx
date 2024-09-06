import "./App.scss";
import Header from "./components/Header";
import IntroBox from "./components/IntroBox";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import About from "./components/About";

function App() {
  return (
    <div className="app-container">
      <Header />
      <IntroBox />
      <Projects />
      <About />
      <Modal />
    </div>
  );
}

export default App;
