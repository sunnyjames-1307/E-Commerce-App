import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Pay from "./pages/Pay";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  const user = true;
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/products/:category" element={<ProductList />} />

          <Route path="/products/:id" element={<Product />} />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />

          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </Router>
    </div>
  );
}
