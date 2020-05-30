import React, { useState, useEffect } from 'react';
import StarRating from './StarRatingForm';

const ReviewForm = ({ submitReview }) => {
    const [heading, setHeading] = useState('');
    const [review, setReview] = useState('');
    const [showForm, setShowForm] = useState(false);



    const [starRating, setStarRating] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        let customerReview = { starRating, heading, review }
        submitReview(customerReview)
    }
    return (
        <>    {!showForm &&
            <button className="btn btn-warning" onClick={() => setShowForm(true)}> Add your review</button>
        }
            {showForm &&
                <form className="review-form" noValidate onSubmit={handleSubmit}>
                    <h5>Add your review</h5>
                    <div className="form-group">
                        <StarRating starRating={(rating) => setStarRating(rating)} />
                    </div>


                    <div className="form-group">
                        <label >Add a headline</label>
                        <input type="text" className="form-control" placeholder="What's most important to know?"
                            onChange={(e) => setHeading(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label >Write your review</label>
                        <textarea className="form-control" rows="3"
                            placeholder="What did you like or dislike?"
                            onChange={(e) => setReview(e.target.value)}
                        ></textarea>
                    </div>
                    <button className="btn btn-warning" type="submit">submit</button>
                    <hr />
                </form>

            }

        </>
    );
}

export default ReviewForm;