import './App.css'
import Navegacion from './Componentes/Navegacion'
import Testimonio from './Componentes/Testimonio'

function App() {

  return (
    <div className="App">
      <Navegacion />
      <div className='contenedor-principal'>
        <h1> Fisioterapia y Reabilitacion Fisica: </h1>
          <Testimonio
            nombre='Santigo Jimenez'
            pais='Colombia'
            imagen='mami'
            cargo='Ingeniero de Software'
            empresa='Amazon SAS'
            parrafo='Un párrafo es una unidad de un texto compuesta por una o varias oraciones, que comienza con una mayúscula y que termina con un punto y aparte. Los textos se organizan de manera tal que cada párrafo trata sobre una idea central' >
        </Testimonio>
        
        
        </div>
    </div>
  )
}
export default App
