import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import StarRating from './StarRating';
const ReviewList = ({ reviews }) => {
    // FaUserCircle
    console.log('reviewsreviewsreviews', reviews)
    return (
        <>
            {reviews.map((review, i) => <div key={i}>
                <div className="review pt-3">
                    <h4><FaUserCircle className="pr-3" size={50} />{review.user_name}</h4>
                    <div className="pl-5">
                        <StarRating rating={review.starRating} size={30}/> <h5>{review.heading}</h5>
                        <p>{review.review}</p>
                        <p className="float-right"> {review.createdAt}</p>

                    </div>

                </div>

            </div>)
            }
        </>

    );
}

export default ReviewList;