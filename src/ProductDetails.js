import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductDescription from './components/ProductDescription';
import ReviewForm from './components/ReviewForm'
import { useParams } from "react-router-dom";
import ReviewList from './components/ReviewList';

const ProductDetails = (props) => {
    let { slug } = useParams();
    const [product, setProduct] = useState([])
    const [productReviews, setProductReviews] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    const [isReviewSubmited, setIsReviewSubmited] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const url = `/products/${slug}`;
            const { data } = await axios(url);
            setProduct(data || []);
            // current user
            let user = localStorage.getItem('user');
            setCurrentUser(JSON.parse(user));
            getReviews(data._id);
        }
        fetchData();
    }, [slug]);

    const getReviews = async (id) => {
        const url = `/review?product_id=${id}`;
        const { data } = await axios(url);
        console.log('reddata', data.data)
        setProductReviews(data.data)
        // /review?user_id=cMY5BpviAi3ZnkHc&product_id=7DeU3dLYUr7JAgeJ

    }
    console.log('currentUser', currentUser)
    const submitReview = async (review) => {
        setIsReviewSubmited(true)
        let reviewDetails = {
            ...review,
            user_id: currentUser._id,
            user_name: currentUser.name,
            product_id: product._id
        }
        // const { data } = await axios.post(`${props.ApiHost}api/order`, {
        const { data } = await axios.post(`/review`, { ...reviewDetails })
        console.log('data', data)
    }




    return (
        <div className="container mt-10">
            <ProductDescription product={product} />
            {/* review */}
            {/* <span className="pl-5"> 10  Reviews</span> */}
            <div className="row pt-5 review-container">
                <h3 className="pl-2"> Customer Reviews</h3>

                <div className="col-12 create-review-container">
                    <hr />
                   
                    {!isReviewSubmited && !!currentUser && <ReviewForm submitReview={(review) => submitReview(review)} />}
                    {!!productReviews.length &&
                        <ReviewList reviews={productReviews} />
                    }

                </div>

            </div>
        </div>

    );
}

export default ProductDetails;