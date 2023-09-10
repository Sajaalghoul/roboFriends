import React from "react";

const Card =({name,email,id})=>{//{}destructuring from the props object so it is easier to use them instead of props.name=> name
    return(
        <div className="tc bg-light-green dib br3 pa2 ma3 grow bw2 shadow-5">
            <img alt='robots' width={'200px'} src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            
        </div>
    )
};
export default Card;