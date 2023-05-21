import React from 'react'
import '../styles/Main.css';
import myImage from '../resources/alvaro.jpg'
import Card from 'react-bootstrap/Card';


const Main = (props) => {
  return (
    <>
      <Card style = {{width: '20rem'}}>
        <div style = {{padding: '8%'}}>
          <Card.Img variant="top" src={myImage} class="custom-image"/>
        </div>
        <Card.Body>
          <Card.Text>
            <p>Nombre = {props.info.nombre}</p>
            <p>Apellido = {props.info.apellido}</p>
            <p>Edad = {props.info.edad}</p>
            <p>Legajo = {props.info.legajo}</p>
            <p>Numero de telefono = {props.info.num_telefono}</p>
            <p>Email = {props.info.email}</p>
            <p>Deporte = {props.info.fav_deporte}</p>
            {/*<p>Auto favorito = {props.car.marca}, {props.car.modelo}</p>*/}
          </Card.Text>
        </Card.Body>
      </Card>
      {/*  
        <div>
          <div className="image-container">
              <img src={myImage} alt="tu imagen de perfil" className="image" />
          </div>
          <p class="pMain">
              Me llamo Alvaro Llovera, tengo 32 años, soy estudiante de la carrera Tecnicatura Universitaria en Programación de la UTN, vivo con mi familia(mis padres, mi hermano y mi hermana), y soy de San Miguel de Tucumán. Soy una persona que quiere tener desafíos, como por ejemplo: jugar al Rugby, (ahí, dentro del ambiente hay mucha hermandad y son muy unidos), es por éso que soy afortunado de tener a dos personas geniales, en la facultad (Tobias Molinero y Facundo Majolli), quienes me integraron y me conocieron al igual que yo a ellos. Además, entre otros de mis desafíos es tratar de ser mejor, a pesar que me cuesta mucho aprender ciertas materias, pero no significa que voy a bajar los brazos, y también agregar que mi hobby principal es cantar. Unos de mis sueños es ser actor y cantante, trabajar en proyectos juveniles en la televisión y hacer comedia musical (porque la música ayuda mucho al alma), como otros de mis sueños que quiero hacer realidad es poder estudiar más adelante la carrera de Licenciado en Nutrición. Dicen que no hay un límite de edad para lo que cualquier persona quiera hacer en cuanto a estudio, deportes u otras cosas, porque nadie nace sabiendo y todos somos capaces para lo que sea poniendo lo suyo de su parte.
          </p>
        </div> 
      */}
    </>
  )
}

export default Main
