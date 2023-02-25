import React, { Component } from 'react'

export default class Prueba extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            usuarios: null,
            contador: 10
        }
    }

    obtenerUsuario(){
        this.setState({
            usuarios: "Maria"
        })
    }

    /** montamos el estado que se encuentra en el metodo obtenerUsuario */
    componentDidMount(){
        this.obtenerUsuario();
    }

    componentDidUpdate(){
        /**
         * estado viejo: null
         * estado actual: "Maria"
         */
    }

    componentWillUnmount(){
        //desmontar el estado
    }

    render() {

        console.log(this.state.usuarios); //"Maria"
        //let saludo = "Buenas noches chicos!";
        return (
        <div>
            <h1>Saludo: {this.props.saludo}</h1>

            <p>
                {this.props.descripcion}
            </p>
        <table>

        </table>
        </div>
        )
    }
}
