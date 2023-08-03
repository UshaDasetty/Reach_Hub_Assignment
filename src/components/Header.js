// rafce
import React from 'react'
import logo from '../Assets/Logo.jpg'
import Girl from '../Assets/Girl.jpg'
import '../components/Styles.css'

const Header = () => {
  return (
    <React.Fragment>
        <div className="container">



        <nav className="navbar bg-success text-light mt-2">
            <div className="container-fluid">

                    {/* telephone call */}
                    <a className="navbar-brand text-light" href="#">
                        <i class="bi bi-telephone"><span> </span></i>
                        +001234567890
                    </a>
                

                    <p className="text-center fs-5 mt-3">Get 50% off on Selected Items | Shop Now</p>

                    <div className="dropdown">
                        <button className="btn btn-success dropdown-toggle fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Language
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">English</a></li>
                            <li><a className="dropdown-item" href="#">Hindi</a></li>
                            <li><a className="dropdown-item" href="#">Telugu</a></li>
                        </ul>

                        <button className="btn btn-success dropdown-toggle fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Location
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Hyderabad</a></li>
                            <li><a className="dropdown-item" href="#">Banglore</a></li>
                            <li><a className="dropdown-item" href="#">Chennai</a></li>
                        </ul>
                    </div>
            </div>
        </nav>


{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


        <nav className="navbar navbar-expand-lg mt-3">

            <div className="container-fluid">
                <a className="navbar-brand text-success" href="#">
                   <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top "/>
                    <span className="fs-4 me-3"> ShopCart</span>
                </a>

    
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle fs-5 me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Wired</a></li>
                        <li><a className="dropdown-item" href="#">WireLess</a></li>
                        <li><a className="dropdown-item" href="#">Airpods</a></li>
                    </ul>
                    </li>

            
                    <li className="nav-item">
                    <a className="nav-link active fs-5 me-3" aria-current="page" href="#">Deals</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link fs-5 me-3" href="#">What's New</a>
                    </li>

                    <li className="nav-item fs-5 me-3">
                    <a className="nav-link" href="#">Delivery</a>
                    </li>

                </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control" type="search" placeholder="Search Product" aria-label="Search"/>
                        <i className="bi bi-search mt-2 me-5"></i>
                    </form>

                    <a className="navbar-brand me-5" href="#">
                        <i class="bi bi-person-circle"></i>
                        <span className=""> Account</span>
                    </a>

                    <a className="navbar-brand me-5" href="#">
                        <i class="bi bi-cart3"></i>
                        <span className=""> Cart</span>
                    </a>
                </div>
            </div>
        </nav>


{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


        <div className="mt-2 bg-danger bg-gradient bg-opacity-25">
            <div className="Offer container d-flex justify-content-batween">
                <div className="mt-5 OfferText">
                    <div className="badge text-success fs-1 text-wrap w-3">
                        Grab 50% Off On Selected Headphone 
                    </div>
                    <div>
                        <button type="button" className=" BuyNow btn btn-success">Buy Now</button>
                    </div>
                </div>

                <div className="GirlImage">
                    <img src={Girl} width="400" height="300" class="d-inline-block align-text-top "/>
                </div>
            </div>
        </div>


{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


    </div>
    </React.Fragment>
  )
}

export default Header