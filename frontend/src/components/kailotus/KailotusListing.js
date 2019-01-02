import React, { Component } from 'react';
import Kailotus from './Kailotus';

class KailotusListing extends Component {
    render() {
      return (
        <div className="tile is-ancestor is-vertical">
          <div className="columns">
            <div className="column">
              <Kailotus kailotusData="Eka!"/>
            </div>
            <div className="column">
              <Kailotus kailotusData="Toka!"/>
            </div>
            <div className="column">
              <Kailotus kailotusData="Kolmas!"/>
            </div>
            <div className="column">
              <Kailotus kailotusData="Neljäs!"/>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Kailotus kailotusData="Viides!"/>
            </div>
            <div className="column">
              <Kailotus kailotusData="Kuudes!"/>
            </div>
            <div className="column">
              <Kailotus kailotusData="Seitsemäs!"/>
            </div>
            <div className="column">
              <Kailotus kailotusData="Kahdeksas!"/>
            </div>
          </div>
        </div>
      );
    }
}

export default KailotusListing;