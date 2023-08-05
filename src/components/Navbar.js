import React from 'react'
import logo from '../Assets/Logo.jpg'

const Navbar = () => {
  return (
    <React.Fragment>
        <div className="container">
            <nav className="navbar navbar-expand-lg mt-3">

                <div className="container-fluid">
                    <a className="navbar-brand text-success" href="/">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top "/>
                        <span className="fs-4 me-3"> ShopCart</span>
                    </a>


                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle fs-6 me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Wired</a></li>
                            <li><a className="dropdown-item" href="#">WireLess</a></li>
                            <li><a className="dropdown-item" href="#">Airpods</a></li>
                        </ul>
                        </li>


                        <li className="nav-item">
                        <a className="nav-link active fs-6 me-3" aria-current="page" href="#">Deals</a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link fs-6 me-3" href="#">What's New</a>
                        </li>

                        <li className="nav-item fs-6 me-3">
                        <a className="nav-link" href="#">Delivery</a>
                        </li>

                    </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control" type="search" placeholder="Search Product" aria-label="Search"/>
                            <i className="bi bi-search mt-2 me-5"></i>
                        </form>

                        <a className="navbar-brand me-5" href="#">
                            <i className="bi bi-person-circle"></i>
                            <span className=""> Account</span>
                        </a>

                        <a className="navbar-brand me-5" href="#">
                            <i className="bi bi-cart3"></i>
                            <span className=""> Cart</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </React.Fragment>
  )
}

export default Navbar