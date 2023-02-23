import React from 'react'
import ReactDOM from 'react-dom/client'
/** aqui estamos llamando al componente App */
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /**
   * StricMode => herramienta para manejar de forma estricta los errores al momento de ejercutar
   * los componentes
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
