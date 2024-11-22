import React from "react";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="p-3 border bg-light sidebar">
      <button
        className="btn btn-outline-danger d-md-none mb-3"
        onClick={toggleSidebar}
      >
        Close
      </button>
      <h5>Filters</h5>

      {/* Category */}
      <div className="mb-3">
        <h6>Category</h6>
        <div>
          <input type="checkbox" id="running" /> <label htmlFor="running">Running</label>
        </div>
        <div>
          <input type="checkbox" id="lifestyle" /> <label htmlFor="lifestyle">Lifestyle</label>
        </div>
      </div>

      {/* Gender */}
      <div className="mb-3">
        <h6>Gender</h6>
        <div>
          <input type="checkbox" id="men" /> <label htmlFor="men">Men</label>
        </div>
        <div>
          <input type="checkbox" id="women" /> <label htmlFor="women">Women</label>
        </div>
      </div>

      {/* Price */}
      <div className="mb-3">
        <h6>Price</h6>
        <div>
          <input type="checkbox" id="low" /> <label htmlFor="low">Below $100</label>
        </div>
        <div>
          <input type="checkbox" id="mid" /> <label htmlFor="mid">$100-$200</label>
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-3">
        <h6>Sort By</h6>
        <select className="form-select">
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
