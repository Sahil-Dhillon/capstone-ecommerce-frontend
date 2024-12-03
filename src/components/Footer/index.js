
import React from 'react';
import typo_logo from '../../assets/img/logos/uw-logo-no-bg-black.png';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    {/* Logo Section */}
                    <div className="col-md-7 offset-md-1 mb-5">
                        <img src={typo_logo} style={{ width: '140px' }} alt="UrbanWares Logo" />
                    </div>

                    {/* Customer Service Section */}
                    <div className="col-6 col-md-2 mb-4 ">
                                <h5>Customer Service</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a href="/Contact" className="nav-link p-0 text-body-secondary">Contact Us</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="/FAQ" className="nav-link p-0 text-body-secondary">FAQs</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="/PricingPolicy" className="nav-link p-0 text-body-secondary">Pricing & Policy</a>
                                    </li>
                                    {/* <li className="nav-item mb-2">
                                        <a href="/contact" className="nav-link p-0 text-body-secondary">Contact Us</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="/faq" className="nav-link p-0 text-body-secondary">FAQs</a>
                                    </li> */}
                                </ul>
                            </div>

                   {/* Company Section */}
                   <div className="col-6 col-md-2 mb-4 ">
                                <h5>Company</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a href="/About" className="nav-link p-0 text-body-secondary">About Us</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="/Features" className="nav-link p-0 text-body-secondary">Features</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="/Blog" className="nav-link p-0 text-body-secondary">Blog</a>
                                    </li>
                                    {/* <li className="nav-item mb-2">
                                        <a href="/press" className="nav-link p-0 text-body-secondary">Press</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a href="/partnerships" className="nav-link p-0 text-body-secondary">Partnerships</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                {/* Footer Bottom Section */}
                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-5 border-top">
                    <p className="mb-0">&copy; {new Date().getFullYear()} UrbanWares, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;


