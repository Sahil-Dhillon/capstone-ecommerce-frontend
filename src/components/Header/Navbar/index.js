
// import React, { useContext, useEffect, useState } from 'react';
// import typo_logo from '../../../assets/img/logos/2-removebg-preview.png';
// import small_logo from '../../../assets/img/logos/uw-logo-no-bg-black.png';
// import { Link, useLocation } from 'react-router-dom';
// import { IoMdSearch } from 'react-icons/io';
// import { AppContext } from '../../../context/AppContext';
// import { Dropdown } from 'react-bootstrap'; // Importing React-Bootstrap Dropdown

// const Navbar = () => {
//     const location = useLocation(); // Get current route
//     const isHomePage = location.pathname === '/';
//     const { userData, loading, updateUserData } = useContext(AppContext);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for managing dropdown open/close

//     // Fetch user data if not available
//     useEffect(() => {
//         if (!userData && !loading) {
//             updateUserData();
//         }
//     }, [userData, loading, updateUserData]);

//     // Handle Logout
//     const handleLogout = () => {
//         localStorage.removeItem('authToken');
//         // Redirect to login page after logout
//         window.location.href = '/auth/login';
//     };

//     return (
//         <header
//             style={{
//                 backgroundColor: isHomePage ? 'transparent' : '#fff',
//                 color: isHomePage ? '#fff' : '#000',
//                 padding: '10px 20px',
//                 position: isHomePage ? 'absolute' : 'static',
//                 width: '100%',
//                 zIndex: 1000,
//             }}
//         >
//             {/* Top Bar */}
//             <div className="d-flex justify-content-between align-items-center p-3">
//                 <div>
//                     {/* Logo */}
//                     <Link to="/" className="navbar-brand">
//                         <img src={small_logo} alt="Logo" style={{ width: '60px' }} />
//                         <img src={typo_logo} alt="Logo" style={{ height: '50px' }} />
//                     </Link>
//                 </div>

//                 {/* Search Bar */}
//                 <div className="d-none d-md-block">
//                     <form className="d-flex align-items-center bg-light pe-2">
//                         <input
//                             type="text"
//                             className="form-control me-2"
//                             placeholder="Search for products..."
//                         />
//                         <IoMdSearch size={30} color="black" />
//                     </form>
//                 </div>

//                 {/* User Authentication / Dropdown */}
//                 {userData ? (
//                     <Dropdown show={isDropdownOpen} onToggle={() => setIsDropdownOpen(!isDropdownOpen)}>
//                         <Dropdown.Toggle
//                             variant="link"
//                             id="dropdown-basic"
//                             style={{
//                                 background: 'none',
//                                 border: 'none',
//                                 padding: '0',
//                                 cursor: 'pointer',
//                             }}
//                         >
//                             {/* Styled First Name */}
//                             <h4
//                                 style={{
//                                     margin: 0,
//                                     fontSize: '1.2rem',
//                                     fontWeight: '600',
//                                     color: '#44318D',
//                                     textTransform: 'capitalize',
//                                     letterSpacing: '0.5px',
//                                     display: 'inline-block',
//                                     cursor: 'pointer',
//                                 }}
//                             >
//                                 {userData.firstName}
//                             </h4>
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu>
//                             <Dropdown.Item as={Link} to="/UserProfile">
//                                 User Profile
//                             </Dropdown.Item>
//                             <Dropdown.Item onClick={handleLogout}>
//                                 Logout
//                             </Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                 ) : (
//                     <Link to="/auth/login" className="btn btn-outline-dark">
//                         Login
//                     </Link>
//                 )}
//             </div>

//             {/* Bottom Bar */}
//         </header>
//     );
// };

// export default Navbar;

import React, { useContext, useEffect, useState } from 'react';
import typo_logo from '../../../assets/img/logos/2-removebg-preview.png';
import small_logo from '../../../assets/img/logos/uw-logo-no-bg-black.png';
import { Link, useLocation } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import { IoIosCart } from 'react-icons/io'; // Importing the Cart icon
import { AppContext } from '../../../context/AppContext';
import { Dropdown } from 'react-bootstrap'; // Importing React-Bootstrap Dropdown
import CategoriesBar from '../CategoriesBar';

const Navbar = () => {
    const location = useLocation(); // Get current route
    const isHomePage = location.pathname === '/';
    const { userData, loading, updateUserData } = useContext(AppContext); // Assuming cartItems is part of your context
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for managing dropdown open/close
    const [userDataLocal, setUserDataLocal] = useState({})
    // Fetch user data if not available
    useEffect(() => {
        if (!userData && !loading) {
            updateUserData();
        }else{
            setUserDataLocal(userData)
        }
    }, [userData, loading, updateUserData]);


    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        // Redirect to login page after logout
        window.location.href = '/auth/login';
    };

    return (
        <header
            style={{
                backgroundColor: isHomePage ? 'transparent' : '#fff',
                color: isHomePage ? '#fff' : '#000',
                padding: '10px 20px',
                position: isHomePage ? 'absolute' : 'static',
                width: '100%',
                top:0,
                zIndex: 1000,
            }}
        >
            {/* Top Bar */}
            <div className="d-flex justify-content-between align-items-center p-3">
                <div>
                    {/* Logo */}
                    <Link to="/" className="navbar-brand">
                        <img src={small_logo} alt="Logo" style={{ width: '60px' }} />
                        <img src={typo_logo} alt="Logo" style={{ height: '50px' }} />
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="d-none d-md-block">
                    <form className="d-flex align-items-center bg-light pe-2">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Search for products..."
                        />
                        <IoMdSearch size={30} color="black" />
                    </form>
                </div>
                <div  className ="d-flex align-items-center pe-2"> 
                {/* Cart Icon with Bubble */}
                <div style={{ position: 'relative', marginRight: '20px' }}>
                    <Link to="/cart" style={{ color: '#111', fontSize: '1.5rem', cursor: 'pointer' }}>
                        <IoIosCart size={30} />
                    </Link>
                    {userData && userData.userCart && userData.userCart.listOfCartItems.length > 0 && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '-5px',
                                right: '-5px',
                                backgroundColor: '#eee',
                                color: 'black',
                                borderRadius: '50%',
                                padding: '0.2rem 0.5rem',
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                            }}
                        >
                            {userDataLocal.userCart.listOfCartItems.length}
                        </div>
                    )}
                </div>

                {/* User Authentication / Dropdown */}
                {userData ? (
                    <Dropdown show={isDropdownOpen} onToggle={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <Dropdown.Toggle
                            variant="link"
                            id="dropdown-basic"
                            style={{
                                background: 'none',
                                border: 'none',
                                padding: '0',
                                cursor: 'pointer',
                            }}
                        >
                            {/* Styled First Name */}
                            <h4
                                style={{
                                    margin: 0,
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: '#44318D',
                                    textTransform: 'capitalize',
                                    letterSpacing: '0.5px',
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                }}
                            >
                                {userData.firstName}
                            </h4>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/UserProfile">
                                User Profile
                            </Dropdown.Item>
                            <Dropdown.Item onClick={handleLogout}>
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    <Link to="/auth/login" className="btn btn-outline-dark">
                        Login
                    </Link>
                )}
                </div>
            </div>

            {/* Bottom Bar */}
            <CategoriesBar/>
        </header>
    );
};

export default Navbar;
