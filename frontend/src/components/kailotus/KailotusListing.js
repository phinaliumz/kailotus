import React, { Component } from 'react';

class KailotusListing extends Component {

  render() {
    return (
      <div className="tile is-ancestor">
        {this.props.kailotusArray}
      </div>
    );
  }
}

export default KailotusListing;