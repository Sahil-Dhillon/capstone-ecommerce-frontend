import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const CategoriesBar = () => {
    const [categories, setCategories] = useState([]); // State to store categories
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for errors
    const location = useLocation(); // Get current route
    const isHomePage = location.pathname === '/';

    useEffect(() => {
    axios.get("http://localhost:8085/category/all")
        .then((response) => {
        setCategories(response.data); // Set categories data
        console.log(response.data)
        setLoading(false); // Set loading to false
        })
        .catch((err) => {
        setError(err.message); // Set error message
        setLoading(false); // Set loading to false
        });
    }, []);

  // Render loading state


  // Render error state
//   if (error) {
//     return <div>Error: {error}</div>;
//   }
  return (
    <nav className="navbar navbar-expand-lg navbar bg-light" style={{
        backgroundColor: '#fff',
        display: isHomePage ? 'none' : 'block',
        color: isHomePage ? '#fff' : '#000',
        padding: '10px 20px',
        // position: 'sticky',
        width: '100%',
        top:0,
        zIndex: 1,
    }}>
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

                            {categories.map((category,index)=>{
                                return(
                            <li className="nav-item"  key={index}>
                                <Link className="nav-link"  to={`/category/${category.name.toLowerCase()}`}>
                                    {category.name}
                                </Link>
                            </li>
                                )
                            })}
                            
                            
                        </ul>
                    </div>
                    </div>
            </nav>
  )
}

export default CategoriesBar