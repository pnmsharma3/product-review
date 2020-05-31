import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductDescription from './components/ProductDescription';
import { useParams } from "react-router-dom";
import Reviews from './Reviews';

const ProductDetails = (props) => {
    let { slug } = useParams();
    const [product, setProduct] = useState([])
    const [productReviews, setProductReviews] = useState([])
    const [currentUser, setCurrentUser] = useState(null)


    useEffect(() => {
        async function fetchData() {
            const url = `${props.API_URL}/products/${slug}`;
            const { data } = await axios(url);
            setProduct(data || []);
            getReviews(data._id);
            let user = localStorage.getItem('user');
            setCurrentUser(JSON.parse(user));
        }
        fetchData();
    }, [slug]);

    useEffect(() => {
        setCurrentUser(props.user);
      }, [props.user]);

    const getReviews = async (id) => {
        const url = `${props.API_URL}/review?product_id=${id}&$sort[createdAt]=-1`;
        const { data } = await axios(url);
        setProductReviews(data.data)

    }
    const onReviewSubmit = async (review) => {
        let reviewDetails = {
            ...review,
            user_id: currentUser._id,
            user_name: currentUser.name,
            product_id: product._id,
            comments:[]
        }
        const { data } = await axios.post(`${props.API_URL}/review`, { ...reviewDetails })
        getReviews(product._id);

    }
    const onCommentSubmit =async(comment,reviewId)=>{

        const currentReview=productReviews.filter(re=>re._id===reviewId);
        let userComment = {
            comment:comment,
            user_id: currentUser._id,
            user_name: currentUser.name,
        }
        const editedComments=[...currentReview[0].comments,userComment]
        const url = `${props.API_URL}/review?_id=${reviewId}`;
        const data=await axios.patch(url, {comments:editedComments});
        getReviews(product._id);
    }

    return (
        <div className="container mt-10">
            <ProductDescription product={product} />
          
            <Reviews reviews={productReviews} 
            isLoggedIn={!!currentUser}
            onReviewCreate={(review)=>onReviewSubmit(review)}
            onCommentCreate={({comment,reviewId})=>onCommentSubmit(comment,reviewId)} 
            />
        </div>

    );
}

export default ProductDetails;