import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SubCategoryCard = ({ subcategory }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        if(subcategory){
            axios.get(`/product/bySubCategory/${subcategory.subcategoryId}?pageSize=3`).then((productsResponse) => {
                setProducts(productsResponse.data)
            })
        }
    }, [subcategory])

    return (
        <div key={subcategory.name} style={{ marginBottom: "40px" }}>
            <Link to={`/products/${subcategory.name}`} className="d-flex justify-content-between align-items-center" style={{ marginBottom: "10px", color: "#333", fontSize: '1.2rem', textDecoration: 'none' }}>{subcategory.name}
                <button className="btn btn-dark m-2 ">Explore More...</button>
            </Link>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {products.map((product) => (
                    <div
                    className='d-flex flex-column justify-content-between'
                    key={product.id}
                    style={{
                        border: "1px solid #ddd",
                        borderRadius: "12px",
                        padding: "20px",
                        width: "calc(25% - 20px)",
                        background: "#fff",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        textAlign: "left",
                        overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.02)";
                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
                    }}
                >
                    <div >

                    <div style={{ marginBottom: "15px" }}>
                        <img
                            src={product.profileImgUrl}
                            alt={product.name}
                            style={{
                                width: "100%",
                                height: "180px",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                            />
                    </div>
                    <h3 style={{ fontSize: "20px", color: "#333", marginBottom: "5px" }}>
                        {product.name}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#555", marginBottom: "15px" }}>
                        {product.brand || "A brief description of the product."}
                    </p>
                    <div style={{ display: "flex", justifyContent: "left", alignItems: "center", gap: "5px", marginBottom: "15px" }}>
                        <span style={{ fontSize: "16px", color: "#000", fontWeight: "bold" }}>
                            ₹ {product.price}
                        </span>
                        {product.rating && (
                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    fontSize: "14px",
                                    color: "#ffc107",
                                }}
                            >
                                {"★".repeat(product.rating)}
                                {"☆".repeat(5 - product.rating)}
                            </span>
                        )}
                    </div>
                        </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                        {/* <button
                            style={{
                                padding: "10px 15px",
                                background: "#007bff",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                flex: 1,
                                marginRight: "5px",
                                }}
                                // onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button> */}
                        <Link
                            to={`/product/${product.productId}`}
                            style={{
                                padding: "10px 15px",
                                background: "#000",
                                color: "#f5945c",
                                border: "none",
                                borderRadius: "5px",
                                textAlign: "center",
                                flex: 1,
                                textDecoration:'none'
                            }}
                        >
                            Details
                        </Link>
                    </div>
                </div>
                
                ))}
            </div>

        </div>
    )
}

export default SubCategoryCard;