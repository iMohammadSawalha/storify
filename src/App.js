import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import SideBar from "./Components/sidebar/Sidebar"
import AddCompany from "./Components/Addcompany/Addcompany"
import "./App.css"
//import Invoice from "./pages/Invoices/Invoices";


function App() {
  return (
    <div>
      <Navbar/>
      <div className="d-flex">
        <SideBar/>
        <div className="pageinfo">
          <AddCompany/>
        </div>
      </div>
    </div>
    );
}
export default App;
