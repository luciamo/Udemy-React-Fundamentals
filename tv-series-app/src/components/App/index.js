import React, { Component } from 'react';
import Intro from '../Intro';
import Series from '../../container/Series'
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Minha lista de séries</h1>
        </header>
        <Intro message="Aqui você encontra as suas séries <3"/>
        <Series />
      </div>
    );
  }
}

export default App;
