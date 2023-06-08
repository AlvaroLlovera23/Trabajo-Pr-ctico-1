import React from 'react'
import { useState } from 'react'
// import '../CSS/MainAbout.css'
// import html from '../assets/html-5.png'
// import css from '../assets/css-3.png'
// import bootstrap from '../assets/bootstrap.png'
// import js from '../assets/js.png'

const MainAbout = (props) => {

  // const piesDeFoto = ["Tafi Del Valle", "San Pedro De Colalao", "En Casa", "Vacaciones En Tafi", "Raco"]
  const [numero, setNumero] = useState(1)
  const handleClick = () => {
    numero === 5 ? setNumero(1) : setNumero(numero + 1)
  }
  return (
    
    <div className='row p-5'>
      <div className="col-6">
        <img className='imagenxd'style={{width: '600px', height:'600px'}} src={`${numero}.jpg`} alt="" />
        <button onClick={handleClick} style={{float: 'no-float' }} variant='danger'>siguiente foto</button>

      </div>
      <div className="col-6">




















































      <p style={{ fontFamily: 'serif', fontSize: '20px'}}>
        <h1>Curriculum Vitae</h1>
        <h2>Educación:</h2>
        <ul>
          <li>Primaria: Colegio Salesiano Don Bosco (1997 – 1998).
            Colegio Del Libertador San Martin (1999 - 2001).
            Instituto Mixto de Enseñanza Privada (IMEP) (2002).</li>
          <li>Secundaria: Instituto Mixto de Enseñanza Privada (IMEP): Comienzo Ciclo EGB3 (2003 - 2006),
            luego comienzo Ciclo Polimodal y con Orientación Bachiller en Ciencias Naturales (2007 - 2009) –
            (Año Egreso: 2009).</li>
          <li>Terciaria: Cursó en el Instituto Cultural Argentino de Lenguas Vivas ANGLO (2014 – 2015), luego
            cursó en el Instituto ProTuc la carrera de Programador de Informática (Programa del Paquete de
            Sistema Operativo Windows 7) en el año 2015. En el año 2019 cursó la carrera de Pastelero
            Profesional en el Instituto Gastronómico Argentino (IGA).</li>
          <li>Universitaria: Ciclo Básico en Facultad de Arquitectura y Urbanismo (FAU) (2010 – 2011) en la
            Universidad Nacional de Tucumán (UNT); Ciclo Básico en Facultad de Ciencias de la Salud –
            Licenciatura en Nutrición (2012 y 2016) en la Universidad del Norte Santo Tomás de Aquino
            (UNSTA), Cursos No Completados; Ciclo Básico en Facultad de Técnico Universitario en
            Programación en la Universidad Tecnológica Nacional (UTN) (2022), Actualmente Cursando.</li>
          <h2>Experiencias Laborales:</h2>
          <li>Centro Fiat: Repuestos Para Autos (2013 – Actualidad)</li>
          <li>Manejo y Control de Caja, Tareas y Trámites Administrativos y Bancarios.</li>
          <li>Referencia: Olmedo Gladys</li>
          <h2>Idiomas:</h2>
          <li> Español: Lengua Nativa.</li>
          <li>Inglés: Básico.</li>
          <h2>Informática:</h2>
          <li>Sistema Operativo Windows.</li>
          <li>Paquete Office: Word, Excel, PowerPoint y Access.</li>
          <li>Exploradores Internet: Avanzado.</li>
          <li>Adobe Acrobat PDF.</li>
          <li>Conocimientos básicos de programación: HTML, CSS, JavaScript, JSON, C# (Algo de C Sharp).</li>
        </ul>
      </p>
      </div>
          
</div>
  )
}

export default MainAbout
