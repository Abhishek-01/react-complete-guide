import React from 'react';

const Car = (props) =>{
    return(
        <div>
            <p>Car Name: {props.name}</p>
            <p>Car Color: {props.color}</p>
            <p>Car Number: {props.number}</p>
        </div>
    )
}

export default Car;