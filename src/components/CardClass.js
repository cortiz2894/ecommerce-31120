import React from 'react'


export default class CardClass extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="card-item">
                <h2>{this.props.title}</h2>
                <p>Precio : $ 100</p>
                <p>Talle : S</p>
                <button> Comprar </button>
            </div>
        )
    }
}