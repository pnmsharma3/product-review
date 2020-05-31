import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
const yellowColor = '#ffc107';
const grayColor = '#e4e5e9';
const AvgRating = ({ reviews, size }) => {
    const [avgRating, setAvgRating] = useState(null);

    useEffect(() => {
        const totalRatings = reviews.reduce((a, c) => {
            return (a = a + c.starRating)
        }, 0)

        const totalReview = reviews.length;
        const ratingAvg = (totalRatings / totalReview).toFixed(1)

        const roundedAvg = Math.round(ratingAvg * 2) / 2;
        console.log('roundedAvg', roundedAvg)
        setAvgRating(roundedAvg);
    }, [reviews]);

    return (<div>
        {!!avgRating && [...Array(5)].map((arr, i) => {
            const ratingVal = i + 1;
            const IsInt = Number.isInteger(avgRating)
            if (IsInt) {
                return (
                    <FaStar className="star" key={i}
                        color={ratingVal <= avgRating ? yellowColor : grayColor}
                        size={size}
                    />)
            } else {
                const wholeInteger = Math.floor(avgRating);
                if (ratingVal <= wholeInteger) {
                    return (
                        <FaStar className="star" key={i}
                            color={yellowColor}
                            size={size}
                        />
                    )
                }
                if (ratingVal === wholeInteger + 1) {
                    return (
                        <FaStarHalfAlt className="star" key={i}
                            color={yellowColor}
                            size={size}
                        />
                    )
                } else if (ratingVal > wholeInteger + 1) {
                    return (
                        <FaStar className="star" key={i}
                            color={grayColor}
                            size={size}
                        />
                    )
                }


            }

        }
        )}

    </div>);
}

export default AvgRating;