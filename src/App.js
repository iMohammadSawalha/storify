import React from "react";
import Home from "./Pages/DashboardHome/Home";
import SideBar from "./components/sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
//import AddCompany from "./Components/Addcompany/Addcompany";
import "./App.css";
//import CardItem from "./Components/Cards/CardItem";
//import Invoice from "./pages/Invoices/Invoices";


function App() {
  return (
    <div>
      <Navbar/>
      <div className="d-flex">
        <SideBar/>
        <div className="pageinfo">
           <Home/>
        </div>
      </div>
    </div>
    );
}
export default App;
