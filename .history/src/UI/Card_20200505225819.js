import React from 'react';



const Card = (props) =>{
    return (
        <div>
            <p>{props.name}</p>
            {props.children}
            {props.children}
        </div>
    )
}


export default Card;