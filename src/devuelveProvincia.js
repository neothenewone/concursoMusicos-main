const devuelveProvincia=(nroProvincia)=>{
    let provincias=[
                    {"id":"01","Provincia":"Buenos Aires"},
                    {"id":"02","Provincia":"Catamarca"},
                    {"id":"03","Provincia":"Chaco"},
                    {"id":"04","Provincia":"Chubut"},
                    {"id":"05","Provincia":"Córdoba"},
                    {"id":"06","Provincia":"Corrientes"},
                    {"id":"07","Provincia":"Entre Ríos"},
                    {"id":"08","Provincia":"Formosa"},
                    {"id":"09","Provincia":"Jujuy"},
                    {"id":"10","Provincia":"La Pampa"},
                    {"id":"11","Provincia":"La Rioja"},
                    {"id":"12","Provincia":"Mendoza"}	,
                    {"id":"13","Provincia":"Misiones"},
                    {"id":"14","Provincia":"Neuquén"},
                    {"id":"15","Provincia":"Río Negro"},
                    {"id":"16","Provincia":"Salta"},
                    {"id":"17","Provincia":"San Juan"},
                    {"id":"18","Provincia":"San Luis"},
                    {"id":"19","Provincia":"Santa Cruz"},
                    {"id":"20","Provincia":"Santa Fe"},
                    {"id":"21","Provincia":"Santiago del Estero"},
                    {"id":"22","Provincia":"Tierra del Fuego, Antártida e Islas del Atlántico Sur"},
                    {"id":"23","Provincia":"Tucumán"}
                ]
    
    
        return provincias.filter(provincia=>provincia.id===nroProvincia)
    }
    export default devuelveProvincia