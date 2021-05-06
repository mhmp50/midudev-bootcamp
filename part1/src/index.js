import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(                  //es una libreria que instala las dependencias necesarias para poder renderizar react en el navegador.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //aqui es a donde lo renderiza y lo anterior es lo que tiene que renderizar (lineas 8,9 y 10).
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
