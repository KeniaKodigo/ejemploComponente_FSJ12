import React, { Component } from 'react'

export default class Nav extends Component {
    /**
     * 
     * @returns 
     * constructor()
     * estado
     * props
     * contenido
     * render() => renderizamos nuestro componente para visualizar su informacion
     */
    render() {
        return (
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Acerca de</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        )
    }
}


