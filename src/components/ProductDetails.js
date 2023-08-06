import React, { useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import '../Styles/ProductDetails.css'
import { getProductsDetails } from '../actions/productAction';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';

// const product = {
//   "id": 1,
//   "title": "iPhone 9",
//   "description": "An apple mobile which is nothing like apple",
//   "price": 549,
//   "discountPercentage": 12.96,
//   "rating": 4.69,
//   "stock": 94,
//   "brand": "Apple",
//   "category": "smartphones",
//   "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   "images": [
//     "https://i.dummyjson.com/data/products/1/1.jpg",
//     "https://i.dummyjson.com/data/products/1/2.jpg",
//     "https://i.dummyjson.com/data/products/1/3.jpg",
//     "https://i.dummyjson.com/data/products/1/4.jpg",
//     "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//   ]
// }

const ProductDetails = () => {
  /*------------------------------------------------------------------------------------------------------ */
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const { product } = useSelector(
    (state) => state.productDetails,
  );

  console.log("product....", product);



  useEffect(() => {
    dispatch(getProductsDetails(id));
  }, [dispatch, id]);

  /*---------------
  --------------------------------------------------------------------------------------- */
  return (
    <>
      {renderProductDetails(product)}
    </>
  )
}


const renderProductDetails = (product) => {
  if (Object.keys(product).length === 0) {
    return <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }


  return (
    <div className='container d-flex justify-content-between border'>
      <div className='Images container m-5 border'>
        <div className="ProductImg ms-3">
          <img src={product.thumbnail} width="100%" height="360" className="" />
        </div>
        <div className="d-flex justify-content-start ms-2">
          <img src={product.images[0]} width="22%" height="80" className="m-2" />
          <img src={product.images[2]} width="22%" height="80" className="m-2" />
          <img src={product.images[1]} width="22%" height="80" className="m-2" />
          <img src={product.images[3]} width="22%" height="80" className="m-2" />
        </div>
      </div>

      <div className='Details container m-5 border'>
        <div className=''>
          <h2 className="">{product.title}</h2>
          <p className="text-secondary">{product.description}</p>
          <div className='d-flex justify-content-start'>
            <ReactStars classNames="Rating" value={product.rating} /> <span className='text-bold mt-0 ms-2'> (250) </span>
          </div>
          <hr />
        </div>

        <div>
          <h4 className=''>{`$${product.price} or 99.99/month`}</h4>
          <p className='text-secondary'>Suggested Payments with 6 months special financing</p>
          <hr />
        </div>

        <div>
          <div className='d-flex justify-content-start mb-3'>
            <div className='me-2 Quantity border rounded-pill '>
            <button type="button" class="btn border border-0 rounded-circle">-</button>
              <input type='number' value='1' className=''/>
              <button type="button" class="btn border border-0 rounded-circle">+</button>
            </div>

            <div className='d-block'>
              <p className='mt-1 text-secondary'>{`Only ${product.stock} Items left!, Dont miss it`}</p>
            </div>
          </div>

          <div>
            <button type="button" className=" Btn btn btn-light bg-opacity-10 border m-1">Buy Now</button>
            <button type="button" className=" Btn btn btn-light bg-opacity-10 border m-1">Add to Cart</button>
          </div>
          <hr />
        </div>

        <div className="border border-start-0">
          <div>
            <h6><i className="bi bi-truck me-2"></i>Free Delivery</h6>
            <a className="text-secondary" href="#">Enter your postal code for delivery available</a>
          </div>
          <hr />
          <div>
            <h6><i className="bi bi-arrow-return-right me-2"></i>Return Delivery</h6>
            <a className="text-secondary" href="#">Free 30 days return delivery, Details</a>
          </div>
        </div>

        <div>

        </div>
      </div>

    </div>
  )


}

export default ProductDetails