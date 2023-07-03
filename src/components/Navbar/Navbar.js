import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DashBoard from "../DashBoard/DashBoard";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <Link className="navbar-brand red" to="/">
              مراجعة الأوقاف
            </Link>
            <Link className="navbar-brand red" to="/LoginForm">
              sel
            </Link>
            <Link className="navbar-brand" to="/AddWaqf">
              إضافة وقف
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
