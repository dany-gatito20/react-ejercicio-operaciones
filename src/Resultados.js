//es necesario para ejecutar codigo JSX y componentes funcionales
import React from 'react'; 

//creamos un componente funcional 
//recibimos las habitaciones desde props 
export const Resultados = ( { tablas } ) => {

    //los componentes funcionales retornan codigo JSX que es codigo HTML
    //mas codigo JavaScript
    return (<>
        <ul>  
            {
            tablas.map( (tabla , i) => {
                    return <li key={ i }> { tabla } </li>
                })
            }
        </ul>
        </>);        
};


