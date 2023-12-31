import React from 'react'

const Filters = () => {
  return (
    <React.Fragment>
        <div className="container">
             <div className="container mt-3">

                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                            <ul>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle rounded-pill bg-secondary bg-gradient bg-opacity-25" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="ps-3"> Categories </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Mobiles</a></li>
                                    <li><a className="dropdown-item" href="#">Laptops</a></li>
                                    <li><a className="dropdown-item" href="#">Perfumes</a></li>
                                    <li><a className="dropdown-item" href="#">Fragrances</a></li>
                                    <li><a className="dropdown-item" href="#">Skin Care</a></li>
                                    <li><a className="dropdown-item" href="#">Groceries</a></li>
                                    <li><a className="dropdown-item" href="#">Home Decoration</a></li>
                                </ul>
                            </li>
                            </ul>

                            <ul>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle rounded-pill bg-secondary bg-gradient bg-opacity-25" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="ps-3"> Price </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">₹100 - ₹250</a></li>
                                    <li><a className="dropdown-item" href="#">₹250 - ₹500</a></li>
                                    <li><a className="dropdown-item" href="#">₹500 - ₹1000+</a></li>
                                </ul>
                            </li>
                            </ul>

                            <ul>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle rounded-pill bg-secondary bg-gradient bg-opacity-25" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="ps-3"> Review </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">*</a></li>
                                    <li><a className="dropdown-item" href="#">**</a></li>
                                    <li><a className="dropdown-item" href="#">***</a></li>
                                    <li><a className="dropdown-item" href="#">****</a></li>
                                    <li><a className="dropdown-item" href="#">*****</a></li>
                                </ul>
                            </li>
                            </ul>

                            <ul>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle rounded-pill bg-secondary bg-gradient bg-opacity-25" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="ps-3"> Top Brands </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Apple</a></li>
                                    <li><a className="dropdown-item" href="#">Samsung</a></li>
                                    <li><a className="dropdown-item" href="#">Huawei</a></li>
                                    <li><a className="dropdown-item" href="#">Infinix</a></li>
                                    <li><a className="dropdown-item" href="#">Luxury Palace</a></li>
                                    <li><a className="dropdown-item" href="#">Fogg</a></li>
                                </ul>
                            </li>
                            </ul>

                            <ul>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle rounded-pill bg-secondary bg-gradient bg-opacity-25" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="ps-3"> Offer </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">But 1 Get 1</a></li>
                                    <li><a className="dropdown-item" href="#">Buy 2 Get 1</a></li>
                                    <li><a className="dropdown-item" href="#">Buy 4 @MRP</a></li>
                                </ul>
                            </li>
                            </ul>

                            <ul>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle rounded-pill bg-secondary bg-gradient bg-opacity-25" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="ps-3"> Discount </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">10% Off</a></li>
                                    <li><a className="dropdown-item" href="#">20% Off</a></li>
                                    <li><a className="dropdown-item" href="#">30% Off</a></li>
                                    <li><a className="dropdown-item" href="#">50% Off</a></li>
                                </ul>
                            </li>
                            </ul>
                        </div>


                        <div>
                            <ul>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle rounded-pill bg-secondary bg-gradient bg-opacity-25" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="ps-3"> Sort </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Low to High</a></li>
                                    <li><a className="dropdown-item" href="#">High to Low</a></li>
                                    <li><a className="dropdown-item" href="#">Discount</a></li>
                                    <li><a className="dropdown-item" href="#">Rating</a></li>
                                </ul>
                            </li>
                            </ul>
                        </div>

                        
                    </div>
                </nav>

            </div>
        </div>
    </React.Fragment>
  )
}

export default Filters