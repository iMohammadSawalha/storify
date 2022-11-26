import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Analysis from "./pages/Analysis/Analysis";
import SideBar from "./Components/sidebar/Sidebar"
import "./App.css"

function App() {
  return (
    <div>
      <Navbar/>
      <div className="d-flex">
        <SideBar/>
        <div className="pageinfo">
          <Analysis/>
        </div>
      </div>
    </div>
    );
}
export default App;
