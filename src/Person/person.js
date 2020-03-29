import React from 'react';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and My Age is {props.age}</p>
            <p>{props.children}</p>
            <input onChange={props.changeName} value={props.name} />
        </div>
    )
}

export default person;