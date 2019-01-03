import React, { Component } from 'react';

class Kailotus extends Component {
  render() {
    return(
      <div className="card has-background-white-ter">
        <div className="card-content">
          {this.props.kailotusData}
        </div>
      </div>
    );
  }
}

export default Kailotus;