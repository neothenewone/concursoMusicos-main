const regresaBienFecha=(dato)=>{
    const [dia, mes, ano] = dato.split("-");
    let cambiada = `${ano}/${mes}/${dia}`;
    return cambiada
}
export default regresaBienFecha
