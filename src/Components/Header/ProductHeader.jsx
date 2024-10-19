import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductHeader = ({ handleAddCategory }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold mb-4 md:mb-0">Products</h2>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-gray-200 text-lg font-semibold rounded text-[#1F8CD0] hover:bg-gray-300"
          onClick={handleAddCategory}
        >
          Add Category
        </button>
        <NavLink to="/addproduct">
          <button className="px-4 py-2 text-lg font-semibold bg-[#1F8CD0] text-white rounded hover:bg-blue-700">
            Add Product
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default ProductHeader;
