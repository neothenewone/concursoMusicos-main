import { useForm } from 'react-hook-form';
import './formulario.css';
import './style.css';
import axios from "axios";
import convierte from './convierte'
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import seteaCokie from './seteaCokie';

function Formulario () {
  const cookies=new Cookies();
  const navitate = useNavigate();
  const ID=cookies.get('id');
  const parametro={
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
  "createdAt":cookies.get('createdAt',{path:"/"})
    }
  
  if(!parametro.dni){
     window.location.href='./';
 }
  const URI='https://apps.isepsantafe.edu.ar/inscriptos/'
  

  
  

  const store=async (data)=>{
    await axios.post(URI,convierte(data))
    alert("creado!!!");
    
    seteaCokie(data);
    cookies.set('id',"-1", {path:"/"});
    navitate('/imprime');
   }

   const update=async (data)=>{
    
    await axios.put(URI+ID,convierte(data))
    alert("Actualizado!!!")
    navitate('/antecedentes')
   }
  const {register, formState: { errors }, watch, handleSubmit,} = useForm({
  defaultValues: parametro//recupero lo que pasa por parametros
  });
  const volver=()=>
  {
  
    navitate('/inscripto')
  }
    
 


  const onSubmit = (data) => {
  console.log(data);
    
    if(!ID)
    {
    store(data)
   
    }
    else{
    navitate('/Antecedentes')
    seteaCokie(data);
 
  }
  };
  const fechaMinima = '1995-07-08';
  const fechaMaxima = '2005-07-07';
  const fechaMinimaT = '2011-12-28';
  const fechaMaximaT= '2023-07-07';
  const titulo =
    'Pre Inscripción Técnico Superior en Seguridad Pública y Ciudadana';
  const subTitulo = 'Ingreso 2023 Segundo Tramo';
  
  const argentinoNativo=watch('argentinoNativo','SI');
  const resideProvincia = watch('resideProvincia', 'SI');
  const nivelEstudio=watch('nivelEstudio');
  

//Aca enpieza el react lo anterior es javascript y hooks

  return (
    <div>
      <div className="titulo">
        <h2>{titulo}</h2>
        <h2>{subTitulo}</h2>
        <h2 className='Posicion'>Datos Personales</h2>
      </div>
      <h1 className="resolucion">
        El dispositivo donde esta realizando el presente no cumple con la
        resolucion de pantalla mínima para continuar. Si esta desde un celular intente Girando la pantalla.
      </h1>
      
      <form className='form__formulario' onSubmit={handleSubmit(onSubmit)}>
        <section className="datos-personales">
          
          <h3 className="encabezados">Datos Personales</h3>{/* ENCABEZADOS*/}
          <hr />
          <div className='input__formulario'>
          {errors.dni?.type === 'required' && (
            <span className="aviso_formulario">Es un campo requerido!!!</span>
          )}
          {errors.dni?.type === 'pattern' && (
            <span className="aviso_formulario">
              Formato invalido solo numeros sin . ni -{' '}
            </span>
          )}
          {errors.dni?.type === 'maxLength' && (
            <span className="aviso_formulario">Formato invalido solo 8 numeros </span>
          )}
          {errors.dni?.type === 'minLength' && (
            <span className="aviso_formulario">Formato invalido solo 8 numeros </span>
          )}
          
          <input
            type="text"
            placeholder="Ingrese nro DNI" className="input__formulario"
            {...register('dni', {
              required: true,
              pattern: /^-?\d+(?:,\d+)?(?:[Ee][-+]?\d+)?$/i,
              maxLength: 8,
              minLength: 8,
            })}
          />
          <div>
            {errors.email?.type === 'required' && (
              <span className="aviso_formulario">Es un campo requerido!!!</span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className="aviso_formulario">
                Debe tener una direccion de correo valida!!!
              </span>
            )}
            <input className="input__formulario"
              type="text"
              placeholder="Email" autoComplete='true'
              {...register('email', {
                required: true,
                pattern:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
              })}
            />
          </div>
          {errors.cuil?.type === 'required' && (
            <span className="aviso_formulario">Es un campo requerido!!!</span>
          )}
          {errors.cuil?.type === 'pattern' && (
            <span>Formato invalido solo numeros sin . ni - </span>
          )}
          {errors.cuil?.type === 'maxLength' && (
            <span>Formato invalido solo 11 numeros </span>
          )}
          {errors.cuil?.type === 'minLength' && (
            <span>Formato invalido solo 11 numeros </span>
          )}
          <input className="input__formulario"
            type="text"
            placeholder="CUIL"
            {...register('cuil', {
              required: true,
              pattern: /^-?\d+(?:,\d+)?(?:[Ee][-+]?\d+)?$/i,
              maxLength: 11,
              minLength: 11,
            })}
          />
            <div>
            {errors.nombres?.type === 'required' && (
              <span className="aviso_formulario">Es un campo requerido!!!</span>
            )}
            {errors.nombres?.type === 'maxLength' && (
              <span className="aviso_formulario">
                Debe tener menos de 50 caracteres!!!
              </span>
            )}
            <input className="input__formulario"
              type="text"
              placeholder="Nombres"
              {...register('nombres', {
                required: true,
                maxLength: 50,
              })}
            />
          </div>
          

          <div>
            {errors.apellido?.type === 'required' && (
              <span className="aviso_formulario">Es un campo requerido!!!</span>
            )}
            {errors.apellido?.type === 'maxLength' && (
              <span className="aviso_formulario">
                Debe tener menos de 12 caracteres!!!
              </span>
            )}
            <input className="input__formulario"
              type="text"
              placeholder="Apellido"
              {...register('apellido', {
                required: true,
                maxLength: 50,
              })}
            />
          </div>
          <div>
            <label for="genero">Género</label>
            <br />
          <select
            className="deptos" id='genero'
            {...register('genero', {
              required: true,
            })}
          >
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="X">X</option>
          </select></div>
          
            <div><label for="estadoCivil">Estado Civil</label>  <br />
          <select
            className="deptos" 
            id='estadoCivil'
            {...register('estadoCivil', {
              required: true,
            })}
          >
            <option value="Soltero/a">Soltero/a</option>
            <option value="Casado/a">Casado/a</option>
            <option value="Conviviente/Unión Civil">Conviviente/Unión Civil</option>
            <option value="Separado/a o Divorciado/a">Separado/a o Divorciado/a</option>
            <option value="Viudo/a">Viudo/a</option>
           
          </select>
          </div>
          
          <hr />
          <div>
            <label for="fechaDeNacimiento">Fecha de Nacimiento</label>
            {errors.fechaNacimiento?.type === 'required' && (
              <span className="aviso_formulario">
                Indique su fecha de nacimiento
              </span>
            )}
            <input
              type="date" className="input__formulario" id="fechaDeNacimiento"
              min={fechaMinima}
              max={fechaMaxima}
              {
                ...register('fechaDeNacimiento', {
                  required: true,
                }) 
              }
            />
          </div>
          <label for="argentinoNativo">¿Argentino Nativo?</label>

          <select
            className="posee" id="argentinoNativo"
            {...register('argentinoNativo', {
              required: true,
            })}
          >
            <option value="SI">SI</option>
            <option value="NO">NO</option>
          </select>
          {argentinoNativo==="SI"&&<div>
             <h1 className ="labeles_Formulario">Povincia de Nacimiento</h1>
              <select className="deptos" {...register('provinciaNacimiento')}>
                
                <option value="01">Buenos Aires	</option>
                <option value="02">Catamarca</option>
                <option value="03">Chaco</option>
                <option value="04">Chubut</option>
                <option value="05">Córdoba</option>
                <option value="06">Corrientes</option>
                <option value="07">Entre Ríos	</option>
                <option value="08">Formosa</option>
                <option value="09">Jujuy</option>
                <option value="10">La Pampa	</option>
                <option value="11">La Rioja	</option>
                <option value="12">Mendoza	</option>
                <option value="13">Misiones</option>
                <option value="14">Neuquén</option>
                <option value="15">Río Negro</option>
                <option value="16">Salta</option>
                <option value="17">San Juan</option>
                <option value="18">San Luis</option>
                <option value="19">Santa Cruz</option>
                <option value="20" selected="selected">Santa Fe</option>
                <option value="21">Santiago del Estero</option>
                <option value="22">Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
                <option value="23">Tucumán</option>
              </select>
          </div>}
          
          <div>
            {errors.apellido?.type === 'required' && (
              <span className="aviso_formulario">Es un campo requerido!!!</span>
            )}
            {errors.apellido?.type === 'maxLength' && (
              <span className="aviso_formulario">
                Debe tener menos de 12 caracteres!!!
              </span>
            )}
            <input className="input__formulario"
              type="text"
              placeholder="Lugar de Nacimiento"
              {...register('lugarDeNacimiento', {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.apellidoNombreMadre?.type === 'required' && (
              <span className="aviso_formulario">Es un campo requerido!!!</span>
            )}
            
            <input className="input__formulario"
              type="text"
              placeholder="Apellido y Nombre de su Madre"
              {...register('apellidoNombreMadre', {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.apellidoNombrePadre?.type === 'required' && (
              <span className="aviso_formulario">Es un campo requerido!!!</span>
            )}
             <input className="input__formulario"
              type="text"
              placeholder="Apellido y Nombre de su Padre"
              {...register('apellidoNombrePadre', {
                required: true,
                maxLength: 50,
              })}
            />
          </div>
          </div>
        </section>
        <section className="domicilio_y_datos_de_contacto">
          <h3 className="encabezados">Domicilio y datos de Contacto</h3>
          <hr />
          <label for="resideProvincia">¿Reside en la Provincia?</label>

          <select
            className="posee"  id="resideProvincia"
            {...register('resideProvincia', {
              required: true,
            })}
          >
            <option value="SI">SI</option>
            <option value="NO">NO</option>
          </select>

          {resideProvincia === 'SI' && (
            <div>
              <h1 className ="labeles_Formulario">Departamento</h1>
              <select className="deptos" {...register('departamento')}>
                <option value="01">La Capital</option>
                <option value="02">Rosario</option>
                <option value="03">Belgrano</option>
                <option value="04">Caseros</option>
                <option value="05">Castellanos</option>
                <option value="06">Constitución</option>
                <option value="07">Garay</option>
                <option value="08">General López</option>
                <option value="09">General Obligado</option>
                <option value="10">Iriondo</option>
                <option value="11">Las Colonias</option>
                <option value="12">Nueve de Julio</option>
                <option value="13">San Cristóbal</option>
                <option value="14">San Javier</option>
                <option value="15">San Jerónimo</option>
                <option value="16">San Justo</option>
                <option value="17">San Lorenzo</option>
                <option value="18">San Martín</option>
                <option value="19">Vera</option>
              </select>
            </div>
          )}

{resideProvincia === 'NO' && (
             
            <div>
             <h1 className ="labeles_Formulario">Povincia donde habita fuera de Santa Fe</h1>
              <select className="deptos" {...register('noResideProvincia')}>
                <option value="01">Buenos Aires	</option>
                <option value="02">Catamarca</option>
                <option value="03">Chaco</option>
                <option value="04">Chubut</option>
                <option value="05">Córdoba</option>
                <option value="06">Corrientes</option>
                <option value="07">Entre Ríos	</option>
                <option value="08">Formosa</option>
                <option value="09">Jujuy</option>
                <option value="10">La Pampa	</option>
                <option value="11">La Rioja	</option>
                <option value="12">Mendoza	</option>
                <option value="13">Misiones</option>
                <option value="14">Neuquén</option>
                <option value="15">Río Negro</option>
                <option value="16">Salta</option>
                <option value="17">San Juan</option>
                <option value="18">San Luis</option>
                <option value="19">Santa Cruz</option>
                <option disabled hidden="true" value="20">Santa Fe</option>
                <option value="21">Santiago del Estero</option>
                <option value="22">Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
                <option value="23">Tucumán</option>
              </select>
            </div>
          )}
          <div>
              {errors.domicilio?.type === 'required' && (
                <span className="aviso_formulario">Debe colocar una Localidad!</span>
              )}
              <input className="input__formulario"
                type="text"
                placeholder="Localidad"
                {...register('localidad', {
                  required: true
                  
                })}
              />
            </div>
            <div></div>
          <div>
              {errors.domicilio?.type === 'required' && (
                <span className="aviso_formulario">Debe colocar un domicilio valido</span>
              )}
              <input className="input__formulario"
                type="text"
                placeholder="domicilio"
                {...register('domicilio', {
                  required: true
                  
                })}
              />
            </div>
            <div>
              
            {errors.telefono_1?.type === 'required' && (
              <span className="aviso_formulario">Debe colocar un nro de contacto</span>
            )}
            <input
              type="text" className="input__formulario"
              placeholder="Telefono"
              {...register('telefono_1', { required: true })}
            />
            
            <input
              type="text" className="input__formulario"
              placeholder="Telefono Alternativo"
              {...register('telefono_2', { required: false })}
            />
            </div>
            <div>
            {errors.comisaria?.type === 'required' && (
              <span className="aviso_formulario">Debe colocar la comisaria de jursidicción</span>
            )}
            <input
              type="text" className="input__formulario"
              placeholder="Comisaria de Jurisdicción"
              {...register('comisaria', { required: true })}
            />
            </div>
        </section>
        <section className="educacion_formal">
          
          <h3 className="encabezados">Educación formal (Excluyente)</h3>
          <hr />
          <label for="nivelEstudio">Nivel de educación formal alcanzado</label>  <br />
         

        <select
          className="deptos" id="nivelEstudio"
          {...register('nivelEstudio', {
            required: true,
          })}
        >
          <option value="Educacion_Secundaria">Educación Secundaria</option>
          <option value="Educacion_Superior">Educación Superior</option>
          
         
        </select>
                  
            <div>
            {errors.tituloSecundario?.type === 'required' && (
              <span className="aviso_formulario">Indique el título secundario </span>
            )}
            <input
              type="text" className="input__formulario"
              placeholder="Titulo Secundario"
              {...register('tituloSecundario', { required: true })}
            />
            </div>
            <div>
            <label for="aviso_formulario">Fecha de Título Secundario</label>

            {errors.fechaTituloSecundario?.type === 'required' && (
              <span className="aviso_formulario">
                Indique la fecha de su Titulo
              </span>
            )}
            <input
              type="date" className="input__formulario" id="aviso_formulario"
              min={ (fechaMinimaT)}
              max={fechaMaximaT}
              {
                ...register('fechaTituloSecundario', {
                  required: true,
                }) 
              }
            />
          </div>
          { nivelEstudio==="Educacion_Superior" &&(<div>
            {errors.tituloSuperior?.type === 'required' && (
              <span className="aviso_formulario">Debe colocar el titulo superior alcanzado</span>
            )}
            <input
              type="text" className="input__formulario"
              placeholder="Titulo Superior"
              {...register('tituloSuperior', { required: true })}
            /> <br />
             <label for="fechaTituloSuperior">Fecha de Título Superior</label>
             {errors.fechaTituloSuperior?.type === 'required' && (
              <span className="aviso_formulario">
                Indique la fecha de su Titulo
              </span>
            )}
             <input
              type="date" className="input__formulario" id="fechaTituloSuperior"
              min={ (fechaMinimaT)}
              max={fechaMaximaT}
              {
                ...register('fechaTituloSuperior', {
                  required: true,
                }) 
              }
              
            />
            </div>
            
            )}
                    <div className="contenedor-boton" >
        <input type="submit" value="Continuar"  className="botonEnviar" />
        <input type="boton" value="Cancelar"  className="botonCancelar" onClick={volver} id="btnSalir" />
        </div>
        </section>
        <section className="preguntas">
          <h3 className="encabezados"> Ultimos Datos Personales</h3>
          <hr />
          <label for="pregunta1">¿Tiene algún cargo de planta permanente en la Administración Pública?</label>
          <select
            className="posee" id="pregunta1"
            {...register('pregunta1', {
              required: true,
            })}
          >
            <option value="NO">NO</option>
            <option value="SI">SI</option>
            
          </select>
          <br />
          <label for="pregunta2">¿Fue destituido, cesanteado o exonerado en cualquiera de los niveles de la Administración Pública?</label>
          <select
            className="posee" id="pregunta2"
            {...register('pregunta2', {
              required: true,
            })}
          >
            
            <option value="NO">NO</option>
            <option value="SI">SI</option>
          </select>
          <br />
          <label for="pregunta3">¿Ha sido condenado por la justicia Provincial o Nacional por delitos o contravenciones?</label>
          <select
            className="posee" id="pregunta3"
            {...register('pregunta3', {
              required: true,
            })}
          >
            
            <option value="NO">NO</option>
            <option value="SI">SI</option>
          </select>
          <br />
          <label for="pregunta4">¿Se encuentra procesado por la justicia Provincial o Nacional?</label>
          <select
            className="posee" id="pregunta4"
            {...register('pregunta4', {
              required: true,
            })}
          >
            
            <option value="NO">NO</option>
            <option value="SI">SI</option>
          </select>
          <br />
          
          

       
           
        </section>
     
        </form>
      <footer>
        <div className="corp">
          <p>DTyD 2023 sistemas@isepsantafe.edu.ar</p>
        </div>
      </footer>
    </div>
  );
};
export default Formulario;
