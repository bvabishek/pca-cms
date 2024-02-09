import React, { useState } from "react";
import { Navbar, NavbarText, NavItem } from "reactstrap";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";

function VerticalNavbar() {
  const [showIconsOnly, setShowIconsOnly] = useState(false);

  return (
    <div className="nav">
      <Navbar className="navbar">
        <NavbarText className="nav-title"><i className="fas fa-car-side"></i>CMS</NavbarText>
        <NavItem className="nav-item">
          <button className="toggle-button" onClick={() => setShowIconsOnly(!showIconsOnly)}>
          <i className="fas fa-bars fa-mod"></i>
          </button>
        </NavItem>
        {showIconsOnly ? (
          <>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/dashboard">
                {" "}
                <i className="fas fa-chart-line"></i>
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/products">
                <i className="fas fa-cart-plus"></i>
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/settings">
                {" "}
                <i className="fas fa-gear"></i>
              </Link>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/dashboard">
                {" "}
                <i className="fas fa-chart-line"></i>Dashboard
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/products">
                <i className="fas fa-cart-plus"></i>Products
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link className="nav-link" to="/settings">
                {" "}
                <i className="fas fa-gear"></i>Settings
              </Link>
            </NavItem>
          </>
        )}
      </Navbar>
    </div>
  );
}

export default VerticalNavbar;
