import React, { Component } from 'react';
import './App.css';

const Greet = props => {
  let { message1, message2, handleClick } = props;
  return (
    <div>
      <h1>{message1}</h1>
      <p />
      <h2>{message2}</h2>
      <p />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      movietitle: undefined
    };
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    alert(this.state.movietitle);
  };

  handleChange = e => {
    //this.setState({ movietitle: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    alert(this.state.movietitle);
  };

  render() {
    return (
      <div className="App">
        <Greet
          message1="Hi there"
          message2="Great"
          handleClick={this.handleClick}
        />
        <form onSubmit={this.onSubmit}>
          <label>{this.state.movietitle}</label>
          <p />
          <input type="text" name="movietitle" onChange={this.handleChange} />
          <p />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
