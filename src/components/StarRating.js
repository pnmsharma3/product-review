import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
    {/* <FaStarHalfAlt/> */}
const StarRating = ({rating,size}) => {
    console.log('ratingratingrating',rating)
    return ( 
        <>
           {[...Array(5)].map((arr, i) => {
                const ratingVal = i + 1;
                return (<label key={i}>
                    <input type="radio"
                        name="rating"
                        value={rating}
                       />
                    <FaStar className="star"
                        color={ratingVal <= rating? '#ffc107' : '#e4e5e9'}
                        size={size}
                    />
                </label>
                )
            }
            )}
        </>

     );
}
 
export default StarRating;