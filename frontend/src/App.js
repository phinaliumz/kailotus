import React, { Component } from 'react';
import './App.css';
import KailotusListing from './components/kailotus/KailotusListing';
import InputKailotus from './components/input/InputKailotus';
import Kailotus from './components/kailotus/Kailotus';

class App extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      kailotusArray: []
    }

    this.state = this.initialState;
  }

  handleSubmit = submittedKailotusText => {
    this.pushKailotusToArray(submittedKailotusText.kailotusText);
  }

  pushKailotusToArray(kailotusText) {
    const {kailotusArray} = this.state;
    kailotusArray.push(
      <Kailotus kailotusData={kailotusText} />
    );
    this.setState({
      kailotusArray : kailotusArray
    });
  }

  render() {
    const {kailotusArray} = this.state;
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
          <div className="columns">
            <KailotusListing kailotusArray={kailotusArray}/>
          </div>
        </div>
        <nav className="navbar is-fixed-bottom">
        <div className="flex-display-with-min-height-325">
          <InputKailotus handleSubmit={this.handleSubmit}/>
        </div>
        </nav>
      </div>
    );
  }
}

export default App;
