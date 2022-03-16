import './App.css';
import React, {useState} from 'react'

import NavBar from './components/NavBar/NavBar'
//import NavBarClass from './components/NavBarClass'
import ListProducts from './components/ListProducts/ListProducts';
import ModalCustom from './components/Modal/Modal'
import Card from './components/Card/Card';
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
      <ListProducts>
        <p>Productos Relacionados</p>
        <span>subtitulo</span>

      </ListProducts>
      <ListProducts>
        <p>Productos en Oferta</p>
      </ListProducts>
      <button onClick={handleOpen}>Abrir modal</button>
      <ModalCustom handleClose={handleClose} open={open}>
        <p>FORMULARIO Contacto</p>
      </ModalCustom>

      <ModalCustom handleClose={handleClose} open={open}>
        <Card />
      </ModalCustom>
    </div>
  );
}

export default App;
