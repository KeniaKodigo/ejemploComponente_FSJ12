import './App.css'
import Nav from './components/Nav'
import Head from './components/Head'
import Lista from './components/Lista'

/** componente funcional  */
function App() {
  return (
    <div className="App">
      {/**
       * pasando el argumento nombre de las props del componente Head
      
      <Head nombre="Kenia"/>

      <Head nombre="Rodrigo"/>
      <Nav /> */}
      <Lista />
    </div>
  )
}

export default App
