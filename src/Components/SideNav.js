import React, { Component } from "react";

const setUpSideNavButtons = () => {
  const sideNav = document.querySelector(".sidenav");
  const openButton = document.querySelector(".menu-icon");
  const closeButton = document.querySelector(".sidenav__close-icon");

  openButton.addEventListener("click", e => {
    sideNav.classList.add("active");
  });

  closeButton.addEventListener("click", e => {
    sideNav.classList.remove("active");
  });
};

class SideNav extends Component {
  componentDidMount() {
    setUpSideNavButtons();
  }

  render() {
    return (
      <aside className="sidenav">
        <div className="sidenav__close-icon">
          <i className="fas fa-times"></i>
        </div>
        SideNav
      </aside>
    );
  }
}

export default SideNav;
