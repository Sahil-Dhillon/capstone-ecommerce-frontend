import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategoriesBar from "../../components/Header/CategoriesBar";
import { TailSpin } from "react-loader-spinner";
import Loading from "../../components/Loading";
import ErrorPage from "../../components/Error";
import SubCategoryCard from "../../components/Categories/SubCategoryCarousel.js";


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
          
            setCategory(response.data); // Set categories data
      console.log(response.data)
      setLoading(false); // Set loading to false
          })
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
    {/* <CategoriesBar/> */}
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <header style={{ textAlign: "center", padding: "20px", background: "#333", color: "#fff" }}>
        <h1>{category.name}</h1>
        <p>Find the best deals in {category.name}</p>
      </header>

      <div style={{ padding: "20px", background: "#fff", borderRadius: "5px" }}>
        {subcategories.map((subcategory) => (
          <div style={{ padding: "8px",margin:"5px", background: "#f1f1f1", borderRadius: "5px" }}>
          <SubCategoryCard subcategory={subcategory}/>
          </div>
        ))}
      </div>
    </div>
        </>
  );
};

export default CategoriesPage;