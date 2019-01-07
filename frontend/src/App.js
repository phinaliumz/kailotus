import React, { Component } from 'react';
import './App.css';
import KailotusListing from './components/kailotus/KailotusListing';
import InputKailotus from './components/input/InputKailotus';
import Kailotus from './components/kailotus/Kailotus';

class App extends Component {

  static coordinateMultiplierForDrawing = 0.85;

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
      <Kailotus x={this.randomX(
        document.getElementById('kailotus-listing').clientWidth
        )} y={this.randomY(
        document.getElementById('kailotus-listing').clientHeight
          )} kailotusData={kailotusText} />
    );
    this.setState({
      kailotusArray : kailotusArray
    });
  }

  randomX(screenWidth) {
    return Math.random() * (screenWidth * App.coordinateMultiplierForDrawing);
  }

  randomY(screenHeight) {
    return Math.random() * (screenHeight * App.coordinateMultiplierForDrawing);
  }

  render() {
    const {kailotusArray} = this.state;
    return (
      <div className="full-height-container">
        <div className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                kailotus.fi
              </h1>
            </div>
          </div>
        </div>
        <div id="kailotus-listing" className="container is-fluid borders is-full-height-kailotus-container">
          <KailotusListing kailotusArray={kailotusArray}/>
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
