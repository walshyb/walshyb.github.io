import "./App.scss";
import Header from "./components/Header";
import IntroBox from "./components/IntroBox";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app-container">
      <Header />
      <IntroBox />
      <Projects />
    </div>
  );
}

export default App;
