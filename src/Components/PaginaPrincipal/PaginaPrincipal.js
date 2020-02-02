import React, {useState,Fragment} from 'react';
import MenuPrincipal from '../MenuPrincipal/MenuPrincipal';
import { Button ,Navbar,Alert} from 'react-bootstrap';
import './PaginaPrincipal.css';

function PaginaPrincipal() {
  return (
    <Fragment >
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="nombredelaaplicacion" >Controlador de stock</Navbar.Brand>
    </Navbar>
    <Button variant ="outline-primary" className='botonesdemenu'> Agregar Producto</Button>
    <Button variant ="outline-primary" className='botonesdemenu'> Quitar Producto</Button>
    <Button variant ="outline-primary" className='botonesdemenu'> Listar Productos</Button>
    <Button variant ="outline-primary" className='botonesdemenu'> Listar Proveedores</Button>
    </Fragment>
  );
}

export default PaginaPrincipal;
