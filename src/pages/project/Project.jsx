/* eslint-disable no-unused-vars */
import React from 'react';
import Layout from '../../components/layout/Layout';
import ProjectCard from '../../components/projects/projectCard';
import ImgProject from "../../assets/profile.png";
import ImgProject1 from "../../assets/pr1.png";
import ImgProject2 from "../../assets/pr2.png";
import ImgProject3 from "../../assets/pr3.png";
import ImgProject4 from "../../assets/pr4.png";
import ImgProject5 from "../../assets/airport.png";
import ImgProject6 from "../../assets/Todo.png";

const Project = () => {
  return (
    <Layout className={'md:py-[6ch] py-6 space-y-12'}> 
      <div className="space-y-2">
        <h1 className="text-3xl text-neutral-200 font-bold flex justify-center">Mis Proyectos</h1>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
        <ProjectCard 
          img={ImgProject1} 
          title={'Foods'} 
          desc={'Es un sitio web diseñado para promocionar un restaurante o servicio de alimentos. '} 
          date={"Campuslands -  Enero - 2024"}
          link={'https://github.com/XanthusCode/Foods'} 
        />
        <ProjectCard 
          img={ImgProject3} 
          title={'Comic Web'} 
          desc={'Es un proyecto web desarrollado con JavaScript, HTML y CSS que ofrece una experiencia inmersiva en el mundo de los personajes de Marvel y DC Comics.'} 
          date={"Campuslands - Feberero - 2024"}
          link={'https://github.com/XanthusCode/comicWeb'} 
        />
        <ProjectCard 
          img={ImgProject2} 
          title={'Inventario'} 
          desc={'Es una página web diseñada para gestionar activos, marcas, personas, estados, tipos de personas, tipos de movimientos de activos, tipos de activos y asignaciones. '} 
          date={"Campuslands - Marzo -2024"}
          link={'https://github.com/XanthusCode/Inventario-proyecto'} 
        />
        <ProjectCard 
          img={ImgProject4} 
          title={'Memorie Game'} 
          desc={'Es un divertido juego interactivo desarrollado utilizando HTML, CSS y JavaScript. Este juego pone a prueba tu memoria a través de un entretenido desafío visual y auditivo, diseñado para jugadores de todas las edades.'} 
          date={" Diciembre - 2023"}
          link={'https://github.com/XanthusCode/MemoriesGame'} 
        />

        <ProjectCard 
          img={ImgProject5} 
          title={'Sistema de Gestión de Vuelos'} 
          desc={'Este proyecto de Sistema de Gestión de Vuelos se desarrolla utilizando Java y MySql.'} 
          date={"Campuslands - Junio - 2024"}
          link={'https://github.com/XanthusCode/airport'} 
        />

        <ProjectCard 
          img={"https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg"} 
          title={'Formulario de Registro'} 
          desc={'Este proyecto implementa un formulario de contacto y una tabla dinámica de usuarios utilizando Spring Boot y Thymeleaf.'} 
          date={"Campuslands - Julio - 2024"}
          link={'https://github.com/XanthusCode/FomularioRegistro'} 
        />

        <ProjectCard 
          img={ImgProject6} 
          title={'TodoApp'} 
          desc={'Es una aplicación simple de gestión de tareas (To-Do) construida con React. Permite a los usuarios agregar, eliminar y marcar tareas como completadas.'} 
          date={"Septiembre - 2024"}
          link={'https://github.com/XanthusCode/TodoApp'} 
        />
      </div>
    </Layout>
  );
}

export default Project;
