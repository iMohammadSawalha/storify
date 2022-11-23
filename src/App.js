import React from "react";
import SideBar from "./Components/sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import AddCompany from "./Components/Addcompany/Addcompany";

function App() {
  return (
    <>
      <Navbar/>
      <div className="d-flex">
        <SideBar/>
        <div className="pageinfo">
          <AddCompany/>
        </div>
      </div>
    </>
    );
}
export default App;
