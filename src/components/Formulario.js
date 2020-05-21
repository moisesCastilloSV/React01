import React,{Fragment,useState} from 'react';
import { v4  as uuidv4 } from 'uuid';


const Formulario = ({crearcita}) => {

//creacion  State de citas
const [cita, updateCita]=useState({
    mascota:'',
    propietario:'',
    fecha:'',
    hora:'',
    sintomas:''
});

const [error,actualizarError]=useState(false);

//Funcion que se ejecuta cada ves que el usuario escribe en un input
const actualizarState = e => {
    updateCita({
        ...cita,
        [e.target.name]:e.target.value
    })

}

//extraccion del obejeto
const {mascota,propietario,fecha,hora,sintomas} = cita;

//Cuando preciona el boton del formario
const SubmitCita =  e=>{
    e.preventDefault();
     
    //Validar 
    if (mascota.trim() ==='' || propietario.trim() ==='' || fecha.trim() ==='' ||   hora.trim() ==='' ||   sintomas.trim() ===''  ){
        actualizarError(true);
        return;
    }
    actualizarError(false);


    //Aasignacion de ID
    cita.id=uuidv4();
 
    //Creacion de Cita
    crearcita(cita);
    //Reinicar el Form
    updateCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''


    })

}


    return (   
    <Fragment>

       <h2>Crear Citas</h2>
       {error ? <p className="alerta-error">Todos los Campos son Obligatorio</p> :null}

      <form
      onSubmit={SubmitCita}
      >
        <label>Nombre Mascota</label>
        <input
        type="text"
        name="mascota"
        className="u-full-width"
        placeholder="Nombre de Mascota" 
        onChange={actualizarState}
        value={mascota}
              
        />
        <label>Nombre Dueño</label>
        <input
        type="text"
        name="propietario"
        className="u-full-width"
        placeholder="Nombre Dueño de Mascota"
        onChange={actualizarState} 
        value={propietario}       
        />
        <label>Fecha</label>
        <input
        type="date"
        name="fecha"
        className="u-full-width"
        onChange={actualizarState}
        value={fecha}                 
        />
         <label>Hora</label>
        <input
        type="time"
        name="hora"
        className="u-full-width"
        onChange={actualizarState}
        value={hora}                
        />
         <label>Sintomas</label>
        <textarea        
        name="sintomas"
        className="u-full-width"
        onChange={actualizarState}
        value={sintomas}                 
        ></textarea>   
        <button
        type="submit"
        className="u-full-width button-primary"
        
        >Agregar cita</button>     
                       
      </form>
    </Fragment>
    
    );
}
 
export default Formulario;