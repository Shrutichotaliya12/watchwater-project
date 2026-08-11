import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/style.css";
import "./assets/responsive.css";


// Home_Pages -------------
import Home from './pages/Home';

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Home pages */}
          <Route path="/" element={<Home />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App