// es necesario para ejecutar codigo JSX y componentes funcionales
import React from 'react';
// es necesario para navegar en el arbol html
import ReactDOM from 'react-dom'; 
// importa el componente principal
import { ComponentePrincipal } from './ComponentePrincipal';

import './index.css' // Hoja de Estilo

// renderiza el documento index.htm y agrega el componente
ReactDOM.render(
    <ComponentePrincipal />,
    document.getElementById('principal') // linea para renderizar la aplicacion de React
);