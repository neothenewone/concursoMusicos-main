
const devuelve=(objeto)=>{
	
	function convertirACsv(datos, columnas, separador=',') {
		if (!Array.isArray(datos)) {
			throw TypeError('El primer argumento debe ser un arreglo.');
		}
		
		if (!Array.isArray(columnas)) {
			throw TypeError('El segundo argumento debe ser un arreglo.');
		}
	
		if (typeof separador !== 'string') {
			throw TypeError('El tercer argumento debe ser una cadena de caracteres.');
		}
	
		return [
			columnas.join(separador),
			...datos.map(d => columnas.reduce(
				(a, p) => `${a}${!a.length ? '' : separador}${d[p] ? d[p] : ''}`, ''
			))
		].join('\n');
	}
	
		
	try {
		console.log(objeto)
		console.log(Object.values(objeto))
		console.log(convertirACsv(objeto, ['id', 'dni','email','cuil','nombres','apellido','genero','estadoCivil','fechaDeNacimiento','argentinoNativo','provinciaNacimiento','lugarDeNacimiento','apellidoNombreMadre','apellidoNombrePadre','resideProvincia','localidad','noResideProvincia','departamento','domicilio','telefono_1','telefono_2','comisaria','nivelEstudio','tituloSecundario','fechaTituloSecundario','tituloSuperior','fechaTituloSuperior','pregunta1','pregunta2','pregunta3','pregunta4','createdAt','updatedAt']));
		
	} catch (e) {
		console.log(`Error: ${e.message}`);

	}


};
export default devuelve;