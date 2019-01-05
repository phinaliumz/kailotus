import React, { Component } from 'react';
import './InputKailotus.css';

class InputKailotus extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      kailotusText : ''
    }

    this.state = this.initialState;
  }

  submitKailotus = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  handleChange = event => {
    const {kailotusText, value} = event.target;

    this.setState({
      kailotusText : value
    });
  }

  render() {
    const {kailotusText} = this.state;

    return(
      <form className="full-width" onSubmit={this.submitKailotus}>
        <div className="field has-addons has-addons-centered">
          <p className="control">
            <input
              className="input"
              type="text"
              name="kailotusText"
              placeholder="Syötä kailotuksesi tähän"
              value = {kailotusText}
              onChange = {this.handleChange}
              >
            </input>
          </p>
          <p className="control">
            <button
              type="button"
              className="button is-primary"
              value="Submit"
              onClick={this.submitKailotus}>
              Klikkaa kailottaaksesi!
            </button>
          </p>
        </div>
      </form>
    );
  }
}

export default InputKailotus;