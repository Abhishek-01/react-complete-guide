import React, { useState } from 'react';
import './App.css';
import Person from './Person/person';
import Car from './Car/car';

const app = (props) => {
  const [personState, setPersonsState] = useState({
      persons : [
          {name : "abhi", age: "100"},
          {name : "hello", age: "90"},
          {name : "James", age: "65"}
      ]
  });

  const [carState, setCarState] =  useState({
     name : "Honda Accord",
     color : "Blue",
     number : "XXYYZZZ"
  });

  const switchNameHandler = () =>{
      setPersonsState({persons: [{name : "abhishek", age: "33"},{name : "hello", age: "90"},
              {name : "James", age: "65"}]});
  }

  const switchNumberHandler = () => {
      setCarState({
          name : "Honda Accord",
          color : "Blue",
          number : "AAABBCCC"
      })
  }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>React App Working</p>
        <button onClick={switchNameHandler}>Click Me!</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies Are: Reading and Entreprenurship</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age} />

        <button onClick={switchNumberHandler}>Click Me!</button>
        <Car name={carState.name} color={carState.color} number={carState.number}></Car>
      </div>
    );
}

export default app;
