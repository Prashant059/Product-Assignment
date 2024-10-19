import React from "react";

const Modal = ({category, setCategoryName, handleCloseModal, handleSaveCategory}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Add category</h2>
        <div>
          <label className="block text-gray-700 mb-2">Category name *</label>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded w-full"
            value={category}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter category name"
          />
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-[#E1E7EB] text-[16px] font-[600] rounded text-[#1F8CD0] hover:bg-gray-300"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-[16px] font-[600] bg-[#1F8CD0] text-white rounded hover:bg-blue-700"
            onClick={handleSaveCategory}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
