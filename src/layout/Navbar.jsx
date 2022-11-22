import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container-fluid p-2">

            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <NavLink to="/">
                    <p className="navbar-brand" href="#">API</p>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <NavLink to="/">
                            <li className="nav-item active">
                                <p className="nav-link" href="#">Home <span className="sr-only">(current)</span></p>
                            </li>
                        </NavLink>
                        <NavLink to="/user">
                            <li className="nav-item active">
                                <p className="nav-link" href="#">Users <span className="sr-only">(current)</span></p>
                            </li>
                        </NavLink>




                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
