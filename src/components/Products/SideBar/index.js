// import React from "react";

// const Sidebar = ({ toggleSidebar }) => {
//   return (
//     <div className="p-3 border bg-light sidebar">
//       <button
//         className="btn btn-outline-danger d-md-none mb-3"
//         onClick={toggleSidebar}
//       >
//         Close
//       </button>
//       <h5>Filters</h5>

//       {/* Category */}
//       <div className="mb-3">
//         <h6>Category</h6>
//         <div>
//           <input type="checkbox" id="running" /> <label htmlFor="running">Running</label>
//         </div>
//         <div>
//           <input type="checkbox" id="lifestyle" /> <label htmlFor="lifestyle">Lifestyle</label>
//         </div>
//       </div>

//       {/* Gender */}
//       <div className="mb-3">
//         <h6>Gender</h6>
//         <div>
//           <input type="checkbox" id="men" /> <label htmlFor="men">Men</label>
//         </div>
//         <div>
//           <input type="checkbox" id="women" /> <label htmlFor="women">Women</label>
//         </div>
//       </div>

//       {/* Price */}
//       <div className="mb-3">
//         <h6>Price</h6>
//         <div>
//           <input type="checkbox" id="low" /> <label htmlFor="low">Below $100</label>
//         </div>
//         <div>
//           <input type="checkbox" id="mid" /> <label htmlFor="mid">$100-$200</label>
//         </div>
//       </div>

//       {/* Sort By */}
//       <div className="mb-3">
//         <h6>Sort By</h6>
//         <select className="form-select">
//           <option value="price-asc">Price: Low to High</option>
//           <option value="price-desc">Price: High to Low</option>
//           <option value="popularity">Popularity</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from 'react';
import './SideBar.css';

const Sidebar = () => {
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 500],
    colors: [],
    gender: '',
  });
  // const categories = ['Electronics', 'Fashion', 'Home', 'Sports'];
  const brands = ['Nike', 'Adidas', 'Samsung', 'Apple'];
  const colors = ['Red', 'Blue', 'Green', 'Black', 'White'];
  const genderOptions = ['Men', 'Women', 'Unisex'];

  const handleCheckboxChange = (e, category) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (category === 'categories' || category === 'brands' || category === 'colors') {
        if (checked) {
          updatedFilters[category] = [...updatedFilters[category], name];
        } else {
          updatedFilters[category] = updatedFilters[category].filter((item) => item !== name);
        }
      } else if (category === 'gender') {
        updatedFilters[category] = checked ? name : '';
      }
      return updatedFilters;
    });
  };

  const handlePriceChange = (e, type) => {
    const value = e.target.value;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (type === 'min') {
        updatedFilters.priceRange[0] = value;
      } else if (type === 'max') {
        updatedFilters.priceRange[1] = value;
      }
      return updatedFilters;
    });
  };
  

  return (
    <div className="sidebar">
      <h2>Filters</h2>
      {/* <div className="filter-group">
        <h3>Categories</h3>
        <div className="checkbox-group">
          {categories.map((category) => (
            <div className='d-flex gap-1'>

              <input
                type="checkbox"
                name={category}
                checked={filters.categories.includes(category)}
                onChange={(e) => handleCheckboxChange(e, 'categories')}

              />
              <label key={category} >

                {category}
              </label>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="filter-group">
        <h3>Brands</h3>
        <div className="checkbox-group">
          {brands.map((brand) => (
        <div className='d-flex gap-1'>
              <input
                type="checkbox"
                name={brand}
                checked={filters.brands.includes(brand)}
                onChange={(e) => handleCheckboxChange(e, 'brands')}
              />
            <label key={brand}>
              {brand}
            </label>
        </div>
          ))}
        </div>
      </div> */}

      <div className="filter-group">
  <h3>Price Range</h3>
  <div className="price-inputs">
    <label >
      Min : ₹
      <input
        type="number"
        value={filters.priceRange[0]}
        onChange={(e) => handlePriceChange(e, 'min')}
        min="0"
        max="10000"
        step="100"
        className='mx-2 form-control'
      />
    </label>
    <label>
      Max : ₹
      <input
        type="number"
        value={filters.priceRange[1]}
        onChange={(e) => handlePriceChange(e, 'max')}
        min="0"
        max="10000"
        step="100"
        className='mx-2'
      />
    </label>
  </div>
          <button className='btn btn-outline-dark btn-sm'>Apply</button>
</div>


      <div className="filter-group">
        <h3>Colors</h3>
        <div className="checkbox-group">
          {colors.map((color) => (
            <div className='d-flex gap-1'>
              <input
                type="checkbox"
                name={color}
                checked={filters.colors.includes(color)}
                onChange={(e) => handleCheckboxChange(e, 'colors')}
              />
            <label key={color}>
              {color}
            </label>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <h3>Gender</h3>
        <div className="checkbox-group">
          {genderOptions.map((gender) => (
            <div className='d-flex gap-1'>
              <input
                type="radio"
                name="gender"
                value={gender}
                checked={filters.gender === gender}
                onChange={(e) => handleCheckboxChange(e, 'gender')}
              />
            <label key={gender}>
              {gender}
            </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
