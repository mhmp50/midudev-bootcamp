const Mensajeprops = (props) => {
    console.log(props)

    return <h2 style={{color: props.color}}> 
        {props.message} 
    </h2>  //aqui recibimos los datos ingresados en APP.js y los transformamos en un titulo h2. podemos hacerlo varias veces segun ingresemos los textos en APP.js 
}

export default Mensajeprops
