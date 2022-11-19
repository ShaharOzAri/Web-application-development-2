import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
