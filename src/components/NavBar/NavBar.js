import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar(props) {

    //console.log(props)
    const pages = [
    {
        title:'Home',
        url: '/'
    },
    {
        title:'Nosotros',
        url: '/nosotros'
    }, 
    {
        title: 'Productos',
        url: '/productos'
    },
    {
        title: 'Contacto',
        url: '/contacto'
    }]
    return(
        //JSX
        <header className='main-header'>
            <div className='container-logo'>
                <img src="../logo.png" className="img-header"/>
            </div>
            <ul className='navbar'>
                    <li>
                        <Button className="custom-btn" variant="contained">
                            <Link to={'/remeras'}>Remeras</Link>
                        </Button>     
                    </li>
                    <li>
                        <Button className="custom-btn" variant="contained">
                            <Link to={'/jeans'}>Jeans</Link>
                        </Button>     
                    </li>
                    <li>
                        <Button className="custom-btn" variant="contained">
                            <Link to={'/musculosas'}>Musculosas</Link>
                        </Button>     
                    </li>
                {pages.map((page) => {
                    return(
                        <li>
                            <Button className="custom-btn" variant="contained">
                                <Link to={page.url}>{page.title}</Link>
                            </Button>
                        </li>
                    )
                })}

            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar