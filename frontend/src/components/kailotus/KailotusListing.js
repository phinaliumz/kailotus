import React, { Component } from 'react';
import Kailotus from './Kailotus';

class KailotusListing extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      // this should load kailotus from backend
    }

    this.state = this.initialState;
  }

  handleSubmit = kailotusData => {
    this.setState({

    });
  }

  render() {
    const { kailotusData } = this.state;
    return (
      <div className="tile is-ancestor is-vertical">
        <div className="columns">
          <div className="column">
            <Kailotus kailotusData={kailotusData}/>
          </div>
        </div>
      </div>
    );
  }
}

export default KailotusListing;