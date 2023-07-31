

const convierte=(data)=>{
    function primeraMayuscula(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    return {
        
            dni:data.dni,
            email:data.email,
            cuil:data.cuil,
            nombres:primeraMayuscula(data.nombres),
            apellido:data.apellido.toUpperCase(),
            genero:data.genero,
            estadoCivil:data.estadoCivil,
            fechaDeNacimiento:data.fechaDeNacimiento,
            argentinoNativo:data.argentinoNativo,
            provinciaNacimiento:data.provinciaNacimiento,
            lugarDeNacimiento:data.lugarDeNacimiento,
            apellidoNombreMadre:data.apellidoNombreMadre,
            apellidoNombrePadre:data.apellidoNombrePadre,      
            resideProvincia:data.resideProvincia, 
            noResideProvincia:data.noResideProvincia,
            localidad:data.localidad,
            departamento:data.departamento,
            domicilio:data.domicilio,
            telefono_1:data.telefono_1,
            telefono_2:data.telefono_2,
            comisaria:data.comisaria, 
            nivelEstudio:data.nivelEstudio,
            tituloSecundario:data.tituloSecundario,
            fechaTituloSecundario:data.fechaTituloSecundario,
            tituloSuperior:data.tituloSuperior,
            fechaTituloSuperior:data.fechaTituloSuperior,
            pregunta1:data.pregunta1,
            pregunta2:data.pregunta2,
            pregunta3:data.pregunta3,
            pregunta4:data.pregunta4
    }
}
export default convierte;