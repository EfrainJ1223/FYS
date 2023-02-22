import './App.css'
import Navegacion from './Componentes/Navegacion'
import Testimonio from './Componentes/Testimonio'

function App() {

  return (
    <div className="App">
      <Navegacion />
      <div className='contenedor-principal'>
        <h1> Fisioterapia y Rehabilitacion Fisica: </h1>
        <Testimonio
          nombre='Yerly Soltelo.'
          pais='Bogota Colombia'
          imagen='efra'
          cargo='Fisioterapeuta'
          empresa='Clinica Fundacion Santafe'
          parrafo='Un párrafo es donde describire todas las funciones en el cargo, una unidad de un texto compuesta por una o varias oraciones, que comienza con una mayúscula y que termina con un punto y aparte. Los textos se organizan de manera tal que cada párrafo trata sobre una idea central' >
        </Testimonio>


      </div>
    </div>
  )
}
export default App
