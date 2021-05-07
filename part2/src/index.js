import React from 'react';
import ReactDOM from 'react-dom';
/*import App from './App';*/          //vamos a borrar esto para simplificar y tener todo en este mismo fichero.

const rootElemnt = document.getElementById("root")

/*lo que vamos a hacer es que el navegador nos muestre un contador es decir el numero en la var "contador" se 
ira incrementando en un 1, pero el navegador nos muestra el resultado final mas no el como va cambiando.*/

const App = (props) => {
  return <h1>{props.contadorInicial}</h1>
}

let contador = 5

ReactDOM.render(
  <App contadorInicial={contador}/>,      //le vamos a pasar un props
  rootElemnt
);

contador = contador + 1

ReactDOM.render(                         //lo que hace esto es volver a reenderizar TODA la aplicacion.
  <App contadorInicial={contador}/>,              
  rootElemnt
);
/*de esta forma incrementamos el contador en 1 mas sin envargo nunca miramos en el navegadro el apso del 5 al 6*/
