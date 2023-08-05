import React, { useEffect } from 'react';
import '../Styles/Home.css';
import Girl from '../Assets/Girl.jpg'
import Filters from './Filters';
import Product from './Product';
import { getProducts } from '../actions/productAction';
import { useSelector, useDispatch } from 'react-redux'



// const product = {
//     name: 'White Shirt',
//     images: [{url:"https://t3.ftcdn.net/jpg/04/58/26/98/240_F_458269888_MXyWFCmbkH9Lscfzwz9NOAwSuGEY4zSm.jpg"}],
//     price:'₹500',
//     _id: 'usha',
// }


const Home = () => {

    /*------------------------------------------------------------------------------------------------------ */
    const dispatch = useDispatch();
    const { loading, error, products, productsCount } = useSelector(state => state.products);
    console.log(products.length);

    useEffect(() => {
        console.log("state update gets called..");
        // @ts-ignore
        dispatch(getProducts());
    }, [dispatch]);

    /*------------------------------------------------------------------------------------------------------ */

    return (
        <React.Fragment>
            {/* <Navbar /> */}
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
                            <img src={Girl} width="400" height="300" className="d-inline-block align-text-top " />
                        </div>
                    </div>
                </div>
            </div>


            <Filters />
            {/* ----------------------------------------------------------------------------------------------------------------------------------- */}

            <h2 className="homeHeading text-center text-decoration-underline text-dark">HeadPhones For You!</h2>
            <div className="container" id="container" style={{ width: '100%', maxWidth: '90%' }}>
                {products && products.length ? products.map((item) => {
                    console.log("product....", item);
                    return <Product product={item} />
                }) : <div>Loading.....</div>}
            </div>

            {/* ----------------------------------------------------------------------------------------------------------------------------------- */}

        </React.Fragment>
    )
}



export default Home