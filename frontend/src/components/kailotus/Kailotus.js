import React, { Component } from 'react';
import './Kailotus.css';

class Kailotus extends Component {
  render() {
    return(
      <g fill="#000000">
        <rect x={this.props.x - 5} y={this.props.y - 25} width="17.5em" height="12.5em" className="kailotus-card"/>
        <text x={this.props.x - 5} y={this.props.y - 30}>X: {this.props.x} Y: {this.props.y} Text: {this.props.kailotusData}</text>
        <text x={this.props.x} y={this.props.y}>{this.props.kailotusData}</text>
      </g>
    );
  }
}

export default Kailotus;