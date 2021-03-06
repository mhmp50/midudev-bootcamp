import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from "react";   //para usar dentro de nuestro componente

const rootElemnt = document.getElementById("root")


//codigo copiado de fullstack, dos contadores una a la izquiera y otro a l aderecha que se vana  ir incrementando cuando le demos click ya sea al boton izq o al de la derecha
const App = (props) => {
    /*const [left, setLeft] = useState(0)     para fines practicos vamosa  relizar esto en un solo estado
    const [right, setRight] = useState(0)     aunque esta seria la forma correcta de hacerlo ya que asi no abra
    confuciones ni el codigo en react tendria errores.
    vamos a realizar lo anterior en un solo estado, no separado en partes pequeñas, para entender como funcionan estos.
    */

  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    //clicks: 0,    //agregamos un contador para cada click que demos ya sea en el derecho o en el izquierdo
    mensaje: "counter mensajirijillo"    //si usamos el codigo de la parte de abajo para manejar estados lo que pasa es que le estamos diciendo que sobreeescriba el estado con lo que tenemos abajo por lo tanto este mensaje si no lo citamos abajo se borrara cuando demos click en algun boton, para esto necesutamos hacer un "...counters" que hara una nueva compia del estado viego y reeemplazara solo aquellos cosas que cambien.  
  })
  const [clicks, setClicks] = useState([]) //asi podemos contar el numero de clicks que se han dado del boton izquiero y tambien cada click del boton derecho, asi como ademas podemos calcular de aqui mismo el numero total de click con {clicks.length}

  const handleClickLeft = () => { //lo que le estamos diciendo es que el nuevo mensaje esto el codigo e abajo por lo que si no citamos todos los elemnetods del array, al momento de ejecutar algo que actualiza el estado borrara lo que no este en este estado asi este en el useState de arriba.
    setCounters({
      ...counters,                 //aqui usaremos un "Spread Operator" para cuando actualzia el estado guarde los elementos del objeto array "useState" y asi al sobreescribir el estado ya tendra guardados todos los elemntos en un nuevo objeto y solo actualizara (en realidad sobreescribira) los elemnetos que le indiquemos en el Handle. si no hacemos esto cuando agregemos un elemnto en el objeto "useState" tambien tenemos que agregarlo en el handle para que no se borre al actualizar el estado. 
      left: counters.left + 1,
      //right: counters.right,    //este elemnento como no se actuliza ya no necesitamos ponerlo en el handle ya que lo traemos con "...counters", asi solo ponemos los elemntos del objeto que queremos se actualicen o se sobreescriban.
      clicks: counters.clicks + 1
    })
    setClicks(prevClicks => ([...prevClicks, "L"]))

  }

  const handleClickRight = (event) => {
    console.log(event)    //hay que tener en cuenta que cuando le damos al boton en <button onClick={handleClickLeft}>left</button> lo que estamos haciendo es mandado esos parametros que los recibe el handle atravez de un "event" si hacemos un console.log a este event nos puede dar informacion muy util y relevante segun lo qu encesitemos.
    setCounters({
      ...counters,
      right: counters.right + 1,
      clicks: counters.clicks + 1
    })
    setClicks(prevClicks => ([...prevClicks, "R"]))   //para que cada vez que le demos un clicl al boton left, no muestre en la UI un "R" por cada click
  }

    return (
      <div>
        {counters.left}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
        {counters.right}
        <p>numero de clicks {clicks.length}</p>
        <p>{counters.mensaje}</p>
        {clicks.join(', ')}
      </div>
      
    )
  }


ReactDOM.render(<App />, rootElemnt);


//.join()  asi podemos agregar un espacio o cualquier cosa que queramos
//MUY IMPORTANTE: siempre que se pueda tener hayq ue evitar los estados, entremenos se tenga la app sera mas cecncilla. "se debe tener el calculo en el menor numero de sitios". !EVITAR A TODA COSTA TENER ESTADOS QUE NO SE NECESITEN!.
