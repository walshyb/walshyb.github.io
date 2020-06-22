import React, { Component } from 'react';
import './styles/main.scss';
import Header from './components/shell/Header';
import Footer from './components/shell/Footer';
import About from './components/page/About';
import Projects from './components/page/Projects';

export default class App extends Component {
  state = {
    color: 'orange'
  };

  /**
   * Update global color
   *
   * @param String color 
   */
  updateGlobalColor = ( color ) => {
    this.setState({
      ...this.state,
      color
    });
  }
  
  render() {
    const { color } = this.state;
    const mainClassName = 'content ' + color;

    return (
      <div>
        <Header updateGlobalColor={ this.updateGlobalColor } />
        <main className={ mainClassName }>
          <About />
          <Projects />
          <Footer />
        </main>
      </div>
    );
  }
}
