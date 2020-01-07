import "./App.css";

import React, { Fragment } from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="grid-container">
      <div className="menu-icon">
        <i className="fas fa-bars"></i>
      </div>
      <Header />
      <SideNav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
