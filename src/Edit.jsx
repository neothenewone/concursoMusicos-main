import * as React from 'react';
import { set, useForm } from 'react-hook-form';
import {useNavigate,useParams} from 'react-router-dom';
import Cookies from 'universal-cookie';
import './edit.css';

import generaLegajo from './generaLegajo';
import regresaBienFecha from './regresaBienFecha';

var muestraEdita=false;
const cookies=new Cookies();

function Loguin() {

  
 const navitate = useNavigate()
 
const legajoNro=cookies.get('dni',{path:"/"}) +"/2023ECP-2"
 
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({});

  
  const onSubmit = () => {
    
    navitate('/new')
    };

  const volver=()=>
  {
    
    navitate('/')
  }
  
 

  
  const imprimeLegajo=()=>
  {
    navitate('/imprime')
  }
  if(!cookies.get('id',{path:"/"})){

     window.location.href='./';
}else{
  if(cookies.get('Abiertas',{path:"/"})==="true"){
    muestraEdita=false;
  
  }
}

  return (
    <div ><h1 className="resolucion_edit">
    El dispositivo donde esta realizando el presente no cumple con la
    resolucion de pantalla mínima para continuar. Si esta desde un celular intente Girando la pantalla.
  </h1>
    <div className='form__container_edit'>
      
      <form onSubmit={handleSubmit(onSubmit)} className='form_edit_back'>
        <section className="form__group">
          <h3 className="edit__title">Usted ya se encuentra inscripto bajo legajo nro {legajoNro}</h3>
          <h3 className="edit__subtitle">Se inscribio en fecha {regresaBienFecha(cookies.get('createdAt',{path:"/"}))}</h3>
          <h3 className="edit__sub-title">Nombre: {cookies.get('nombres',{path:"/"})}</h3>
          <h3 className="edit__sub-title">Apellido: {cookies.get('apellido',{path:"/"})}</h3>
          <h3 className="edit__sub-title">DNI: {cookies.get('dni',{path:"/"})}</h3>
          <h3 className="edit__sub-title"></h3>
        </section>
          <section>
        

        <div className="contenedor_boton_edit">
          <input type="button" value="Imprima su legajo"  id="imprime" onClick={imprimeLegajo} />
          
        </div>
        <div className="contenedor_boton_edit">
          <input type="button" value="Edite su legajo"  id="imprime" onClick={onSubmit} />
          
        </div>
        <div className="contenedor_boton_edit">
          <input type="button" value="Salir"  id="edita" onClick={volver}/>
          
        </div>
        </section>
      </form>

      <footer>
        <div className="edit__footer">
          <p>DTyD 2023 sistemas@isepsantafe.edu.ar</p>
        </div>
      </footer>
      
    </div></div>
  );
}
export default Loguin;
