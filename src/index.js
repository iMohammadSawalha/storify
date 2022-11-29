import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./Pages/DashboardHome/Home";
import Analysis from "./Pages/Analysis/Analysis";
import Invoice from "./Pages/Invoices/Invoices";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Customers from "./Pages/Customers/Customers";
import Companies from "./Pages/Companies/Companies";
import SideBar from "./Components/sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";

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
              <Route path="/dashboard" index element={<Home/>} />
              <Route path="/analysis" element={<Analysis/>} />
              <Route path="/invoices" element={<Invoice/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/companies" element={<Companies/>} />
              <Route path="/customers" element={<Customers/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  </StrictMode>
);
