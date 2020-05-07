import React from 'react';



const Card = (props) =>{
    return (
        <div>
            <p>{props.name}{props.age}</p>
            {props.children}
        </div>
    )
}


export default Card;