
import {useState, useContext} from 'react'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import CartContext from '../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalCustom from '../components/Modal/Modal';
import db from '../firebase'
import { addDoc, collection } from 'firebase/firestore';

const CartPage = () => {
    const { cartProducts, deleteProduct, totalPrice } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',  
        email: '',
    })
    const [order, setOrder] = useState(
        {
            buyer : formData,
            items: cartProducts.map( (cartProduct)=> {
                return {
                    id: cartProduct.id,
                    title: cartProduct.title,
                    price: cartProduct.price
                }
            }),
            total: totalPrice
        }
    )
    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {...order,
            buyer: formData
        }
        setOrder({...order,
            buyer: formData})
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccessOrder(orderDoc.id)
        
    }

    const handleChange = (e) => {
        const {value, name} = e.target
        console.log("value: ", value)
        console.log("name: ", name)

        setFormData({
            ...formData,
            [name]: value
        })
    }

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
                            <span>$ {totalPrice}</span>
                        </div>
                        <div className='cart-checkout__total'>
                            <p>Total</p>
                            <span>$ {totalPrice}</span>
                        </div>
                        <Button className='btn-custom' onClick={() => setOpenModal(true)}>Completar Compra</Button>
                    </div>
                </div>
            </div>
            {console.log("Order:", order)}
            <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
                
                {successOrder ? (
                    <div>
                        <h3>Orden generada correctamente</h3>
                        <p>Su numero de orden es: {successOrder}</p>
                    </div>
                ) : (
                    <>
                        <h2>FORM USUARIO</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name='name' placeholder='Nombre' 
                                onChange={handleChange} 
                                value={formData.name}
                            />
                            <input type="number" name='phone' placeholder='Telefono' 
                                onChange={handleChange} 
                                value={formData.phone}
                            />
                            <input type="mail" name='email' placeholder='mail' 
                                onChange={handleChange} 
                                value={formData.email}
                            />

                            <Button type="submit">Enviar</Button>
                        </form>
                    </>
                )}
                
            </ModalCustom>
        </Container>
    )
}

export default CartPage