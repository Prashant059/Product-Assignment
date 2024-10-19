import React, { useState } from "react";
import ProductHeader from "../Components/Header/ProductHeader";
import Modal from "../Components/Utils/Modal";
import Shoes from '../assets/shoes.png';

const ProductList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [categoryName, setCategoryName] = useState(""); // Input state for category name

  const products = [
    {
      category: "Shoes",
      items: [
        {
          name: "Nike Air Jordan",
          price: "₹12,000",
          brand: "Nike",
          image: Shoes
        },
        {
          name: "Nike Dunk Low",
          price: "₹8,000",
          brand: "Nike",
          image: Shoes
        },
      ],
    },
    {
      category: "T-shirt",
      items: [],
    },
  ];

  const handleAddCategory = () => {
    setIsModalOpen(true); // Show the modal when Add Category is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSaveCategory = () => {
    // You can add functionality to save the new category here
    console.log("Category saved:", categoryName);
    setIsModalOpen(false); // Close the modal after saving
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Sidebar (optional) */}
      
      {/* Main Content */}
      <div className="flex-1">
        <ProductHeader handleAddCategory={handleAddCategory} />

        {/* Product Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {products.map((productCategory, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-4 rounded shadow-sm border border-gray-200"
            >
              <h3 className="font-semibold text-lg mb-4">
                {productCategory.category}
              </h3>
              {productCategory.items.length > 0 ? (
                productCategory.items.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 border bg-white border-gray-200 rounded mb-4 hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-22 h-22 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-gray-500">{product.price}</p>
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {product.brand}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No products available</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Adding Category */}
      {isModalOpen && (
        <Modal category={categoryName} setCategoryName={setCategoryName} handleCloseModal={handleCloseModal} handleSaveCategory={handleSaveCategory} />
      )}
    </div>
  );
};

export default ProductList;
