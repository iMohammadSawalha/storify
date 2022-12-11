import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/sidebar/Sidebar";
import './index.css';
import Analysis from "./Pages/Analysis/Analysis";
import Companies from "./Pages/Companies/Companies";
import Coupons from "./Pages/Coupons/Coupons";
import Customers from "./Pages/Customers/Customers";
import Dashboard from './Pages/Dashboard/Dashboard';
import Discounts from "./Pages/Discounts/Discounts";
import Home from "./Pages/Home/Home";
import FunctionalComponentWithHook from "./Pages/Invoices/Invoices";
import Products from "./Pages/Products/Products";
import Profile from "./Pages/Profile/Profile";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
        <div className="d-flex">
          <SideBar/>
          <div className="pageinfo">
            <Routes>        
              <Route path="/" index element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/dashboard" index element={<Dashboard/>} />
              <Route path="/analysis" element={<Analysis/>} />
              <Route path="/invoices" element={<FunctionalComponentWithHook/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/companies" element={<Companies/>} />
              <Route path="/customers" element={<Customers/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/coupons" element={<Coupons/>} />
              <Route path="/discounts" element={<Discounts/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  </StrictMode>
);
