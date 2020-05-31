import React, { useState } from 'react';
import { FaUserCircle, FaStar } from 'react-icons/fa';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

const yellowColor = '#ffc107';
const grayColor = '#e4e5e9';

const ReviewList = ({ reviews, submitComment, isLoggedIn }) => {
    const [showForm, setShowForm] = useState(false);
    const [showComments, setShowComments] = useState(false);

    return (
        <>
            {reviews.map((review, i) => <div key={i}>
                <div className="review pt-3">
                    <h4><FaUserCircle className="pr-3" size={50} />{review.user_name}</h4>
                    <div className="pl-5">
                        {[...Array(5)].map((arr, i) => {
                            const ratingVal = i + 1;
                            return (
                                <FaStar className="star" key={i}
                                    color={ratingVal <= review.starRating ? yellowColor : grayColor}
                                    size={30}
                                />
                            )
                        }
                        )}

                        <h5>{review.heading}</h5>
                        <p>{review.review}</p>
                        <p className="float-right"> {review.createdAt}</p>
                        {!showForm && isLoggedIn && <button className="btn  btn-outline-info" onClick={() => setShowForm(true)}> Add comment</button>
                        }
                        {showForm && isLoggedIn && <CommentForm onCommentSubmit={(comment) => { setShowForm(false); submitComment({ comment, reviewId: review._id }) }} />
                        }
                        {
                            !!review.comments.length ?
                                <div className="mt-4">{review.comments.length} <span className="pl-1">comments</span>
                                    <button className="btn btn-secondary btn-sm ml-2" onClick={() => setShowComments(!showComments)}>{!showComments ? 'Show comments' : 'Hide comments'}</button> </div> : null
                        }{!!review.comments.length && showComments &&
                            <CommentList comments={review.comments} />
                        }

                    </div>

                </div>

            </div>)
            }
        </>

    );
}

export default ReviewList;