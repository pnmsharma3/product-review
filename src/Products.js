import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const Products = () => {
  let products = [{
    title: 'Best vegetable  abc',
    subTitle: "Sweet italian sausage, cheese, tomato sauce, lasagna noodles",
    price: "$20"
  },
  {
    title: 'Best vegetable  lasagne',
    subTitle: "Sweet italian sausage, cheese, tomato sauce, lasagna noodles",
    price: "$20"
  },
  {
    title: 'Best vegetable Lasagna',
    subTitle: "Sweet italian sausage, cheese, tomato sauce, lasagna noodles",
    price: "$20"
  },
  {
    title: 'Best vegetable  abc',
    subTitle: "Sweet italian sausage, cheese, tomato sauce, lasagna noodles",
    price: "$20"
  },
  {
    title: 'Best vegetable  abc',
    subTitle: "Sweet italian sausage, cheese, tomato sauce, lasagna noodles",
    price: "$20"
  }, {
    title: 'Best vegetable  abc', subTitle: "Sweet italian sausage, cheese, tomato sauce, lasagna noodles",
    price: "$20"
  }
    , {
    title: 'Best vegetable  abc',
    subTitle: "Sweet italian sausage, cheese, tomato sauce, lasagna noodles",
    price: "$20"
  }, {
    title: 'Best vegetable  abc',
    subTitle: "Sweet italian sausage, cheese, tomato sauce, lasagna noodles",
    price: "$20"
  }]
  return (<div className="container mt-10">
    {/* <h2>Products</h2> */}
    <div className="row row-cols-1 row-cols-md-3">
      {products.map((product, index) =>
     
        <Link to={`/product/${product.id}`} >
          <div className="col mb-4" key={index}>
            <div className="card">
              <img src={`image-${index}.jpeg`} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <p className="card-text float-right">{product.price} </p>
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  {product.subTitle}
                </p>
              </div>
            </div>
          </div>
        </Link>)}
    </div>

  </div>);
}

export default Products;