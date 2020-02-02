import React, {useState,Fragment} from 'react';
import MenuPrincipal from '../MenuPrincipal/MenuPrincipal';
import { Button ,Alert} from 'react-bootstrap';

function PaginaPrincipal() {
    const [count, setCount]  = useState(0);
    const [menuAgregar, setMenuAgregar] = useState(false);
    const [showAlert, setShowAlert] = useState(true);
    const [colorAlert, setColorAlert]= useState("success");

    function mostrar ()
    {
      /*
      if(menuAgregar == false )
      {
        setMenuAgregar(true);
      }
      else
      {
        setMenuAgregar(false);
      }*/
      if(showAlert)
      {
        setShowAlert(false);
      }
      else
      {
        setShowAlert(true);
      }
    }
    function cambiarColorAlert()
    {
      if(colorAlert === "success")
      {
        setColorAlert("danger");
      }
      else
      {
        setColorAlert("success");
      }

    }
    
  return (
    <Fragment >
      <Alert show = {showAlert} dismissible variant={colorAlert}>
      <Alert.Heading>Esta todo bien!</Alert.Heading>
      <p>
        Toca el boton "Cambiar color" y veras lo que pasa.
      </p>
    </Alert>
    <button onClick= {cambiarColorAlert}>cambiar color</button>

      <button onClick= {mostrar}>ocultar alerta</button>
        {menuAgregar && <MenuPrincipal></MenuPrincipal>}
    </Fragment>
  );
}

export default PaginaPrincipal;
