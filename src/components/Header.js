// rafce
import React from 'react'
import '../Styles/Styles.css'

const Header = () => {
  return (
    <React.Fragment>
    <div className="container">

        <nav className="navbar bg-success text-light mt-2">
            <div className="container-fluid">

                    <a className="navbar-brand text-light" href="#">
                        <i className="bi bi-telephone"><span> </span></i>
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


    </div>
    </React.Fragment>
  )
}

export default Header