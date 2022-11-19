import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Analysis from "./pages/Analysis/Analysis";
import SideBar from "./Components/sidebar/Sidebar"
import "./App.css"
import Invoice from "./pages/Invoices/Invoices";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="d-flex">
        <SideBar/>
        <div className="pageinfo">
          <Invoice/>
        </div>
      </div>
    </div>
    );
}
export default App;
