import React, { useState, useEffect, useRef } from 'react';
import StartRating from './components/StartRating'
let product = {
    title: 'Best vegetable  abc',
    subTitle: "Sweet italian sausage, cheese, tomato sauce, lasagna noodles",
    price: "$20"
}
const ProductDetails = () => {
    return (
        <div className="container mt-10">
            <div className="row">
                <div className="col image-container">
                    <img src="/image-1.jpeg" />
                </div>
                <div className="col description-container">
                    <div className="price-info">
                        <h3>{product.title}</h3>
                        <h5 className="subtitle">{product.subTitle}</h5>
                       
                        <h4>{product.price}</h4>
                        <hr />
                    </div>

               


                </div>

            </div>
              i am pro
        </div>

    );
}

export default ProductDetails;