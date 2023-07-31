import Cookies from 'universal-cookie';
const cookies =new Cookies;

const seteaCokie=(respuesta)=>{
    
    cookies.set('id',respuesta.id, {path:"/"}) 
    cookies.set('dni',respuesta.dni, {path:"/"})
    cookies.set('email',respuesta.email, {path:"/"})
    cookies.set('cuil,',respuesta.cuil,{path:"/"})
    cookies.set('nombres',respuesta.nombres,{path:"/"})
    cookies.set('apellido',respuesta.apellido,{path:"/"})
    cookies.set('genero',respuesta.genero,{path:"/"})
    cookies.set('estadoCivil',respuesta.estadoCivil,{path:"/"})
    cookies.set('fechaDeNacimiento',respuesta.fechaDeNacimiento,{path:"/"})
    cookies.set('argentinoNativo',respuesta.argentinoNativo,{path:"/"})
    cookies.set('provinciaNacimiento',respuesta.provinciaNacimiento,{path:"/"})
    cookies.set('lugarDeNacimiento',respuesta.lugarDeNacimiento,{path:"/"})
    cookies.set('apellidoNombreMadre',respuesta.apellidoNombreMadre,{path:"/"})
    cookies.set('apellidoNombrePadre',respuesta.apellidoNombrePadre,{path:"/"})     
    cookies.set('resideProvincia',respuesta.resideProvincia,{path:"/"})
    cookies.set('noResideProvincia',respuesta.noResideProvincia,{path:"/"})
    cookies.set('localidad',respuesta.localidad,{path:"/"})
    cookies.set('departamento',respuesta.departamento,{path:"/"})
    cookies.set('domicilio',respuesta.domicilio,{path:"/"})
    cookies.set('telefono_1',respuesta.telefono_1,{path:"/"})
    cookies.set('telefono_2',respuesta.telefono_2,{path:"/"})
    cookies.set('comisaria',respuesta.comisaria,{path:"/"})
    cookies.set('nivelEstudio',respuesta.nivelEstudio,{path:"/"})
    cookies.set('tituloSecundario',respuesta.tituloSecundario,{path:"/"})
    cookies.set('fechaTituloSecundario',respuesta.fechaTituloSecundario,{path:"/"})
    cookies.set('tituloSuperior',respuesta.tituloSuperior,{path:"/"})
    cookies.set('fechaTituloSuperior',respuesta.fechaTituloSuperior,{path:"/"})
    cookies.set('pregunta1',respuesta.pregunta1,{path:"/"})
    cookies.set('pregunta2',respuesta.pregunta2,{path:"/"})
    cookies.set('pregunta3',respuesta.pregunta3,{path:"/"})
    cookies.set('pregunta4',respuesta.pregunta4,{path:"/"})
    cookies.set('createdAt',respuesta.createdAt,{path:"/"})
    cookies.set('updateAt',respuesta.updatedAt,{path:"/"})
      
}
export default seteaCokie;