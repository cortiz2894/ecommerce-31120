import React,{useState, useEffect} from 'react'
import Card from '../Card/Card'
import mockProductos from '../../Utils/productsMock'
import { useParams } from 'react-router-dom'

const ListProducts = ({children}) => {
    const { category } = useParams()
    const [contador, setContador] = useState(0)

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })
    } 

    useEffect( () => {
        setProducts([])
        getProducts().then( (productos) => {
            category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    }, [category])


    const filterProductByCategory = (array , category) => {
        return array.map( (product, i) => {
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
        })
    }

    const agregarClick = (e, nombre) => {
        e.stopPropagation()
        console.log("Nombre desde el hijo:", nombre)
        setContador(contador + 1)
    }

    return(
        <div className="container-cards">
            <h2> Productos en Oferta </h2>
            {console.log("products: ", products)}
            <h1>CONTADOR: {contador}</h1>
            {products.map( ( product ) =>  <Card data={product} key={product.id} action={agregarClick}/>)}
        </div>
    ) 
}

export default ListProducts;