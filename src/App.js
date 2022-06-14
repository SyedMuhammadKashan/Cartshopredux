import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SelectedProduct from "./components/SelectedProduct";
import Mystore from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    
      <BrowserRouter>
        <Provider store={Mystore}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SelectedProduct/:id" element={<SelectedProduct />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    
  );
};
export default App;
