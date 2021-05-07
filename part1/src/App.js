import './App.css';
import Mensajeaparte from './Mensajeaparte.js' //importamos el modulo de un archivo diferente.
import Mensajeprops from './Mensajeprops.js'

//cuando queremos utilizar un elemnto mas de una vez,(que se va a repetir mucho) usamos un componente. importante: la primera letra en mayuscula. para utilizarlo vamos a la parte donde queremos usarlo y escribimos <Xxxx />
const Mensajea = () => {
  return <h2>titulo h1 para repetir varias veces</h2>
}
const Description = () => {
  return <p>Este texto tambien es para repetir varias veces.</p>
}


function App() {                 
  const mensaje = 'hola mundo desde variable'
  const a = 5
  const b = 6
  
  return (                      //esto es jsx, no es html, es javascrit pero visto en forma de html para facilitar el uso y entendimiento del codigo, ya que esto lo reenderiza y lo convierte en javascript puro para poder mostralo en el navegador
    <div className="App">
      <h1>Titulo de la app</h1>
      <Mensajea />
      <strong>a continuacion algunos ejemplos y casos</strong> <br />
      <div>
      {`${mensaje} que dice que dice`}  <br />
      <Description />
      {mensaje} mensaje <br />
      {a + b} <br />
      <Description />
      {`la suma de ${a} mas ${b} es igual a ${a + b}.`} 
      <br />new Date() esto nos manda error, hay que hacerlo en forma de timestand <br />
      <Mensajeaparte />
      {+new Date()} de esta forma si funciona <br />

      <Mensajeprops color='green' message='estamos trabajando' />
      <Mensajeprops color='yellow' message='en una apliacion' />
      <Mensajeprops color='red' message='de react js' />
      <Mensajeprops color='pink' message='prueba commit de' />
      <Mensajeprops color='pink' message='este mensaje no, tercer commit' />
      <Mensajeprops color='pink' message='este mensaje la misma cosa' />


      </div>
    </div>
  );
}

export default App;

//las llaves dentro del div son para poder evaluar cosas que tengan sentido, asi podemos traer variables al div
//new Date() esto no lo puede reenderizar por lo tanto nos mandara un error, lo que hay que hacer es por ejemplo transformalo en un timestand de forma que quedaria {+new Date()}
//los (((<MENSAJEA />))) y (((<DESCRIPTION />))) en el div son para usarlos varias veces de la funcion (componente) que creamos previamente en una const para asi poderlo usar varias veces.
//los anteriores componentes siempre tiene que crearce fuera de del componente APP.!!! NUNCA SE DEBE CREAR UN COMPONENTE DENTRO DE OTRO COMPONENTE !!! Eh incluso deberian estar en otro archivo por separado por buenas practicas
//(MENSAJEPROPS MESSAGE=.....) aqui lo que estmos haciendo es mandar ese texto a un modulo en otro archivo que lo que hace es transformarlo en un titulo tipo h2 y  mostrarnolo en pantalla.
//NOTA: solo se puede importar un modulo por archivo, si no nos manda error.
//NOTA: los componentes siempre deven usarce con su primera letra como mayuscula. esto es devido a que en el ejemplo de <Mensajeaparte /> los simbolos <> tambien son usados por las etiquetas HTML entonces is esta todo en minusculas <mensajeaparte /> react lo toma como una etiqueta HTML y no como un componente.
