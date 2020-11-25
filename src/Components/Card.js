import React from 'react';

const Cards=(props)=>{
    return(
        <div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
        <img src={ `https://robohash.org/${props.id}?200X200`} alt="robo"></img>
        <h3>{props.name}</h3>
        <p>{props.email}</p>
        </div>
    )

}
export default Cards;