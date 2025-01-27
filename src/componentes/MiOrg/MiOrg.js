import { useState } from "react"
import "./MiOrg.css"
function MiOrg(props){
    //Estado - hooks
    //useState

    console.log()
    const[mostrar, actualizarMostrar] = useState(true)


    function ManejarClick(){
        console.log("Mostrar / Ocultar Elemento" , !mostrar)
        actualizarMostrar (!mostrar)
    }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="Img" onClick={props.cambiarMostrar}/> 
        </section>
}
export default MiOrg