import React, { Component } from 'react'


export default class Head extends Component {
    /**
     * 
     * props => es la manera de pasar datos de un componente a otro, almaceno informacion
     * estado => almacenamos informacion y guardamos la informacion para el componente
     */
    constructor(props){
        /** llamar al constructor padre */
        super(props)

        this.state = {
            apellido: "", //estado que empieza como cadena vacia
            contador: 0,
            personajes: false //true
        }
    }

    /**
     * this.state => inicializa el estado y guarda el estado en base a los cambios que tenga //Paiz
     * this.setState => actualiza el estado y lo retorna al this.state
     */
    obtenerApellido = (e) => {
        //code..
        console.log(e.target.value);
        this.setState({
            apellido: e.target.value
        })
    }

    obtenerContador = () => {
        this.setState({
            contador:10
        })
    }

    componentDidMount(){
        this.obtenerContador();
    }

    componentDidUpdate(prevProps, prevState){
        console.log("estado viejo: ", prevState);
        console.log("estado nuevo:", this.state);
    }
    /**
     * 
     * @returns 
     * props => sirven para pasar datos (props.nombre)
     * estado
     */
    render() {
        console.log(this.state.apellido);
        console.log(this.state.contador);
        return (
            <header>
                {/**
                 * pasando como argumento una variable nombre para capturar informacion e imprimirla
                 */}
                <input type="text" placeholder='Ingresa tu apellido' onChange={this.obtenerApellido}/>
                <h1>Bienvenido {this.props.nombre} {this.state.apellido}</h1>
            </header>
        )
    }
}

/*import React from 'react'

export default function Head() {

    saludar = (nombre, apellido) =>{
        return nombre;
    }
    return (
        <div>
            {saludar("")}
            <button onClick={saludar("kenia","paiz")}></button>
        </div>
    )
}*/

