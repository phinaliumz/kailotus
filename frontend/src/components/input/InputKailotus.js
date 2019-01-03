import React, { Component } from 'react';
import './InputKailotus.css';

class InputKailotus extends Component {
  render() {
    return(
      <form className="full-width">
        <div className="field has-addons has-addons-centered">
          <p className="control">
            <input className="input" type="text" placeholder="Syötä kailotuksesi tähän"></input>
          </p>
          <p className="control">
            <button className="button is-primary">Klikkaa kailottaaksesi!</button>
          </p>
        </div>
      </form>
    );
  }
}

export default InputKailotus;