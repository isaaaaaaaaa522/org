import Buton from "../Buton/Buton"
import { act, useState } from "react"
import "./Formulario.css"
import "../CampoTexto/CampoTexto"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"

function  Formulario (props){
   

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipos] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const[color, actualizarColor] = useState("")  

    const{RegistrarColaborador, CrearEquipo } = props

function ManejarEnvio(evento){
    evento.preventDefault()//importante en formularios even o e
    console.log("ManejarEnvio")
    let DatosEnviar = {
        nombre,
        puesto,
        foto,
        equipo
    }
    RegistrarColaborador(DatosEnviar)

}

function ManejarNuevoEquipo(evento){
    evento.preventDefault();
    CrearEquipo({titulo, colorPrimario: color})
}

    return <section className="formulario">
        <form onSubmit={ManejarEnvio}>        
            <h2>Rellenar el formulario para crear el colaborador</h2>
        <CampoTexto 
        titulo="Nombre" 
        placeholder="Ingresar Nombre" 
        required 
        valor={nombre}
        actualizarValor={actualizarNombre}
        />


        <CampoTexto 
        titulo="Puesto" 
        placeholder="Ingresar Puesto" 
        required
        valor={puesto}
        actualizarValor={actualizarPuesto}
        />

        <CampoTexto 
        titulo="Foto"
         placeholder="Ingresar enlace de Foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
          />


        <ListaOpciones
        valor={equipo}
        actualizarEquipos={actualizarEquipos}
        equipos={props.equipos}
        />
        <Buton texto="Crear"
        
        />
      
    </form>
    <form onSubmit={ManejarNuevoEquipo}> 
    <h2>Rellenar el formulario para crear el equipo</h2>
        <CampoTexto 
        titulo="Titulo" 
        placeholder="Ingresar Titulo" 
        required 
        valor={titulo}
        actualizarValor={actualizarTitulo}//Declarar variables
        />


        <CampoTexto 
        titulo="Color" 
        placeholder="Ingresar el color Hex" 
        required
        valor={color}
        actualizarValor={actualizarColor}
        type="color" //define el type
       
        />

<Buton texto="Registrar Equipo"
        
        />



    </form>
    </section>
}
export default Formulario