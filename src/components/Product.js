import React from 'react';
import '../Styles/Product.css'
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
}

const Product = ({ product }) => {
  console.log("in prod comppp", product);
  return (
    <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
      <Link className="productCard" to={product.id}>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.title}</p>
        <div>
          <ReactStars value={product.rating} /> <span className='text-bold mt-2'> (250) </span>
        </div>
        <span>${product.price}</span>
        <button type="button" className=" AddBtn btn btn-light bg-opacity-10 border">Add</button>
      </Link>
    </div>
  )
}

export default Product