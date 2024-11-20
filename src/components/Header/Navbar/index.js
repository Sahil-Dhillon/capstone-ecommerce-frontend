import React from 'react';
import typo_logo from '../../../assets/img/logos/2-removebg-preview.png'
import small_logo from '../../../assets/img/logos/uw-logo-no-bg-black.png'
const Navbar = () => {
    return (
        <header>
            {/* Top Bar */}
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                <div>
                    {/* Logo */}
                    <a href="/" className="navbar-brand">
                        <img src={small_logo} alt="Logo" style={{ width: '60px' }} />
                        <img src={typo_logo} alt="Logo" style={{ height: '50px' }} />
                    </a>
                </div>

                {/* Search Bar */}
                <div className="d-none d-md-block">
                    <form className="d-flex">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Search for products..."
                        />
                        <button className="btn btn-outline-primary" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCategories"
                        aria-controls="navbarCategories"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCategories">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/electronics">
                                    Electronics
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/fashion">
                                    Fashion
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/home-appliances">
                                    Home Appliances
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/books">
                                    Books
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sports">
                                    Sports
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
