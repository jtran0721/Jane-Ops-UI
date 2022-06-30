import React from 'react';
import Home from "./pages/Home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/styles/Styles.scss";
import { useContext } from "react";


function App() {
  return (
    <div className="App">
        try { 
        <Sidebar />
        } catch (error)
        <Home />

    </div>
  );
}

export default App; 