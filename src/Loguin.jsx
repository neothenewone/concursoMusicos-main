import * as React from 'react';
import { set, useForm } from 'react-hook-form';
import {useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import './loguin.css'
import removeCokies from './removeCokies'
import seteaCokie from './seteaCokie';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const cookies=new Cookies();

const URI='https://apps.isepsantafe.edu.ar/inscriptos/'
const URII='https://apps.isepsantafe.edu.ar/inscriptos/otra/'
function Loguin() {
  var abierto;
  const estadoInscripcion=async()=>{
  try {
    const estaAbierto= await axios.get(URII);
    abierto=estaAbierto.data[0].status;
    console.log(abierto)
      } catch (error) {
        console.log("error al cargar")
      }
    }
  estadoInscripcion();

  const [espera,setEspera]=React.useState(false)
  const activa=()=>setEspera(true)
  const desactiva=()=>setEspera(false)

 const navitate = useNavigate()
 removeCokies();
 
 
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({});



  const getUsuarioById=async (cosa)=>{ 
    try {
         activa()
    const res= await axios.get(URI+cosa.dni)
    if(!res.data){
      if(abierto!="true"){
      
        
        cookies.set('dni',cosa.dni, {path:"/"})
        cookies.set('email',cosa.email, {path:"/"})
        desactiva()
        navitate('/new')
      }else{
        alert("¡Las inscripciones se encuentran cerradas y usted no se encuentra inscripto para poder imprimir o editar su legajo!"); 
        desactiva()
      }
      
      }
      else{
      var respuesta=res.data; //sustituyo el valor data[0] por una variable mas facil de manejar
      seteaCokie(respuesta)
      if(respuesta.email===cosa.email){
        
        
        if(abierto==="true"){
          cookies.set('Abiertas',"true", {path:"/"})
        }
        navitate('/inscripto')
      }else{
        desactiva()
        alert("credenciales invalidas Usuario Registrado bajo otro correo")
        
      }

      
    }
    
    } catch (error) {
      alert("error al cargar, intente mas tarde")
      desactiva()
    }
    
}


  //
  return (
    <div>
    
      <div className='form__loguin_ingreso'>
      <div className='imagen_loguin'></div>
     
    <form className="form_use" onSubmit={handleSubmit(getUsuarioById)}>
        <h1 className="form__title_Important">Técnico Superior en Seguridad Pública y Ciudadana</h1>
        {espera&&(<Spinner color='primary' />)}

        <div className="form__container">

          <div className="form__group">
       
          {errors.dni?.type === 'required' && (
            <span className="aviso-campos-loguin">Para comenzar debe colocar su numero de DNI</span>
          )}
          {errors.dni?.type === 'pattern' && (
            <span className="aviso-campos-loguin">
              Formato invalido solo numeros sin . ni -{' '}
            </span>
          )}
          {errors.dni?.type === 'maxLength' && (
            <span className="aviso-campos-loguin">Formato invalido solo 8 numeros </span>
          )}
          {errors.dni?.type === 'minLength' && (
            <span className="aviso-campos-loguin">Formato invalido solo 8 numeros </span>
          )}
          <input
            type="text"
            placeholder=" "
            className="form__input"
            id="dni"
            {...register('dni', {
              required: true,
              pattern: /^-?\d+(?:,\d+)?(?:[Ee][-+]?\d+)?$/i,
              maxLength: 8,
              minLength: 8,
            })}
          />
            <label for="dni" className="form__label">
              DNI
            </label>
            <span className="form__line"></span>
        </div>
          <div className="form__group">
            {errors.email?.type === 'required' && (
              <span className="aviso-campos-loguin">Indique una direccion de correo electrónico</span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className="aviso-campos-loguin">
                Debe tener una direccion de correo valida!!!
              </span>
            )}
            <input
              className="form__input"
              id="email"
              type="text"
              placeholder=" "
              autoComplete='true'
              {...register('email', {
                required: true,
                pattern:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
              })}
            /> 
            <label for="email" className="form__label">
            Correo Electrónico
          </label>
          <span className="form__line"></span>

          
          </div>
          <div className="form__group">
            <p className="form__paragraph">
              Acepto los{' '}
              <a href="https://isepsantafe.edu.ar" target="_blank" rel="noopener noreferrer"className="form__link">
                terminos de preinscripcion{' '}
              </a> y confirmo entender que el presente paso de preinscripcion <strong>constituye una declaracion Jurada, por lo que todos sus datos son verdaderos y fidedignos, que cualquier adulteracion o contenido apócrifo dará como resultado la inmediata separación del proceso de selección</strong> y que cumplida la etapa de preinscripcion, se publicará en la pagina Web del Instituto de Seguridad Pública de la Provincia de Santa Fe, las fechas, turnos y condiciones para poder completar el proceso de inscripción, lo cual se efectivizará una vez que presente la totalidad de la documental requerida.
            </p>
           
            
            <input
              type="checkbox"
              id="acepta"
              className="form__input-checkbox"
              placeholder=" "{...register('acepta', {
                required: true,
              })}
            />
 {errors.acepta?.type === 'required' && (
              <span className="aviso-checkbox">Debe aceptar los terminos de Preinscripción</span>
            )}
            <span className="form__line"></span>
          </div>
          <input type="submit" className="form__submit" value="Continuar" />
          <div className="form__footer">
          <h4 className='form__footer'>DTyD 2023 sistemas@isepsantafe.edu.ar</h4>
        </div>
        </div>
      </form>
         </div>
    </div>
  );
}
export default Loguin;
