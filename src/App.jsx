import "./App.scss";
import Header from "./components/Header";
import IntroBox from "./components/IntroBox";
import Projects from "./components/Projects";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="app-container">
      <Header />
      <IntroBox />
      <Projects />
      <Modal />
    </div>
  );
}

export default App;
