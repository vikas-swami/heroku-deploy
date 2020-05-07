import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './UI/Card';
class App extends Component {
  state = {
    person: [
      { name: 'Max', age: 28}
    ]
  }
  render(){
    return (
      <div className="App">
        <Card name={this.state.person[0].name} age={this.state.person[0].age}>
          <h1>
            vikas
          </h1>
        </Card>
      </div>
    );
  }
}

export default App;
 