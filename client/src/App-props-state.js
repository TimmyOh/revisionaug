import React, { Component } from 'react';
import './App.css';
import Greet from './Greet';
import MultiGreet from './MultiGreet';

// const Greet = props => {
//   return <h1>{props.message}</h1>;
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      greeting: 'A stateful greeting',
      greets: [
        { msg: 'Good morning' },
        { msg: 'Good night' },
        { msg: 'Goodbye' }
      ],
      fxreturnvalue: ''
    };
  }

  handleClick = () => {
    // alert('howdy handsomes');
    this.setState({ fxreturnvalue: 'cool' });
    alert(this.state.fxreturnvalue);
  };

  render() {
    return (
      <div className="App">
        <Greet message="Hi there" />
        {this.state.greeting}
        <ul className="nobullets">
          {this.state.greets.map(greeting => {
            return <li>{greeting.msg}</li>;
          })}
        </ul>
        <MultiGreet greets={this.state.greets} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
