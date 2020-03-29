import React, { Component } from 'react';
import './App.css';
import './Person/person.css'
import Person from './Person/person';

class App extends Component {
  state = {
      persons : [
          {name : "abhi", age: "100"},
          {name : "hello", age: "90"},
          {name : "James", age: "65"}
      ]
  };

  switchNameHandler = (newName, newAge) => {
      this.setState({persons: [{name : newName, age: newAge}]});
  }

  changeName = (event) =>{
      this.setState({persons: [{name : event.target.value, age: 100}]});
  }

    render (){
      const buttonStyle = {
        background: 'red'
      }

      return(
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>React App Working</p>
        <button style={buttonStyle} onClick={() => this.switchNameHandler('Hello Abhishek!', '32')}>Click Me!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this, 'Hello Abhi', '40')}
        changeName={this.changeName}/>
      </div>
      )};
}

export default App;
