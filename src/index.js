import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Vans from './pages/Vans';
import Vandetails from './pages/Vandetails';
import Header from './components/Header';
import Layout from './components/Layout';
import "../src/Server"
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostLayout from './pages/Host/HostLayout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
          <Route path='/host' element={<HostLayout />} >
            <Route path='/host' element={<Dashboard />} />
            <Route path='/host/income' element={<Income />} />
            <Route path='/host/reviews' element={<Reviews />} />
          </Route>
          <Route path='/vans' element={<Vans />} />
          <Route path='/vans/:id' element={<Vandetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


