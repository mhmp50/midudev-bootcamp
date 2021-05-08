import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import {useState} from "react";   //para usar dentro de nuestro componente
/*import App from './App';*/          //vamos a borrar esto para simplificar y tener todo en este mismo fichero.

const rootElemnt = document.getElementById("root")

/*lo que vamos a hacer es que el navegador nos muestre un contador es decir el numero en la var "contador" se 
ira incrementando en un 1, pero el navegador nos muestra el resultado final mas no el como va cambiando.*/

/*const App = (props) => {
  return <h1>{props.contadorInicial}</h1>
}
let contador = 0*/

/*ReactDOM.render(
  <App contadorInicial={contador}/>,      //le vamos a pasar un props
  rootElemnt
);

contador = contador + 1

ReactDOM.render(                         //lo que hace esto es volver a reenderizar TODA la aplicacion.
  <App contadorInicial={contador}/>,              
  rootElemnt
); */
/*de esta forma incrementamos el contador en 1 mas sin envargo nunca miramos en el navegadro el apso del 5 al 6*/

//----------------------------------------------------------------------------------------------------------------------------

/*aqui lo uqe hicimos es utilizar "setInterval" para hacer un ciclo donde vaya sumando 1 al contador y refresque
automaticamente la app cada 1 segundo.*/

/*const refresh = () => {       
  reactDom.render(
    <App contadorInicial={contador}/>,
    rootElemnt
  )
}
//de este modo podemos ver en el navegador como el contadro va cambiando e incrementando
setInterval(() => {                 //cada segundo agrega 1 al contador y refresca la pagina cada 1 segundo
  refresh()
  contador++                        
}, 3000) */

/*sin embargo esta no es la forma correcta de hacerlo, ya que lo que hace es reenderizar TODA la aplicacion*/

//----------------------------------------------------------------------------------------------------------------------------

/*la forma correcta de hacer esto seria utilizando un estado dentro del propio componente, para esto lo que 
vamos a utilizar es un "HOOK" (gancho) esto nos permite ejecutar codigo en algunos momentos del componente, 
asi vamos a poder "engancharle un estado a nuestro componente" */
// 1.)  importamos el "useState" en la parte superior

const App = (props) => {
  
  /*let contador  = 0
  setInterval(() => {         //aqui lo que pasa es que el contador se v a seguir incrementando en 1 pero en la pantalla no nos va a parecer mas que el cero. por eso es necesario el gancho "hook"
    console.log(contador)     //aqui vemos como se incrementa pero no nos lo muestra en pantalla, solo en consola.
    contador++
  }, 1000)*/
  
  //ahora usemos el "useState" pra no ahcer lo de arriba.
  const contador = useState(1)        /*como parametro le pasamos el valor inicial del estado. (este se 
    conforma de dos cosas, una forma de actualizar el estado y el valor del contador). nos devuelve una lista de 
    dos posiciones.  el la primera nos devuelve el valor del estado y en al segunda nos devuelve un metodo que 
    al ejecutarlo podemos actualizar ese estado*/
  const contadorValue = contador[0]            //el valor del contador
  const updateContador = contador[1]        //forma de actualizar el estado.

  setInterval(() => {
    updateContador(contadorValue + 1)
  }, 2000)


  /*esto es lo valioso de react, aunque tengamos varias etiquetas solo recarga aquella que le indiquemos, o donde
  esta nuestro componente asi no recargamos toda la pagina mara poder mostrar un simple cambio "DOOM VIRTUAL"
  lo que hace react es meter los cambio minimos necesarios en la UI para ver como se refleja el estado*/
  return (    
    <div>
      <p>el valor del contador es </p>
      <h1>{contadorValue}</h1>            
      <h2>magia de react</h2>
    </div>
  )
}

ReactDOM.render(<App />, rootElemnt);