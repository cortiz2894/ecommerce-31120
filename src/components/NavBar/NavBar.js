import Button from '@mui/material/Button';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar(props) {
    //console.log(props)
    return(
        //JSX
        <header className='main-header'>
            <div className='container-logo'>
            {/* <img 
                src="logo192.png" 
                className="img-header"
            /> */}
            </div>
            <ul className='navbar'>
                <li><Button className="custom-btn" variant="contained">Home</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="contained">Nosotros</Button></li>
                <li><Button variant="contained">Contacto</Button></li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar