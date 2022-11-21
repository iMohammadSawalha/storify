import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/sidebar/Sidebar";
//import AddCompany from "./Components/Addcompany/Addcompany";
import "./App.css";
//import CardItem from "./Components/Cards/CardItem";
//import Invoice from "./pages/Invoices/Invoices";
import Home from "./pages/Home/Home";


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
