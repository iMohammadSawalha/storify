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
import Profile from "./Pages/Profile/Profile";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
        <Routes>            
           <Route path="/" index element={<Home/>} />
            <Route path="/dashboard" index element={<Home/>} />
            <Route path="/analysis" element={<Analysis/>} />
            <Route path="/invoices" element={<Invoice/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    <App />
  </StrictMode>
);
