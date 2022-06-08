import { Formik } from 'formik';

//uso de formik para formularios, se puede meter validaciones con YUP
export default function FormularioFormik() {
    // ...
    let initialValues = { nombre: '', descripcion: '', localidad: '' };

    let manejarEnvio = (values, {setSubmitting}) => {
        setTimeout(() => {
            console.log(`Se ha enviado el valor: ${values}`);

            console.log("%cDatos del formulario 📑", "color: green")
            console.log(`Nombre: ${values.nombre}`);        
            console.log(`Descripción: ${values.descripcion}`);           
            console.log(`Localidad: ${values.localidad}`); 
            setSubmitting(false);
        }, 1000);
    }

    return(
        <Formik initialValues={initialValues} onSubmit={manejarEnvio}>
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
	
                <form onSubmit={handleSubmit} className="Formulario">
                    <p/>
                    <strong>Mi formulario</strong>
                    <p/>
                
                    
                    <input className="Elemento" placeholder="Introduce tu nombre..." type="text"
                        name="nombre" onChange={handleChange} value={values.nombre} />
                    
                    <textarea className="Elemento" placeholder="Introduce tu descripción..."
                            name="descripcion" onChange={handleChange} value={values.descripcion} />
                    
                    <select className="Elemento" name="localidad"
                            onChange={handleChange} value={values.localidad}>
                        <option value="Málaga">Málaga</option>
                        <option value="Granada">Granada</option>
                        <option value="Sevilla">Sevilla</option>
                    </select>	
                    <button className="Elemento" type="submit" disabled={isSubmitting}>Enviar</button>
                </form>
                
            )}
        </Formik>
    );
}