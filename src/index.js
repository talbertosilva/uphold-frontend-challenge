import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Converter from "./components/Converter";
import Header from "./components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Converter />
  </>
);
