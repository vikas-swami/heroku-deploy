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

   counterHandler = () =>{
       this.setState({counter: this.state.counter + 1})
       localStorage.setItem('counter',this.state.counter);
     }
  render(){
    return (
      <div className="App">
        <button onClick={this.counterHandler}>Click me</button>
        <Card name={this.state.person[0].name} age={this.state.person[0].age}   >
          <h1>
            {localStorage.getItem('counter')}
          </h1>
        </Card>
      </div>
    );
  }
}

export default App;
 