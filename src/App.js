import React, {Component} from 'react';
import './App.css';

import { Calculator } from './Calculator';
import { Spierdalam } from './Spierdalam';

class App extends Component {

  state = {
    username: ''
  };

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.setState(
      {username: 'hehehe'}
    )
  };

  handleChange = (event) => {
    this.setState(
      {[event.target.name]: event.target.value}
    )
  };

  showHello = () => {
    return <h2>Hello {this.state.username}</h2>;
  };

  render() {
    return (
      <div className="App">
        <label>WAT is your name!?!?</label>
        <br/>
        <input type="text" name="username" placeholder="Your name" value={this.state.username} onChange={this.handleChange}/>
        <br/>
        <button type={'button'} onClick={this.handleClick}>Save</button>
        {this.showHello()}

        {/*{new Calculator().render()}*/}

        <Calculator/>

        <Spierdalam/>

      </div>
    );
  }
}

export default App;
