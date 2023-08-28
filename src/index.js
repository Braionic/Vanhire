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
import Van from './pages/Van';
import Vand from './pages/Host/Vand';
import Details from './pages/Host/Details';
import Photos from './pages/Host/Photos';
import Pricing from './pages/Host/Pricing';
import Notfound from './pages/Notfound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
          <Route path='host' element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='van' element={<Van />} />
            <Route path='van/:id/' element={<Vand />}>
              <Route index element={<Details />} />
              <Route path='pricing' element={<Pricing />} />
              <Route path='photos' element={<Photos />} />
            </Route>
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<Vandetails />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Notfound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


