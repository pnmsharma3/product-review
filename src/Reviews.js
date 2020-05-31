import React, { useState, useEffect } from 'react';
import ReviewList from './components/ReviewList';
import AvgRating from './components/AvgRating';
import ReviewForm from './components/ReviewForm'

const Reviews = ({ reviews, isLoggedIn, onReviewCreate, onCommentCreate }) => {

    const [isReviewSubmited, setIsReviewSubmited] = useState(false);

    useEffect(() => {
        setIsReviewSubmited(false);
    }, [reviews]);


    return (<div className="row pt-5 review-container">
        <h3 className="pl-2 pb-2 col-12 border-bottom border-info"> Customer Reviews</h3>
        {!!reviews.length ? <AvgRating reviews={reviews} size={30} /> :
            <p className="pl-2"> No review till now</p>}

        <div className="col-12 create-review-container">
            {!isReviewSubmited && isLoggedIn && <ReviewForm
                submitReview={(review) => { onReviewCreate(review); setIsReviewSubmited(true) }}
            />}
            <hr />
            {!!reviews.length &&
                <ReviewList
                    reviews={reviews}
                    isLoggedIn={isLoggedIn}
                    submitComment={({ comment, reviewId }) => onCommentCreate({ comment, reviewId })}
                />
            }

        </div>

    </div>);
}

export default Reviews;