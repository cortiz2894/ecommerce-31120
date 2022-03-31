
import { useState } from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const ContactPage = () => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Envio de nombre: ", value)
    }

    const handleChange = (e) => {
        console.log(e)
        setValue(e.target.value)
    }

    const resetForm = () => {
        setValue('')
        console.log("limpiar formulario")
    }

    return(
        <Container className='container-general help'> 

            <h2>Preguntas Frecuentes</h2>
            <div className='faq-section'>
                <section>
                    <h3>Consultas de stock</h3>
                    <h4>¿Hay stock de todos los productos?</h4>
                    <p>
                        Todos los productos que publicamos están en stock. En caso de agotarse algún talle o color, esa característica se bloqueará, se verá color gris y no podrás seleccionarla. Haciendo click en el botón Consultar disponibilidad vas a poder realizar consulta de disponibilidad de stock y te enviaremos un email cuando haya stock nuevamente.
                    </p>
                    <h4>¿Hay algún límite de compra?</h4>
                    <p>
                        El único límite de compra que tenemos es el stock de nuestro E-Shop. Si deseás hacer una compra mayorista comunicate con nosotros a 
                    </p>
                </section>
                <section>
                    <h3>Envío y seguimiento</h3>
                    <h4>¿Puede recibir el paquete otra persona?</h4>
                    <p>Tu pedido puede ser recibido por cualquier persona mayor de 18 años que se encuentre en el domicilio registrado.</p>
                    <h4>¿Cuándo voy a recibir mi pedido?</h4>
                    <p>Los pedidos son entregados a través de los correos Andreani – Saires y Moova en toda la República Argentina.</p>
                    <h4>¿Qué pasa si no hay nadie cuando traen mi pedido?</h4>
                    <p>Si no hay nadie en el domicilio que nos indicaste, el correo regresará a las 48 horas. En caso de no encontrar a nadie, deberás dirigirte al centro de distribución asignado a tu pedido dentro de las 72 horas con tu DNI y el código que te enviamos (tracking number).</p>
                </section>
                <section>
                    <h3>Contacto</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" onKeyDown={handleChange} value={value} placeholder='Nombre'/>
                        <input type="text" placeholder='Apellido'/>
                        <input type="mail" placeholder='mail'/>

                        <Button onClick={resetForm}>Limpiar Formulario</Button>
                        <Button type="submit">Enviar</Button>
                    </form>
                </section>
            </div>
        </Container>
    )
}

export default ContactPage