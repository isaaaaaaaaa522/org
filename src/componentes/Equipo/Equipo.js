import "./Equipo.css"

import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from "hex-to-rgba"
function Equipo (props){

    //Desructuración = de
    const{colorPrimario, colorSecundario, titulo, id} = props.datos
    const{colaboradores, EliminarColaborador, actualizarColor, like} = props
  
   

    const obj ={
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    return <> 
    {
        colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input
            type="color"
            className="input-color"
            value={hexToRgba(colorPrimario, 0.6)}
            onChange={(e)=> {
                actualizarColor(e.target.value, id)


            }}
            
            
            
            />
        <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
            
           {
            colaboradores.map((colaborador, index)=> <Colaborador 
            datos={colaborador} 
            key={index}
            colorPrimario={colorPrimario}
            EliminarColaborador={EliminarColaborador}
            like={like}
            
            
            />)
           }
           
           

        </div>
       

    </section>
    
    }  
    
    </>
}
export default Equipo