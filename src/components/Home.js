import React from 'react'
import Girl from '../Assets/Girl.jpg'
import Product from './Product.js'


const product = {
    name: 'Blue Shirt',
    images: [{Girl}],
    price:'3000',
    _id: 'usha',
}

const Home = () => {
  return (
    <React.Fragment>
        <div className="container">
            <div className="mt-2 bg-danger bg-gradient bg-opacity-25">
                <div className="Offer container d-flex justify-content-batween">
                    <div className="mt-5 OfferText">
                        <div className="badge text-success fs-1 text-wrap w-3">
                            Grab 50% Off On Selected Headphone 
                        </div>
                        <div className="text-center">
                            <button type="button" className=" BuyNow btn btn-success">Buy Now</button>
                        </div>
                    </div>

                    <div className="GirlImage">
                        <img src={Girl} width="400" height="300" class="d-inline-block align-text-top "/>
                    </div>
                </div>
            </div>
        </div>
{/* ----------------------------------------------------------------------------------------------------------------------------------- */}

        <h2 className = "homeHeadind">HeadPhones For You</h2>
        <div className = "container" id = "container">
            <Product product={product} />
        </div>

{/* ----------------------------------------------------------------------------------------------------------------------------------- */}

    </React.Fragment>
  )
}

export default Home