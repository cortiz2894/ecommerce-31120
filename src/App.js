import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import NavBar from './components/NavBar/NavBar'
import ListProducts from './components/ListProducts/ListProducts';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//pages
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import NotFoundPage from './pages/NotFound'
import DetailPage from './pages/Detail';

function App() {
  return (
    //JSX
    
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/contacto" element={<ContactPage />}/>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:category/" element={<HomePage />}/>
        <Route path="/:category/:id" element={<DetailPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
