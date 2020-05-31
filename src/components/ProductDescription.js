import React from 'react';
const ProductDescription = ({product}) => {
    return ( <div className="row">
    <div className="col image-container">
        <img src={product.imgUrl}/>
    </div>
    <div className="col description-container">
        <div className="price-info">
            <h3>{product.title}</h3>
            <h5 className="subtitle">{product.subTitle}</h5>
            <h4>{product.price}</h4>
        </div>
     
      <hr />
      <div className="recipe-info">
          <h5>
              Description
          </h5>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
         <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          <ul>
              <li>
              Many desktop publishing packages and web page editors now use Lorem Ipsum
              </li>
              <li>
              Various versions have evolved over the years
              </li>
              <li>
              Where can I get some?
              </li>
          </ul>
          </div>
    </div>
</div> );
}
 
export default ProductDescription;