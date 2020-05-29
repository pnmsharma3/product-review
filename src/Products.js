import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


const Products = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
        const {data} = await axios(`products`);
        setProducts(data.data || []);
    }
    fetchData();
  }, []);
  return (<div className="container mt-10">
    {/* <h2>Products</h2> */}
    <div className="row row-cols-1 row-cols-md-3">
      {products.map((product, index) =>
        <Link to={`/product/${product._id}`} key={index}>
          <div className="col mb-4" >
            <div className="card">
              <img src={product.imgUrl} className="card-img-top" alt={product.title} />
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