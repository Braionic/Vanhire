import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<App />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


