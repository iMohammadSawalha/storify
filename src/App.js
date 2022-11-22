import React from "react";
import SideBar from "./Components/sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Table from './Components/Addcustomer/Table';

function App() {
  return (
    <>
      <Navbar/>
      <div className="d-flex">
        <SideBar/>
        <div className="pageinfo">
          <Table/>
        </div>
      </div>
    </>
    );
}
export default App;
