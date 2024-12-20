// import { useState } from 'react'
import { Route, Routes } from "react-router";
import MainLayout from "./layout/mainLayout";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<MainLayout />} /> */}
        <Route index element={<MainLayout />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
