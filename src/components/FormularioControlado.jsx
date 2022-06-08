import React, { useState } from 'react';
export default function FormularioControlado() {
    //formulario controlado    
    const [value, setValue] = useState();
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripción] = useState('');
    const [localidad, setLocalidad] = useState('');

    let manejarCambios = (event) => {
        setValue(event.target.value);
        const name = event.target.name;
        const value = event.target.value;

        switch(name) {
            case 'nombre': setNombre(value); break;
            case 'descripcion': setDescripción(value); break;
            case 'localidad': setLocalidad(value); break;
            default: break;
        }
    };

    let manejarEnvio = (event) => {
        event.preventDefault();
        console.log(`Se ha enviado el valor: ${value}`);

        console.log("%cDatos del formulario 📑", "color: green")
        console.log(`Nombre: ${nombre}`);        
        console.log(`Descripción: ${descripcion}`);           
        console.log(`Localidad: ${localidad}`); 
    }

    return (
        <form onSubmit={manejarEnvio}>
            <label>Nombre: </label>
            <input type="text" value={value} onChange={manejarCambios}/>
            <select onChange={manejarCambios}>
                <option value="Málaga">Málaga</option>
                <option value="Granada">Granada</option>
                <option value="Sevilla">Sevilla</option>
            </select>
            <button type="submit">Enviar</button>

<br/>
<p/>
            <strong>Mi Formulario</strong>
            <p/>
            <input className="Elemento" placeholder='Introduce tu nombre...'
                type="text" name='nombre' onChange={manejarCambios} />
            <textarea className='Elemento' placeholder='Introduce tu descripción...'
                name='descripcion' onChange={manejarCambios} />
            <select className='Elemento' name='localidad' onChange={manejarCambios}>
                <option value="Málaga">Málaga</option>
                <option value="Granada">Granada</option>
                <option value="Sevilla">Sevilla</option>
            </select>    
            <button className='Elemento' type="submit">Enviar</button>
        </form>
    );
}