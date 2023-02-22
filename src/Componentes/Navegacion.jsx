import React, {useState} from "react";
import './Navegacion.css'
import logo from '../imagenes/LogoFT.jpg'


const Navegacion = () => {
    //Creamos una variable para mover los item de el Menu */
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="navbar">
            <div className="logo_nav">
                <img
                    className="img_logo"
                    src={logo}
                    alt="Logo de Yerly"
                />
            </div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#" >Inicio</a>
                <a href="#" >Experiencia Laboral</a>
                <a href="#" >CV</a>
                <a href="#" >Estudio</a>
                <a href="#" >Fisioterapia</a>
                <a href="#" className="What">WhatsApp ⚕️🩺</a>
            </div>

            <div className={`nav_boton ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    )

}
export default Navegacion