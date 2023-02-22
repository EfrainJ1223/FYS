import React from 'react';
import './Testimonio.css' 

import imagenes from '../imagenes/imagenes';

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={imagenes.imgen1}    
                alt='Efrain'
            />
            <div className='contenerdor-texto-testimonio'>
                <p className='nombre-testimonio'> <strong>{props.nombre}</strong>  en {props.pais} </p>
                <p className='cargo-testimonio'> {props.cargo} Para <strong>{props.empresa}</strong> </p>
                <p className='texto-testimonio'>{props.parrafo}</p>
            </div>
        </div>
    );
}
export default Testimonio;