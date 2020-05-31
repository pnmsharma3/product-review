import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { DropdownButton, Dropdown } from 'react-bootstrap';

import CommentForm from './CommentForm';
import CommentList from './CommentList';
import StarRating from './StarRating';

const ReviewList = ({ reviews, submitComment, isLoggedIn }) => {
    const [showForm, setShowForm] = useState(false);
    const [showCommentsId, setShowCommentsId] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [showFormId, setShowFormId] = useState(null);

    const [reviewList, setSeviewList] = useState([]);

    useEffect(() => {
        setSeviewList(reviews)
    }, [reviews]);
    const handleSorting = (order) => {
        let sortedArray = reviews.sort(function (a, b) {
            if (order === 'Ascending') {
                return a.starRating - b.starRating;
            } else return (b.starRating - a.starRating);
        });
        setSeviewList(sortedArray)
        setSortBy(order)

    }
    return (
        <>
        {reviewList.length>1 &&
        <div className="d-flex">
        <label className="pr-2">Sort rating by: </label>
            <DropdownButton id="dropdown-basic-button"  size="sm" title={sortBy||'Sort by'} variant="light">
                <Dropdown.Item onClick={() => handleSorting('Ascending')}> Ascending</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSorting('Descending')}> Descending</Dropdown.Item>
            </DropdownButton>
        </div>
}
          <div className={`${reviewList.length>5?'add-scroll':'' } r-l`}>
            {reviewList.map((review, i) => <div key={i} >
                <div className="review pt-3">
                    <h4><FaUserCircle className="pr-3" size={50} />{review.user_name}</h4>
                    <div className="pl-5">
                        <StarRating rating={review.starRating} size={30} />

                        <h5 className="pt-1">{review.heading}</h5>
                        <p>{review.review}</p>
                        <p className="float-right"> {review.createdAt}</p>
                        { isLoggedIn && (showFormId!==i)&& <button className="btn  btn-outline-info" onClick={() => {setShowForm(true); setShowFormId(i)}}> Add comment</button>
                        }
                        {showForm && isLoggedIn && (showFormId===i)&&<CommentForm onCommentSubmit={(comment) => { setShowForm(false);setShowFormId(null); submitComment({ comment, reviewId: review._id }) }} />
                        }
                        {
                        !!review.comments.length ?
                                <div className="mt-4">{review.comments.length} <span className="pl-1">comments</span>
                                    <button className="btn btn-secondary btn-sm ml-2" onClick={() => setShowCommentsId(showCommentsId===i?null:i)}>{showCommentsId!==i ? 'Show comments' : 'Hide comments'}</button> </div> : null
                        }{!!review.comments.length && (showCommentsId===i ) &&
                            <CommentList comments={review.comments} />
                        }

                    </div>

                </div>

            </div>)
            }
            </div>
        </>

    );
}

export default ReviewList;