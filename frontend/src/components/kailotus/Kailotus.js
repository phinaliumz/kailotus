import React, { Component } from 'react';

class Kailotus extends Component {
  render() {
    console.log('setting kailotus as ' + this.props.kailotusData);
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