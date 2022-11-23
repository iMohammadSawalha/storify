import React from "react";
import SideBar from "./Components/sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
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
