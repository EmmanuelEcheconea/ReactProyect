import React, {useState,Fragment} from 'react';
import MenuPrincipal from './MenuPrincipal';
function PaginaPrincipal() {
    const [count, setCount]  = useState(0);
    const [menuAgregar, setMenuAgregar] = useState(false);

    function mostrar ()
    {
      if(menuAgregar == false )
      {
        setMenuAgregar(true);
      }
      else
      {
        setMenuAgregar(false);
      }
    }
    

  return (
    <Fragment >
      <h1>HOLA MUNDO {count}</h1>
      <button onClick= {mostrar}>agregar producto</button>
      
        {menuAgregar && <MenuPrincipal></MenuPrincipal>}
      
    </Fragment>
  );
}

export default PaginaPrincipal;
