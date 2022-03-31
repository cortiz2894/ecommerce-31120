import React,{ useState, useEffect } from 'react'

import './Card.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link, useNavigate } from 'react-router-dom'


export default function Card({ data, action }) {
    const navigate = useNavigate();
    const { title, price, talle, stock, image, id } = data
    const [ count, setCount ] = useState(1)
    const [ countTest, setCountTest ] = useState(1)

    useEffect( () => {
        console.log("useEffect")
        const onScrollWindow = () => {
            if(window.scrollY > 100 ){
                console.log("Scroll mayor a 100")
            }
        }
        window.addEventListener("scroll", onScrollWindow)
        
        return () => {
            window.removeEventListener("scroll", onScrollWindow)
        }
        
    }, [])

    const addStock = () => {
        setCount(count + 1)
    }
    const removeStock = () => {
        setCountTest(countTest - 1)
    }
    const changePage = () => {
        navigate(`/productos/${id}`)
    }
    return(
       
        <div className="card-item" onClick={changePage}>
                <img src={`./${image}`} alt={image} />
                <div className='container-card-data'>
                    <h2>{title}</h2>
                    <p>Precio : $ {price}</p>
                    <p>Talle : {talle}</p>
                    <button onClick={(e) => action(e, "Christian")}>Comprar</button>
                </div>
        </div>
    )
}