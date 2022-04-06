import { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ThemeSwitch from './ThemeSwitch'
import ThemeContext from '../../context/ThemeContext';

function NavBar(props) {
    const { lightTheme, handleTheme } = useContext(ThemeContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log("Light state: " , lightTheme)
    const pages = [
    {
        title:'Home',
        url: '/'
    },
 
    {
        title:'Productos',
        url: '/nosotros'
    }, 
    {
        title:'Nosotros',
        url: '/nosotros'
    },
    {
        title: 'Contacto',
        url: '/contacto'
    }]
    return(
        //JSX
        //
        <header className={`main-header ${lightTheme ? ' light-mode' : ''}`}> 
            <div className='container-logo'>
                {lightTheme ? (
                    <img src="../logo-light.png" className="img-header"/>
                ) : (
                    <img src="../logo.png" className="img-header"/>
                ) }
            </div>
            <ul className='navbar'> 
                {pages.map((page) => {
                    return(
                        page.title === 'Productos' ? (
                        <li>
                            <Button 
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >{page.title    }</Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link to={'/remeras'}>Remeras</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to={'/musculosas'}>Musculosas</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to={'/jeans'}>Jeans</Link>
                                </MenuItem>
                            </Menu> 
                        </li>
                        ) : (
                        <li>
                            <Button className="custom-btn" variant="contained">
                                <Link to={page.url}>{page.title}</Link>
                            </Button>
                        </li>
                        )
                        
                    )
                })}
            </ul>
            <ThemeSwitch />
            <CartWidget />
        </header>
    )
}

export default NavBar