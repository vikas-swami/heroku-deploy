import React from 'react';



const Card = (props) =>{
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.children}</p>
        </div>
    )
}


export default Card;