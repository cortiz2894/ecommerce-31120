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
import CartPage from './pages/CartPage'
//context
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    //JSX
    
    <div className="App">
      <CartProvider>
        <ThemeProvider > 
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/cart" element={<CartPage />}/>
              <Route path="/contacto" element={<ContactPage />}/>
              <Route path="/:category/" element={<HomePage />}/>
              <Route path="/:category/:id" element={<DetailPage />}/>
              <Route path="/" element={<HomePage />}/>
              <Route path="*" element={<NotFoundPage />}/>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
