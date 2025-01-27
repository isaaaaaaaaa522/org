import "./ListaOpciones.css"
function ListaOpciones(props) {
   

    

   function manejarCambio(e) {
        props.actualizarEquipos(e.target.value)

    }


    return <div className="lista-opciones">
        
        <label>Equipos</label> 
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipos</option>
            {props.equipos.map ( (equipos, index) => 
         <option key={index}>{equipos}</option>//index- posición del elemento dentro del arreglo

            )}
        </select>
    </div>

}
export default ListaOpciones