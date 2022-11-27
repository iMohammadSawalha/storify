import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/sidebar/Sidebar";
import Invoice from "./Pages/Invoices/Invoices";

function App() {
  return (
    <>
      <Navbar/>
      <div className="d-flex">
        <SideBar/>
        <div className="pageinfo">
        <Invoice/>
        </div>
      </div>
    </>
    );
}
export default App;
