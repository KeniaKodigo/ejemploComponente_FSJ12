import React, { Component } from 'react'
import data from './data.json'; //importamos el json

export default class Lista extends Component {
    //aqui estamos declarando el estado sin constructor
    state = {
        personas: data //[]
    }

    render() {
        return (
            <div className='row'>
                {/** para condicionar el operador ternario */}
                <h1>Lista de Personas</h1>
                    {
                        /** condicionando si el arreglo no esta vacio */
                        this.state.personas.length === 0 ? (
                                <button className='btn btn-success' onClick={() => this.setState({personas: data})}>Recuperar Lista</button>
                        ) : (
                            <>
                                <button onClick={() => this.setState({personas: []})}>Limpiar Lista</button>

                                { this.state.personas.map((persona, indice) => {
                                    return (
                                        <div className='col-md-4 mt-4' key={indice}>
                                            <div className="card" >
                                                <img src={persona.image} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <p className="card-text">
                                                        Hello! My name is {persona.name}, I am {persona.age} years old!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) }
                            </>
                        )
                    }
                {
                    /** iterar el estado 
                     * 
                     * al utilizar map() tenemos 2 parametros (elementos del arreglo, posicion)
                    */
                    
                }
            </div>
        )
    }
}
