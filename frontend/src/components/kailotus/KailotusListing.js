import React, { Component } from 'react';
import Kailotus from './Kailotus';

class KailotusListing extends Component {

  state = {
    arrayOfKailotus: []
  };

  render() {
    const { kailotusData } = this.state;
    const builtKailotusArray = this.getBuiltKailotusArray();
    return (
      <div className="tile is-ancestor is-vertical">
        {builtKailotusArray}
      </div>
    );
  }

  getBuiltKailotusArray() {
    let kailotusArray = []
    if (kailotusArray.length === 0) {
      kailotusArray.push(
        <div className="columns">
          <div className="column">
            <Kailotus kailotusData="Ei vielä kailotuksia!" />
          </div>
        </div>
      );
    }
    return kailotusArray;
  }
}

export default KailotusListing;