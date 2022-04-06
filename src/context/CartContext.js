import { createContext, useState } from "react";

const CartContext = createContext();


const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product) => {
        console.log("Producto a agregar: ", product)
        //setCartProducts([product])
        setCartProducts(cartProducts => [...cartProducts, product])
    }

    const data = {
        cartProducts,
        addProductToCart
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext