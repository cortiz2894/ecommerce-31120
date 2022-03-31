import React,{useState, useEffect} from 'react'
import Card from '../Card/Card'
import mockProductos from '../../Utils/productsMock'
import { useParams } from 'react-router-dom'

const ListProducts = ({children}) => {
    const { category } = useParams()

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
        })
    } 

    useEffect( () => {
        setProducts([])
        getProducts().then( (productos) => {
            filterProductByCategory(productos, category)
        })
    }, [category])


    const filterProductByCategory = (array , category) => {
        return array.map( (product, i) => {
            if(product.category === category) {
               return setProducts(products => [...products, product]);
            }
        })
    }

    return(
        <div className="container-cards">
            <h2> Productos en Oferta</h2>
            {console.log("products: ", products)}
            {products.map( ( product ) =>  <Card data={product} key={product.id}/>)}
        </div>
    ) 
}

export default ListProducts;