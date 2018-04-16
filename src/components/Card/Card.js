import React from 'react';

const Card = ({ name, email, id }) => 
(
  <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-4">
    <img alt="robot" src={`https://robohash.org/${id}?200x200`}/>
    <div>
      <h2>{ name }</h2>
      <p>{ email }</p>
    </div>
  </div>
)

export default Card;