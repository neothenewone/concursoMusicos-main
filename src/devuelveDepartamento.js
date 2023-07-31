const devuelveDepartamento=(nroDepartamento)=>{
let departamentos=[
                {"id":"01","Departamento":"La Capital"},
                {"id":"02","Departamento":"Rosario"},
                {"id":"03","Departamento":"Belgrano"},
                {"id":"04","Departamento":"Caseros"},
                {"id":"05","Departamento":"Castellanos"},
                {"id":"06","Departamento":"Constitución"},
                {"id":"07","Departamento":"Garay"},
                {"id":"08","Departamento":"General López"},
                {"id":"09","Departamento":"General Obligado"},
                {"id":"10","Departamento":"Iriondo"},
                {"id":"11","Departamento":"Las Colonias"},
                {"id":"12","Departamento":"Nueve de Julio"}	,
                {"id":"13","Departamento":"San Cristóbal"},
                {"id":"14","Departamento":"San Javier"},
                {"id":"15","Departamento":"San Jerónimo"},
                {"id":"16","Departamento":"San Justo"},
                {"id":"17","Departamento":"San Lorenzo"},
                {"id":"18","Departamento":"San Martín"},
                {"id":"19","Departamento":"Vera"},
                
            ]


    return departamentos.filter(departamento=>departamento.id===nroDepartamento)
}
export default devuelveDepartamento