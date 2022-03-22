import './App.css';
import React, {useState, useEffect} from 'react'

import NavBar from './components/NavBar/NavBar'
//import NavBarClass from './components/NavBarClass'
import ListProducts from './components/ListProducts/ListProducts';
import ModalCustom from './components/Modal/Modal'
import Card from './components/Card/Card';
import Container from '@mui/material/Container';


function App() {
  const [open, setOpen] = useState(false);

  const handleClose = (value) => {
      setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true)
  }




  return (
    //JSX
    
    <div className="App">
     <NavBar />
      {/* <NavBarClass /> */}
      <Container className='container-general'> 
        <ListProducts />
      </Container>
    </div>
  );
}

export default App;
