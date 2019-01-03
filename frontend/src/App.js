import React, { Component } from 'react';
import './App.css';
import KailotusListing from './components/kailotus/KailotusListing';
import InputKailotus from './components/input/InputKailotus';

class App extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                kailotus.fi
              </h1>
            </div>
          </div>
        </div>
        <div className="container">
          <KailotusListing/>
        </div>
        <nav className="navbar is-fixed-bottom">
        <div className="flex-display-with-min-height-325">
          <InputKailotus/>
        </div>
        </nav>
      </div>
    );
  }
}

export default App;
