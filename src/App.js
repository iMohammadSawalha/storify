import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Analysis from "./pages/Analysis/Analysis";
import SideBar from "./components/sidebar/Sidebar"
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
