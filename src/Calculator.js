import React, {Component} from 'react';

export class Calculator extends Component {

  state = {
    val1: '',
    val2: '',
    operation: ''
  };

  handleChange = (event) => {
    this.setState(
      {[event.target.name]: event.target.value}
    )
  };

  calculate = () => {
    switch (this.state.operation) {
      case '+' : {
        return +this.state.val1 + +this.state.val2;
      }
      case '-' : {
        return +this.state.val1 - +this.state.val2;
      }
      case '/' : {
        return +this.state.val1 / +this.state.val2;
      }
      case '*' : {
        return +this.state.val1 * +this.state.val2;
      }
    }
  };


  showResult = () => {
    return <h2> {this.state.val1} {this.state.operation} {this.state.val2} = {this.calculate()}</h2>;
  };

  render() {
    return (
      <div>
        <input type="radio" name="operation" value="+" onChange={this.handleChange}/> +
        <input type="radio" name="operation" value="-" onChange={this.handleChange}/> -
        <input type="radio" name="operation" value="/" onChange={this.handleChange}/> /
        <input type="radio" name="operation" value="*" onChange={this.handleChange}/> *
        <br/>
        <input type="number" name="val1" placeholder="Value 1" value={this.state.val1} onChange={this.handleChange}/>
        <input type="number" name="val2" placeholder="Value 2" value={this.state.val2} onChange={this.handleChange}/>
        {this.showResult()}
      </div>
    )
  }
}