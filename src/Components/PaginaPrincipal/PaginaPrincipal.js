import React, {useState,Fragment} from 'react';
import  { Button, Navbar,Container, Row } from 'react-bootstrap';
import './PaginaPrincipal.css';
import {IoIosArrowDropleft} from 'react-icons/io';

function PaginaPrincipal() {
  const [showMenu,setShowMenu] = useState(true);
  const [botonVolver, setBotonVolver] = useState(false);

  function ElegirOpcionDeMenuPrincipal()
  {
    if(showMenu === true && botonVolver === false)
    {
      setBotonVolver(true);
      setShowMenu(false);
    }
    else
    {
      setBotonVolver(false);
      setShowMenu(true);
    }
  }

  return (
    <Fragment >
      
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="nombredelaaplicacion" >Controlador de stock</Navbar.Brand>
      </Navbar>
    
      {botonVolver  && showMenu === false &&
        <Button onClick={ElegirOpcionDeMenuPrincipal} variant ="outline-primary" className='botonesdemenu'> <IoIosArrowDropleft></IoIosArrowDropleft> volver al menu</Button>
      }

      {showMenu && 
        <div className='contenedordemenudeinicio'>
          <Container>
            <Row>
              <Button onClick={ElegirOpcionDeMenuPrincipal} variant ="outline-primary" className='botonesdemenu'> Agregar Producto</Button>
              <Button variant ="outline-primary" className='botonesdemenu'> Quitar Producto</Button>
            </Row>
            <Row>
              <Button variant ="outline-primary" className='botonesdemenu'> Listar Productos</Button>
              <Button variant ="outline-primary" className='botonesdemenu'> Listar Proveedores</Button>
            </Row>
          </Container>
        </div>
      }
    </Fragment>
  );
}

export default PaginaPrincipal;
