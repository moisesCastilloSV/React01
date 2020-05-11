import React,{ Fragment} from 'react';
import logo from './logo.svg';
import Formulario from './components/Formulario';



function App() {
  return (
    <Fragment>
    <div className="container">
     <div className="row">
      <div className="one-half column">
       <Formulario/>
      </div>

      <div className="one-half column">
        2
      </div>

     </div>

    </div>


    </Fragment>
  );
}

export default App;
