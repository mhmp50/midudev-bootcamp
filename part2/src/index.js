import React from 'react';
//import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import {useState} from "react";   //para usar dentro de nuestro componente
//import { render } from '@testing-library/react';
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

//const App = (props) => {
  
  /*let contador  = 0
  setInterval(() => {         //aqui lo que pasa es que el contador se v a seguir incrementando en 1 pero en la pantalla no nos va a parecer mas que el cero. por eso es necesario el gancho "hook"
    console.log(contador)     //aqui vemos como se incrementa pero no nos lo muestra en pantalla, solo en consola.
    contador++
  }, 1000)*/
  
  //ahora usemos el "useState" pra no ahcer lo de arriba.
  
  //const [contadorValue, updateContador] = useState(1)        
    
    /*como parametro le pasamos el valor inicial del estado. (este se 
    conforma de dos cosas, una forma de actualizar el estado y el valor del contador). nos devuelve una lista de 
    dos posiciones.  el la primera nos devuelve el valor del estado y en al segunda nos devuelve un metodo que 
    al ejecutarlo podemos actualizar ese estado*/
  
  /*ahora, estas dos lineas las podemos simplifica con la desestructuracion de objetos y simploficarlo en la
  misma linea de codigo del "useState"
  
  const contadorValue = contador[0]         //el valor del contador
  const updateContador = contador[1]        //forma de actualizar el estado.*/

  /*nunca se debe utilizar un set interval de esta forma, ya que an reenderizar el componente este setInterval tambien se vuelve
  a ejecutar y es lo que hace qe la aplicacion se "pete", y que los numeros enloquescan, en vez de seguir 
  incrementando numero por numero. Existe un ejemplo mejor para ver como funcionan los estados en React*/
  /*setInterval(() => {
    updateContador(contadorValue + 1)
  }, 2000)*/

  /*console.log(render)  //aqui podemos ver si el componente se reenderiza*/

  /*esto es lo valioso de react, aunque tengamos varias etiquetas solo recarga aquella que le indiquemos, o donde
  esta nuestro componente asi no recargamos toda la pagina mara poder mostrar un simple cambio "DOOM VIRTUAL"
  lo que hace react es meter los cambio minimos necesarios en la UI para ver como se refleja el estado*/
  
  /*return (    
    <div>
      <p>el valor del contador es </p>
      <h1>{contadorValue}</h1>            
      <h2>magia de react</h2>
    </div>
  )
}

ReactDOM.render(<App />, rootElemnt);
*/

//¿cuando se renderiza el componente? cada vez que el estado cambia y tambien cuendo le llegan "props" nuevas

//------------------------------------------------------------------------------------------------------------------------

/*en ves del "setInterval" podemos usar un evento de click para cada vez que le demos click nos aumente en 
1 el contador */
const App = (props) => {
  
  const [contadorValue, updateContador] = useState(0)        
    
  console.log("render") /*aqui podemos ver que cada vez que hacemos click nos aparece en al consola un "render"
  asi podemos saber que cada vez que hacemos click el componente se reenderiza nuevamente*/

  /*algo tambien importante de React es que podemos crear "funciones helper". Esto significa que dentro del componente
  podemos crear funciones que neceistemos para resolver algun problemas aqui enseguida un ejemplo. */
  const handleReset = () => {   /*creamos esta funcion para resetear el contador a cero, asi en en boton solo llamamos la funcion por lo que el codigo que das mas limpio. hayq ue tener en cuenta que debemos llamar la funcion mas no la ejecucion de esta funcion es decir en el evento onClick llamamos la funcion sin parentecis, asi: onClick={handleReset} */
    updateContador(0)
  }

  /*vamos a indicar si el contador es impar o es par y que nos muestre el estado en la UI. una ves hecho esto
  llamamos la evaluacion "mensajePar" en un parrafo aparte <p>{mensajePar}</p> */
  const isEven = contadorValue % 2 ===0   //si contadorValue al dividirlo entre 2 el residuo es cero es par
  const mensajePar = isEven ? "Es Par" : "Es Impar" //aqui hacemos una evaluacion, si isEven es verdad (isEven ?) entonces "es par" si no (:) "es impar"

  return (    
    <div>
      <p>el valor del contador es </p>
      <h1>{contadorValue}</h1>
      <p>{mensajePar}</p>
      <button onClick={() => {              //creamos una funcion para llamar añadir un evento a nuestro compoente a travez de un "onClick" y que cada vez que le demos click aumente el contadorValue en 1.
        //updateContador(contadorValue + 1)   //existe otra forma de actualizar el estado, a updateContador tambien se le puede pasar una funcion por lo que:
        updateContador(prevContador => {      //aqui creamos un funcion donde le apsamos como parametro el contador previo "preContador" y le decimos que al ejecutarlo no regrese este "prevContador" + 1. la ventaja de realizarzo de esta forma es que nos aseguramos de siempre tener el valor anterior osea "prevContador" y a este sumarle 1 por lo que el resultado sera el siguiente prevContador al que deberemos sumar 1 nuevamente cuando el componente se vuelva a reenderizar. (tambien podriamos hacer la funcion aparte y pasarle aqui como parametro una funcion,"pero una funcion: onClick={funcion} mas NO la ejecucion de una funcion: onClick={funcion()} ---> esto esta mal, debe ir sin parentecis.") como se muestra en el boton de handleReset mas abajo. 
          return prevContador + 1;
        })
        }
      }
      >
        Incrementar
      </button>
      <button onClick={handleReset}>
        resetear
      </button>
    </div>
  )
}

ReactDOM.render(<App />, rootElemnt);
