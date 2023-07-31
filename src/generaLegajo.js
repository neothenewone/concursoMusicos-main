import React from 'react';
import './generaLegajo.css';
import Pdf from "react-to-pdf";
import Cookies from 'universal-cookie';
import {useNavigate} from 'react-router-dom';
import devuelveDepartamento from './devuelveDepartamento';
import devuelveProvincia from './devuelveProvincia';
import regresaBienFecha from './regresaBienFecha';
const cookies=new Cookies();
function Legajo() {
    const ref = React.createRef();
   
   /* */
   const navitate = useNavigate()
   var parametro={
    "id":cookies.get('id'),
    "dni":cookies.get('dni'),
    "email":cookies.get('email'),
    "cuil":cookies.get('cuil,',{path:"/"}),
    "nombres":cookies.get('nombres',{path:"/"}),
    "apellido":cookies.get('apellido',{path:"/"}),
    "genero":cookies.get('genero',{path:"/"}),
    "estadoCivil":cookies.get('estadoCivil',{path:"/"}),
    "fechaDeNacimiento":cookies.get('fechaDeNacimiento',{path:"/"}),
    "argentinoNativo":cookies.get('argentinoNativo',{path:"/"}),
    "provinciaNacimiento":cookies.get('provinciaNacimiento',{path:"/"}),
    "lugarDeNacimiento":cookies.get('lugarDeNacimiento',{path:"/"}),
    "apellidoNombreMadre":cookies.get('apellidoNombreMadre',{path:"/"}),
    "apellidoNombrePadre":cookies.get('apellidoNombrePadre',{path:"/"}),    
    "resideProvincia":cookies.get('resideProvincia',{path:"/"}),
    
    "noResideProvincia":cookies.get('noResideProvincia',{path:"/"}),
    "localidad":cookies.get('localidad',{path:"/"}),
    "departamento":cookies.get('departamento',{path:"/"}),
    "domicilio":cookies.get('domicilio',{path:"/"}),
    "telefono_1":cookies.get('telefono_1',{path:"/"}),
    "telefono_2":cookies.get('telefono_2',{path:"/"}),
    "comisaria":cookies.get('comisaria',{path:"/"}),
    "nivelEstudio":cookies.get('nivelEstudio',{path:"/"}),
    "tituloSecundario":cookies.get('tituloSecundario',{path:"/"}),
    "fechaTituloSecundario":cookies.get('fechaTituloSecundario',{path:"/"}),
    "tituloSuperior":cookies.get('tituloSuperior',{path:"/"}),
    "fechaTituloSuperior":cookies.get('fechaTituloSuperior',{path:"/"}),
    "pregunta1":cookies.get('pregunta1',{path:"/"}),
    "pregunta2":cookies.get('pregunta2',{path:"/"}),
    "pregunta3":cookies.get('pregunta3',{path:"/"}),
    "pregunta4":cookies.get('pregunta4',{path:"/"}),
      
      }
      const nombreArchivo = 'Legajo de Inscripcion '+ parametro.dni+"/2023ECP-2.pdf";
      if(parametro.resideProvincia==="SI"){
      parametro.noResideProvincia="";
      }else{
        let variable=parametro.noResideProvincia;
        parametro.noResideProvincia="Provincia donde reside: "+devuelveProvincia(variable)[0].Provincia;
      }
      if(!parametro.telefono_2){
        parametro.telefono_2="-";
        }

        if(parametro.tituloSuperior==="null"){
          
          parametro.tituloSuperior=" ";
          parametro.fechaTituloSuperior=" ";
         
         
          
          }
          else{
          
          let variable2=parametro.tituloSuperior;
          parametro.tituloSuperior="Titulo "+parametro.nivelEstudio + ": "+ variable2 + " obtenido en fecha: "+regresaBienFecha(parametro.fechaTituloSuperior);
          }

      const volver=()=>
      {    if(  parametro.id === "-1"){
        
        navitate('/')
      }else
      
        navitate('/inscripto')
      }


      return (
      <div className="Legajo">
       
  <div ref={ref}>
    <div className='hojaLegajo'>
  <div className='titulo_legajo'>
  <hr />
    <h1>Legajo de Inscripcion nro: {parametro.dni+"/2023ECP-2"}</h1>
    <hr />

  </div> 
  <div className='datosPersonales_legajo'>
    <div className='sub_titulo_legajo'>Datos Personales</div>
    <div>Nro de DNI: <strong>{parametro.dni}</strong></div>
    <div>Nro de Cuil: <strong>{parametro.cuil}</strong></div>
    <div>Genero: <strong>{parametro.genero}</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Estado Civil:<strong> {parametro.estadoCivil} </strong></div>
    <div>Apellido y Nombre: <strong>{parametro.apellido.toUpperCase()}, {parametro.nombres.toUpperCase()} </strong></div>
    <div>Fecha de Nacimiento: <strong>{regresaBienFecha(parametro.fechaDeNacimiento)}</strong></div>
    <div>Argentino/a nativo/a o por opción: <strong>{parametro.argentinoNativo}</strong></div>
    <div>Provincia de Nacimiento: <strong>{devuelveProvincia(parametro.provinciaNacimiento)[0].Provincia}</strong></div>
    <div>Localidad de Nacimiento:<strong> {parametro.lugarDeNacimiento}</strong></div>
    <div>Apellido y Nombre Madre: <strong>{parametro.apellidoNombreMadre}</strong></div>
    <div>Apellido y Nombre Padre: <strong>{parametro.apellidoNombrePadre}</strong></div>
  </div>
  <hr />
  <div className='datosPersonales_legajo'>
    <div className='sub_titulo_legajo'>Domicilio y datos de Contacto:</div>
    <div>Reside en Santa Fe: <strong>{parametro.resideProvincia}  </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{parametro.noResideProvincia}</strong></div>
    <div>Departamento:<strong> {devuelveDepartamento(parametro.departamento)[0].Departamento}</strong></div>
    <div>Fecha de Nacimiento: <strong>{parametro.fechaDeNacimiento}</strong></div>
    <div>domicilio: <strong>{parametro.domicilio}</strong></div>
    <div>Provincia de Nacimiento: <strong>{devuelveProvincia(parametro.provinciaNacimiento)[0].Provincia}</strong></div>
    <div>Departamento: <strong>{devuelveDepartamento(parametro.departamento)[0].Departamento}</strong></div>
    <div>Teléfono:<strong> {parametro.telefono_1}</strong></div>
    <div>Teléfono Alternativo: <strong>{parametro.telefono_2}</strong></div>
    <div>E-mail:<strong> {parametro.email}</strong></div>
    <div>Comisaría Jurisdicción:<strong> {parametro.comisaria}</strong></div>
  </div>
  <hr />
  <div className='datosPersonales_legajo'>
    <div className='sub_titulo_legajo'>Educación Formal:</div>
    <div>Nivel Educativo Alcanzado y Completado: <strong>{parametro.nivelEstudio} </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <div>Titulo Secundario: <strong>{parametro.tituloSecundario} </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fecha de emisión del título: <strong>{regresaBienFecha(parametro.fechaTituloSecundario)}</strong></div>
    <div>{parametro.tituloSuperior}</div>
    
  </div>
  <hr />
  <div className='datosPersonales_legajo'>

    <div>¿Tiene algún cargo de planta permanente en la Administración Pública?: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{parametro.pregunta1}  </div>
    
    <div>¿Fue destituido, cesanteado o exonerado en cualquiera de los niveles de la Administración Pública?: &nbsp;&nbsp;&nbsp;&nbsp;{parametro.pregunta2}  </div>
    
    <div>¿Ha sido condenado por la justicia Provincial o Nacional por delitos o contravenciones?: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{parametro.pregunta3}  </div>
    
    <div>¿Se encuentra procesado por la justicia Provincial o Nacional?: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{parametro.pregunta4}  </div>
    
  </div>

  <div className='advertencia_cierre'>
   Recuerde que la inscripción se completará una vez entregada la totalidad de la documental requerida, en hora, fecha y sede que se asignará en publicación de la Página Web una vez cerrada la etapa de Pre Inscripción.
 
  </div>
  <div className='firma'>
  <br/>
  Firma y Aclaracion
  </div>
    </div>
  </div><Pdf targetRef={ref} filename={nombreArchivo}>
    {({ toPdf }) => <button onClick={toPdf} id="imprime">Guardar Legajo</button>}

    
  </Pdf>
  <button onClick={volver} id="edita">Volver</button>
      </div>
    );
  }
export default Legajo