import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  state = {
      persons : [
          {name : "abhi", age: "100"},
          {name : "hello", age: "90"},
          {name : "James", age: "65"}
      ]
  };

  switchNameHandler = () =>{
      this.setState({persons: [{name : "abhishek", age: "33"},{name : "hello", age: "90"},
              {name : "James", age: "65"}]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>React App Working</p>
        <button onClick={this.switchNameHandler}>Click Me!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies Are: Reading and Entreprenurship</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
