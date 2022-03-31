import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

const ItemDetail = ({data}) => {
    
    return(
        <Container className='container-general'> 
            <div className='container-detail'>
            <div className='container-detail__img'>
                <img src={data.image} alt="jean" />
            </div>
            <div className='container-detail__info'>
                <h3 className='info__title'>{data.title}</h3>
                <p className='info__text'>$ {data.price}</p>
                <p className='info__subtitle'>TALLE</p>
                <p className='info__text'>{data.talle}</p>
                <p className='info__subtitle'>COLOR</p>
                <ul className='info__color'>
                    {/* {data.colors.map( (color) => {
                        return(
                            <li style={{background: `${color.hex}`}}></li>
                        )
                    })}                     */}
                </ul>
                <p className='info__subtitle'>DETALLE</p>
                <p className='info__text detail__text'>{data.description}</p>
                <Button className='detail__btn-buy'>COMPRAR</Button>
            </div>
            </div>
        </Container>
    )
}

export default ItemDetail