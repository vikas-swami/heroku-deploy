import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './UI/Card';
const App = props =>   {
  const [personState, setOtherstate] = useState('some other'); 

  // state = {
  //   person: [
  //     { name: 'Max', age: 28}
  //   ],
  //   counter: 1
  // }

   const counterHandler = () =>{
       personState('new')
     }
  // render(){
    return (
      <div className="App">
        <button onClick={counterHandler}>Click me</button>
        {/* <Card name={this.state.person[0].name} age={this.state.person[0].age}   > */}
          <h1>
            {personState}
          </h1> 
        {/* </Card> */}
      </div>
    );
  }
// }

export default App;
 