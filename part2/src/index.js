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
  })

  const handleClickLeft = () => {
    setCounters({
      left: counters.left + 1,
      right: counters.right
    })
  }

  const handleClickRight = () => {
    setCounters({
      left: counters.left,
      right: counters.right + 1
    })
  }

    return (
      <div>
        {counters.left}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
        {counters.right}
      </div>
    )
  }


ReactDOM.render(<App />, rootElemnt);
