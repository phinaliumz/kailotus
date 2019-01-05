import React, { Component } from 'react';

class KailotusListing extends Component {

  render() {
    return (
      <div>
        <svg width="100%" height="45em" xmlns="http://www.w3.org/2000/svg">
          {this.props.kailotusArray}
        </svg>
      </div>
    );
  }
}

export default KailotusListing;