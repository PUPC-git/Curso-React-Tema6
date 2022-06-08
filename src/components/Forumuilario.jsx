import React, { useRef, createRef } from 'react';
export default function Formulario() {
    //formulario clasico en estado incontrolado, se puede usar useRef o createRef
    //const text = useRef();
    const text = createRef();

    let manejarEnvio = (event) => {
        event.preventDefault();
        console.log(`Se ha enviado el valor: ${text.current.value}`);
    }

    return (
        <form onSubmit={manejarEnvio}>
            <label>Nombre: </label>
            <input type="text" ref={text}/>
            <button type="submit">Enviar</button>
        </form>
    );
}