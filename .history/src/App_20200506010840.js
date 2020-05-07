import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './UI/Card';
class App extends Component {
  state = {
    person: [
      { name: 'Max', age: 28}
    ],
    counter: 1
  }

   counterHandler = (counter) =>{
       this.setState({counter: counter})
      //  localStorage.setItem('counter',this.state.counter);
     }

  render(){
    return (
      <div className="App">
        <button onClick={this.counterHandler.bind(this, this.state.counter + 2)}>Click me</button>
        <Card name={this.state.person[0].name} age={this.state.person[0].age}   >
          <h1>
            {this.state.counter}
          </h1>
        </Card>
      </div>
    );
  }
}

export default App;
 