import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategoriesBar from "../../components/Header/CategoriesBar";
import { TailSpin } from "react-loader-spinner";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";


const CategoriesPage = () => {
  // const category = {
  //   name: "Electronics",
  //   subcategories: [
  //     {
  //       name: "Mobile Phones",
  //       products: [
  //         { id: 1, name: "iPhone 14", price: "$999", image: "https://via.placeholder.com/200" },
  //         { id: 2, name: "Samsung Galaxy S23", price: "$899", image: "https://via.placeholder.com/200" },
  //         { id: 3, name: "OnePlus 11", price: "$749", image: "https://via.placeholder.com/200" },
  //       ],
  //     },
  //     {
  //       name: "Laptops",
  //       products: [
  //         { id: 4, name: "MacBook Air", price: "$1,199", image: "https://via.placeholder.com/200" },
  //         { id: 5, name: "Dell XPS 13", price: "$999", image: "https://via.placeholder.com/200" },
  //         { id: 6, name: "HP Spectre x360", price: "$1,299", image: "https://via.placeholder.com/200" },
  //       ],
  //     },
  //   ],
  // };

  const { categoryName } = useParams(); // Extract categoryName from URL
  console.log(categoryName)
    const [products, setProducts] = useState([]);
    const [subcategories, setSubcategories] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState({});

    useEffect(() => {
      axios.get(`/category/${categoryName}`)
      .then((response) => {
        axios.get(`/subcategory/byCategoryName/${categoryName}`).then((subCategoryResponse)=>{
          setSubcategories(subCategoryResponse.data)
          console.log(subCategoryResponse.data)
          axios.get(`/product/bySubCategory/1?pageSize=3`).then((productsResponse)=>{
            setProducts(productsResponse.data)
          })
        })
      setCategory(response.data); // Set categories data
      console.log(response.data)
      setLoading(false); // Set loading to false
      })
      .catch((err) => {
      setError(err.message); // Set error message
      setLoading(false); // Set loading to false
      });
    }, [categoryName]);

    if (loading) {
      return (
        <Loading message={"Loading "+ categoryName}/>
      );
    }
    if (error){
      return(
        <ErrorPage message={error}/>);
    }


  return (
    <>
    <CategoriesBar/>
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <header style={{ textAlign: "center", padding: "20px", background: "#333", color: "#fff" }}>
        <h1>{category.name}</h1>
        <p>Find the best deals in {category.name}</p>
      </header>

      <div style={{ padding: "20px", background: "#f9f9f9", borderRadius: "5px" }}>
        {subcategories.map((subcategory) => (
          <div key={subcategory.name} style={{ marginBottom: "40px" }}>
             <Link to={`/products/${subcategory.name}`} className="d-flex justify-content-between align-items-center" style={{ marginBottom: "10px", color: "#333",fontSize:'1.2rem',textDecoration:'none' }}>{subcategory.name}
             <button className="btn btn-dark m-2 ">Explore More...</button>
             </Link>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {products.map((product) => (
                <div
                key={product.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    padding: "15px",
                    width: "calc(33.333% - 20px)",
                    background: "#fff",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    textAlign: "center",
                    }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                      }}
                      >
                      <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        marginBottom: "10px",
                    }}
                  />
                  <h3 style={{ fontSize: "18px", color: "#333", margin: "10px 0" }}>{product.name}</h3>
                  <p style={{ color: "#007bff", fontWeight: "bold", fontSize: "16px" }}>{product.price}</p>
                  <Link to={`/product/${product.productId}`}
                  style={{
                    padding: "10px 15px",
                    background: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    }}
                  >
                  Buy Now
                  </Link>
                  </div>
                  ))}
                  </div>
                  
          </div>
        ))}
      </div>
    </div>
        </>
  );
};

export default CategoriesPage;
