//es necesario para ejecutar codigo JSX y componentes funcionales
import React, { useState } from 'react'; 

//creamos un componente funcional 
export const Controles = ( {setTablas, tablas} ) => {

    //creamos un hook para obtener el valor del input
    const [primerValor, setPrimerValor] = useState('');

    const [segundoValor, setSegundoValor] = useState('');

    //creamos un evento que actualiza el valor del hook cuando escriben en el input
    const onChange = (e) => { 
        setPrimerValor( e.target.value ) 
    }
    
    const onChange2 = (e) => {   // este onChange se le agrego un 2 para el un nuevo input y sea diferente al primario, este onChange2 se nombra hasta abajo CHECALE BIEN 
        setSegundoValor( e.target.value ); 
    }   
 
    //creamos la funcion del evento onclick del boton Resultados
    //const alHacerClick = (e) => { 
 
        //crear un arreglo vacio para guardar el resultado
    //    const sumar = [...tablas]; // se lleno aqui con el otro hook de "tablas", 
                                     // para cuando entre el siguiente arreglo de tablas, 
                                     // aparesca abajo y no cambien el que ya esta en pantalla
        //ciclo de 1 al 10
    //    for (let i = 1; i <= 10 ; i++) {
            //calcular la tabla 1 x n  2 x n 3 x n etc
    //        const resultado = i * valorInput;
            //ingresar los resultados uno por uno
    //        arreglo.push( valorInput + ' x ' + i + ' = ' + resultado);
    //    }

        //enviar al HOOK el arreglo que pretendo mostrar en pantalla
    //    setTablas(arreglo);

    //}; 


    //funcion del evento onclick del boton Suma
    const alHacerClickSuma = (e) => { 
 
        const arregloSuma = [...tablas];  // constante para las sumas y que aparescan abajo
        
        // valor del primer Imput mas el otro valor de Imput2
        const suma = Number(primerValor) + Number(segundoValor);

        //ingresar los resultados de las sumas
        arregloSuma.push( primerValor + ' + ' + segundoValor + ' = ' + suma );

        //enviar al HOOK el arreglo que pretendo mostrar en pantalla
        setTablas(arregloSuma);

    };
    
    //funcion del evento onclick del boton Restar
    const alHacerClickResta = (e) => { 
 
        const arregloResta = [...tablas];  // constante para las restas y que aparescan abajo

        // valor del primer Imput menos el otro valor de Imput2
        const resta = Number(primerValor) - Number(segundoValor);

        //ingresar los resultados de las restas
        arregloResta.push( primerValor + ' - ' + segundoValor + ' = ' + resta );

        //enviar al HOOK el arreglo que pretendo mostrar en pantalla
        setTablas(arregloResta);

    };
    
    //funcion del evento onclick del boton Multiplicar
    const alHacerClickMulti = (e) => { 
 
        const arregloMulti = [...tablas];  // constante para las multiplicaciones y que aparescan abajo
       
        // valor del primer Imput por el otro valor de Imput2
        const multiplicar = Number(primerValor) * Number(segundoValor);

        //ingresar los resultados de las multiplicaciones
        arregloMulti.push( primerValor + ' x ' + segundoValor + ' = ' + multiplicar );

        //enviar al HOOK el arreglo que pretendo mostrar en pantalla
        setTablas(arregloMulti);

    };
    
    //funcion del evento onclick del boton Dividir
    const alHacerClickDividir = (e) => { 
 
        const arregloDividir = [...tablas];  // constante para las divisiones y que aparescan abajo

        // valor del primer Imput entre el otro valor de Imput2
        const dividir = Number(primerValor) / Number(segundoValor);

        //ingresar los resultados de las divisiones
        arregloDividir.push( primerValor + ' / ' + segundoValor + ' = ' + dividir );
        //}

        //enviar al HOOK el arreglo que pretendo mostrar en pantalla
        setTablas(arregloDividir);

    };
    
    

    //los componentes funcionales retornan codigo JSX que es codigo HTML
    //mas codigo JavaScript
    //asignamos un evento onClick del boton a la funcion alHacerClick
    return (
        <>
            <input  type="text" value={ primerValor } onChange={ onChange } />
            <input  type="text" value={ segundoValor } onChange={ onChange2 } /> {/* aqui no cambia el onChange ( color verde ), solo se cambia el que esta en blanco */}
            <button className ="boton" onClick={ alHacerClickSuma }> Sumar </button>
            <button className ="boton" onClick={ alHacerClickResta }> Restar </button>
            <button className ="boton" onClick={ alHacerClickMulti }> Multiplicar </button>
            <button className ="boton" onClick={ alHacerClickDividir }> Dividir </button>
        </>
    )
};