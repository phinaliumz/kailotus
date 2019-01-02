import React, { Component } from 'react';

class InputKailotus extends Component {
  render() {
    return(
      <form className="is-centered">
        <div className="field has-addons has-addons-centered">
          <p className="control">
            <input className="input" type="text" placeholder="Syötä kailotuksesi tähän"></input>
          </p>
          <p className="control">
            <button className="button is-primary">Kailota!</button>
          </p>
        </div>
      </form>
    );
  }
}

export default InputKailotus;