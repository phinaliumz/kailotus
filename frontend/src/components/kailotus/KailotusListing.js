import React, { Component } from 'react';
import './KailotusListing.css';

class KailotusListing extends Component {

  render() {
    return (
      <div className="full-height-container">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {this.props.kailotusArray}
        </svg>
      </div>
    );
  }
}

export default KailotusListing;