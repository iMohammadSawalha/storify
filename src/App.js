import React from "react";
import Home from "./Pages/DashboardHome/Home";
import SideBar from "./Components/sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
//import AddCompany from "./Components/Addcompany/Addcompany";
import "./App.css";
//import CardItem from "./Components/Cards/CardItem";
//import Invoice from "./pages/Invoices/Invoices";
import List from "./Components/Add product/List";


function App() {
  return (
    <>
      <Navbar/>
      <div className="d-flex">
        <SideBar/>
        <div className="pageinfo">
          <List/>
        </div>
      </div>
    </>
    );
}
export default App;
