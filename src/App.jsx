import { useState } from "react";
import "./App.css";
import VerticalNavbar from "./components/VerticalLayout/Navbar";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Products from "./pages/ProductsPage";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <VerticalNavbar />
        <Routes>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
