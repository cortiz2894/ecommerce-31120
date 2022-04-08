
import {useState, useContext} from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import CartContext from '../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
    const { cartProducts, deleteProduct, calculeTotalPrice } = useContext(CartContext)

    console.log("cartProducts:", cartProducts)
    return(
        <Container className='container-general'> 
            <div className='cart-section'>
                <div className='col-cart-table__head'>
                    <h2>Producto</h2>
                    <h2>Descripcion</h2>
                    <h2>Precio Unitario</h2>
                    <h2>Cantidad</h2>
                    <h2>Quitar</h2>
                </div>
                {cartProducts.map( (cartProduct) => {
                    const { price, image, title, talle, id } = cartProduct
                    return(
                        <div className='cart-table__content' key={id}>
                            <div className='cart-table__content-img'>
                                <img src={`./${image}`} />
                            </div>
                            <div className='cart-table__content-title'>
                                <p>{title}</p>
                                <span>Talle : <b>{talle}</b></span>
                            </div>
                            <div className='cart-table__content-price'>
                                <p>$ {price}</p>
                            </div>
                            <div className='cart-table__content-quantity'>
                                <p>1</p>
                            </div>
                            <div className='cart-table__content-price'>
                                <button className='btn-delete' onClick={() => deleteProduct(cartProduct)}>
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                    )
                })}
                
                <div className='cart-footer'>
                    <Button className='btn-custom'>Continuar comprando</Button>
                    <div className='cart-checkout-details'>
                        <div className='cart-checkout__subtotal'>
                            <p>Subtotal</p>
                            <span>$ {calculeTotalPrice}</span>
                        </div>
                        <div className='cart-checkout__total'>
                            <p>Total</p>
                            <span>$ {calculeTotalPrice}</span>
                        </div>
                        <Button className='btn-custom'>Completar Compra</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CartPage