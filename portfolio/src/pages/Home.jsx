import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';


function Home () {

  const alumno = 
  { 
    nombre: 'Alvaro',
    apellido: 'Llovera',
    edad: 32,
    legajo: '55994',
    num_telefono: '3813009020',
    email: 'alvarollovera14@gmail.com',
    fav_deporte: 'Rugby'
  }

  /*const auto = {
    marca: 'Ford',
    modelo: 'Mustang',
  }*/

  return (
    <div className="div">
      <Header/>
      <Main info = {alumno} /*car = {auto}}*//>
      <Footer/>
    </div>
  );
}

export default Home
