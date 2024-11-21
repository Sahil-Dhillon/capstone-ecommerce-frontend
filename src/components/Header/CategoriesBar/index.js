import React from 'react'

const CategoriesBar = () => {
  return (
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
  )
}

export default CategoriesBar