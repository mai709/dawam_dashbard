import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddWaqf from "./components/addWaqf/AddWaqf";
import Navbar from "./components/Navbar/Navbar";
import Details from "./components/Details/Details";
import DashBoard from "./components/DashBoard/DashBoard";
import Select from "./components/Select";
import LoginForm from "./components/LoginForm";
import FormikContainer from "./components/FormikContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/AddWaqf" element={<AddWaqf />} />
            <Route path="/" element={<DashBoard />} />
            <Route path="/details" element={<Details />} />
            <Route path="/LoginForm" element={<FormikContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
