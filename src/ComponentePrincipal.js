//es necesario para ejecutar codigo JSX y componentes funcionales
//useState es necesario para crear hooks
import React, { useState } from 'react'; 

//importamos los componentes secundarios
import { Controles } from './Controles';
import { Resultados } from './Resultados';

//creamos un componente funcional 
export const ComponentePrincipal = () => {

    //creamos un hook para controlar la cantidad de habitaciones
    //usamos useState para crear el hook
    const [tablas, setTablas] = useState(['Coloca dos dígitos, uno en cada barra. Presiona el botón que quieras para ver su resultado']);

    //los componentes funcionales retornan codigo JSX que es codigo HTML
    //mas codigo JavaScript
    return (
        <>
        <Controles setTablas={ setTablas } tablas={ tablas }/>
        <Resultados tablas={ tablas } />
        </>
    )
}; 