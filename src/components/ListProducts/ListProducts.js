import Card from '../Card/Card'

const ListProducts = ({children}) => {

    return(
        <div className="container-cards">
            <h2> {children} </h2>

            <Card title='Remera' talle='XL' price={200}/>
            <Card title='Pantalon' talle='L' price={100}/>
            <Card title='Remera 2' talle='S' price={123}/>
            <Card title='Musculosa' talle='M' price={444}/>
        </div>
    ) 
}

export default ListProducts;