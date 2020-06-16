import React from 'react';
import './App.css';
import Header from './components/shell/Header';
import Footer from './components/shell/Footer';
import { Route, Switch } from 'react-router-dom';
import Intro from './components/page-components/Intro';
import About from './components/page-components/About';
import Projects from './components/page-components/Projects';

function App() {
  return (
    <div id="root">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/">
            <Intro />
            <About />
            <Projects />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
