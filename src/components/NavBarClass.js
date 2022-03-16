import React from 'react'
import Button from '@mui/material/Button';

export default class NavBarClass extends React.Component {
    render() {
        return (
            //JSX
            <header className='main-header'>
                <div className='container-logo'>
                <img 
                    src="logo192.png" 
                    className="img-header"
                />
                </div>
                <ul className='navbar'>
                    <li><Button className="custom-btn" variant="contained">Home</Button></li>
                    <li><Button variant="contained">Productos</Button></li>
                    <li><Button variant="contained">Nosotros</Button></li>
                    <li><Button variant="contained">Contacto</Button></li>
                </ul>
            </header>
        )
    }
}