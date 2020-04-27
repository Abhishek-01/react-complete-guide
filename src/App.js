import React, { Component } from 'react';
import './App.css';
import './Person/person.css'
import Person from './Person/person';

class App extends Component {
  state = {
      persons : [
          {id: 1, name : "ABC", age: "10"},
          {id: 2, name : "DEF", age: "25"},
          {id: 3, name : "DHI", age: "46"}
      ]
  };

  changeNameEventHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
          if(p.id === id)
              return true;
      });

      const person = {
          ...this.state.persons[personIndex]
      };
      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons: persons});
  }

  deleteNameEventHandler = (id) => {
   const persons = [...this.state.persons];
   persons.splice(id, 1);
   this.setState({persons: persons});
  }

    render (){
      const buttonStyle = {
        background: 'red'
      }

      return(
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>React App Running</p>

        {this.state.persons.map((person,index) => (
            <Person name={person.name} age={person.age} key={person.id} changeName={(event) => this.changeNameEventHandler(event, person.id)}
            click={() => this.deleteNameEventHandler(index)}/>
        ))}
      </div>
      )};
}

export default App;
