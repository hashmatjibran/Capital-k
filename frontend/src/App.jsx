import React from "react";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";
const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <AppDownload />
      <Footer />
    </>
  );
};

export default App;
