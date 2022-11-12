import React, { useState } from 'react';
import './index.css';
import { Aside } from './components/aside';
import { Routes, Route, Link, } from 'react-router-dom'
import { Charts } from "./pages/charts"
import { Finances } from "./pages/finances"
import { Navbar } from './components/Navbar';
import { History } from "./pages/history"


function App() {
  return (
    <div className='flex'>
      <Aside />
      <div className='container'>
      <Navbar />
      <Routes>
          <Route path='/dashboard' element={<Charts />}></Route>
          <Route path='/finances' element={<Finances />}></Route>
          <Route path='/donuts' element={<History />}></Route>
      </Routes>
      </div>
    </div>
    
  );
}

export default App;
