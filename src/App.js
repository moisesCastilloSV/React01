import React,{ Fragment, useState} from 'react';
import logo from './logo.svg';
import Formulario from './components/Formulario';
import Cita from './components/Cita';



function App() {

const [citas, guardarCitas]=useState([]);

//funcion de agregar a citas
const crearcita=cita => {
guardarCitas ([
...citas,
cita

]);
}


  return (
    <Fragment>
    <div className="container">
     <div className="row">
      <div className="one-half column">
       <Formulario
       crearcita={crearcita}
       />
      </div>

      <div className="one-half column">
        <h2>Admistras tus citas </h2>
        {citas.map( cita =>(
              <Cita
              key={cita.id}
              cita={cita}
              
              />



        ))}


      </div>

     </div>

    </div>


    </Fragment>
  );
}

export default App;
