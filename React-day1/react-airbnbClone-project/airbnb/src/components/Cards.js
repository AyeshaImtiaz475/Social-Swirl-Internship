import React from 'react';
import "../App"
const Cards = (props) => {
    console.log(props)
  return (
    <div className='card'>
       {props.openSpots === 0 &&  <div className='card--badge'>SOLD OUT</div>}
        <img src={props.img} />
      <div className='card-stats'>
        <p>&#9733;</p>
        <span>{props.rating}</span>
        <span>{props.reviewCount}</span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className='bold'>From ${props.price}</span>/ person</p>
    </div>
  )
}
export default Cards;