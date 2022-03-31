
import Container from '@mui/material/Container';

const ContactPage = () => {
    return(
        <Container className='container-general'> 
            <h1>Contacto</h1>
            <form>
                <input type="text" placeholder='Nombre'/>
                <input type="text" placeholder='Apellido'/>
                <input type="mail" placeholder='mail'/>
                <button type="submit">Enviar</button>
            </form>
        </Container>
    )
}

export default ContactPage