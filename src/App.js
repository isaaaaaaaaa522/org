import { useState } from 'react';
import {v4 as uuid} from "uuid"
import Equipo from './componentes/Equipo/Equipo.js';
import './App.css';
import Header from "./componentes/Header/Header.js";
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/MiOrg.js';
import Footer from './componentes/Footer/Footer.jsx';
import Colaborador from './componentes/Colaborador/Colaborador.js';
console.log("Header");
console.log(uuid())

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([{
    
    id: uuid(),
    equipo:"Front-end",
    foto: "https://i.pinimg.com/originals/cf/dd/f0/cfddf069ca7b0a35c0680a76d60309c8.png",
    nombre:"Isabel",
    puesto: "Instructora",
    fav: false
  },

  {
    id: uuid(),
    equipo:"Programación",
    foto: "https://e7.pngegg.com/pngimages/514/613/png-clipart-steins-gate-no-%E3%81%83-ha-others-fictional-character-steinsgate.png",
    nombre:"Daniel",
    puesto: "Instructor",
    fav: true
  },

  {
    id: uuid(),
    equipo:"Programación",
    foto: "https://w7.pngwing.com/pngs/274/829/png-transparent-black-clover-anime-music-video-manga-animation-black-clover-anime-fictional-character-one-piece-magic-thumbnail.png",
    nombre:"Kevin",
    puesto: "Instructor",
    fav: false
  },

  {
    id: uuid(),
    equipo:"Móvil",
    foto: "https://i.pinimg.com/originals/8d/4c/01/8d4c0176a2cdb4c874f82d96b6bf2bb4.png",
    nombre:"Marcelo",
    puesto: "Instructor",
    fav: true
  },


]);
   
  function cambiarMostrar(){
    actualizarMostrar(!mostrarFormulario);
   }

   function RegistrarColaborador(colaborador){
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])

   }


   //Actualizar color de los equipos
   function actualizarColor (color, id) {
    console.log("Actualizar",color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id) {
        equipo.colorPrimario=color;
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)

   }

   //Eliminar colaborador

   function EliminarColaborador(id) {
    console.log("Eliminar Colaborador", id);
    const nuevosColaboradores =colaboradores.filter((colaborador)=> colaborador.id !==id);
    actualizarColaboradores(nuevosColaboradores)

   }

   //Lista de equipos

   const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
  },

  {
    id: uuid(),
    titulo: "Front-end",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"
},

{
  id: uuid(),
    titulo: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"
},

{
  id: uuid(),
    titulo: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8" 
},

{
  id: uuid(),
  titulo: "Ux Diseño",
  colorPrimario: "#DB6EBF",
  colorSecundario: "#FAE9F5" 
},

{
  id: uuid(),
  titulo: "Móvil",
  colorPrimario: "#FFBA05",
  colorSecundario: "#FFF5D9" 
},

{
  id: uuid(),
  titulo: "Innovación y Gestión",
  colorPrimario: "#FF8A29",
  colorSecundario: "#FFEEDF" 
}

    
    
])

//CREAR EQUIPO
function CrearEquipo (nuevoEquipo){
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])

}

function like(id) {

  const colaboradorActualizados= colaboradores.map((colaborador) => {
    if(colaborador.id === id) {
      colaborador.fav = !colaborador.fav;
    }
return colaborador
  })

  actualizarColaboradores(colaboradorActualizados)
  

}
    
  

  


  //ternarios *condicion... se muestra : no se muestra (primer metodo ?)
  //condicion && se muestra (segundo método &&)
  //{mostrarFormulario && <Formulario/>}
  return (
    <div className="App">
      
    <Header />
    {mostrarFormulario &&  <Formulario 
    equipos={equipos.map((equipo) => equipo.titulo )} 
    RegistrarColaborador={RegistrarColaborador}
    CrearEquipo={CrearEquipo}
      
      
      /> }
    

   
    
    <MiOrg cambiarMostrar={cambiarMostrar}/>


    {
        equipos.map ((equipo)=> <Equipo
         datos= {equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        EliminarColaborador={EliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        
        
        />)
    }

    <Footer />       
    </div>
  );
}

export default App;
