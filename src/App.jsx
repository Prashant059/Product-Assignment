import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/SideBar/SideBar';
import Products from './Pages/Products';
import Store from './Pages/Store';
import Catalogue from './Pages/Catalogue';
import Promotion from './Pages/Promotion';
import Reports from './Pages/Reports';
import Docs from './Pages/Docs';
import Settings from './Pages/Settings';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';
import AddProductVariants from './Pages/ViewProduct';
import Combinations from './Pages/Combination';
import Price from './Pages/PriceInfo';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col md:flex-row h-screen font-work-sans">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 h-full bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/store" element={<Store />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/viewproducts" element={<AddProductVariants />} />
            <Route path="/combination" element={<Combinations />} />
            <Route path="/price" element={<Price />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
