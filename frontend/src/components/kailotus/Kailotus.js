import React, { Component } from 'react';

class Kailotus extends Component {
  render() {
    const kailotusData = this.props.kailotusData;
    return(
      <div className="card has-background-white-ter">
        <div className="card-content">
          {kailotusData}
        </div>
      </div>
    );
  }
}

export default Kailotus;