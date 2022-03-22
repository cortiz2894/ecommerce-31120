import React,{ useState, useEffect } from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'


export default function Card({ data }) {
    const { title, price, talle, stock, image } = data
    const [ count, setCount ] = useState(1)
    const [ countTest, setCountTest ] = useState(1)
    //const [ ]

    // useEffect( () => {
    //     console.log("SOLO MONTAJE")
    // },[] )

    // useEffect( () => {
    //     console.log("Siempre que entre en fase ACTUALIZACION")
    // })

    // useEffect( () => {
    //     console.log("SOLO CUANDO CAMBIE COUNT")
    // },[count] )

    // useEffect( () => {
    //     return () => {
    //         console.log("FASE DE DESMONTAJE")
    //     }
    // })

    const addStock = () => {
        setCount(count + 1)
    }
    const removeStock = () => {
        setCountTest(countTest - 1)
    }
    return(
        <div className="card-item">
            <img src={`./${image}`} alt={image} />
            
            <div className='container-card-data'>
                <h2>{title}</h2>
                <p>Precio : $ {price}</p>
                <p>Talle : {talle}</p>
                <button>Comprar</button>
            </div>
        </div>
    )
}