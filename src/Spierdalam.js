import React, {Component} from 'react';

export class Spierdalam extends Component {

  state = {
    x: 0,
    y: 0
  };

  spierdol = () => {
    console.log(this.getWindowHeight(), this.getWindowWidth());
    this.setState(
      {
        x: Math.random() * this.getWindowWidth(),
        y: Math.random() * this.getWindowHeight()
      }
    );
  };

  getWindowHeight() {
    return document.body.scrollHeight;
  }

  getWindowWidth() {
    return document.body.scrollWidth;
  }

  render() {
    return (
      <button className="spierdalam-btn" style={{top: this.state.y, left: this.state.x}}
              onMouseEnter={this.spierdol}>

        <img src="http://i0.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg" width="100px"/>

      </button>
    );
  }
}