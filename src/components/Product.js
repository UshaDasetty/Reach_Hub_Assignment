import React from 'react';
import '../Styles/Product.css'
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "#198754",
  size: window.innerWidth < 600 ? 20 : 25,
  isHalf: true,
}

const Product = ({ product }) => {
  return (
    <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
      <Link className="productCard position-relative" to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <button type="button" className="position-absolute bottom-10 end-0 border rounded-circle bg-light m-3 p-2 pt-2 pb-1"><i class="bi bi-heart"></i></button>
        <p>{product.title}</p>
        <div>
          <ReactStars value={product.rating} {...options}/> <span className='text-bold'> (250) </span>
        </div>
        <span>${product.price}</span>
        <button type="button" className=" AddBtn btn btn-light bg-opacity-10 border">Add</button>
      </Link>
    </div>
  )
}

export default Product