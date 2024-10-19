import React from 'react'

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to the Project!
        </h1>
        <p className="text-gray-600 mb-6">
          This is the home page of the project. Click{" "}
          <span className="font-semibold text-blue-500">Products Route</span> to see
          the UI of the assignment.
        </p>
      </div>
    </div>
  );
}

export default Home