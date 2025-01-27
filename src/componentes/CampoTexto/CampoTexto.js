import "./CampoTexto.css"
import { useState } from "react"
function CampoTexto (props){
    
    console.log("Datos:", props.titulo)//titulo es un nombre cualquiera

    const {type = "texto" }= props
    console.log(type)

    function manejarCambio (e) {
        console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)

    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label> 
        <input 
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        type={type}
        />
    </div>
}
export default CampoTexto