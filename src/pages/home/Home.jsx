/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Layout from '../../components/layout/Layout';
import JohanCard from '../../components/johan/JohanCard';
import ProjectCard from '../../components/projects/projectCard';
import { Link } from 'react-router-dom';
import { HiOutlineDownload } from 'react-icons/hi';
import { GoArrowUpRight } from 'react-icons/go';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaReact } from 'react-icons/fa'; // Importar íconos
import { SiSpringboot, SiMysql, SiPostgresql, SiBootstrap } from 'react-icons/si'; // Importar íconos
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importando react-slick
import Slider from "react-slick";

import Profile from "../../assets/About.png";
import ImgProject1 from "../../assets/pr1.png";
import ImgProject2 from "../../assets/pr2.png";
import ImgProject3 from "../../assets/pr3.png";
import ImgProject4 from "../../assets/pr4.png";


const Home = () => {

 
  // Configuración del slider
  const settings = {
    dots: false,            // No se muestran los puntos de navegación
    infinite: true,         // El slider es infinito
    speed: 3500,            // Velocidad de transición (2 segundos)
    slidesToShow: 2,        // Mostrar 2 tarjetas a la vez
    slidesToScroll: 1,      // Desplazarse de una tarjeta en una
    autoplay: true,         // Activar movimiento automático
    autoplaySpeed: 0,       // Hace que el slider se mueva continuamente
    cssEase: "linear",      // Movimiento suave continuo
    pauseOnHover: false,    // No se pausa al pasar el mouse
    responsive: [
      {
        breakpoint: 768,    // Para pantallas pequeñas
        settings: {
          slidesToShow: 1,  // Mostrar solo 1 tarjeta en pantallas pequeñas
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <Layout className={'md:py-[14ch] py-6 space-y-28'}>
      {/* Intro Section */}
      <div className="w-full flex items-center justify-between gap-14 flex-wrap">
        
        {/* Content Section */}
        <div className="flex-1 h-auto space-y-10">
          <h1 className="text-5xl text-neutral-100 font-bold">
            Hey, I'm{" "}
            <span className="text-gradient">Johan Campos</span>
          </h1>

          <div className="space-y-6 md:pr-16 pr-0">
            <p className="text-lg text-neutral-400 font-normal">
              Desarrollador Full Stack, especializado en convertir ideas en soluciones digitales completas
              y efectivas.
            </p>
          </div>

          <div className="flex items-center gap-x-5">
            <a
              href="documents/cv.pdf"
              download="Johan_Campos_CV.pdf"
              className="w-fit px-8 h-11 bg-neutral-900/50 shadow rounded-xl flex items-center justify-center gap-x-2 hover:bg-green-900/5 border border-transparent hover:border-green-800/80 ease-in-out duration-500">
              Resume <HiOutlineDownload />
            </a>

            <Link 
              to="/me" 
              className="text-base text-neutral-500 hover:text-green-500 font-mc flex items-center gap-x-1.5 ease-in-out duration-300 group">
              Read More <GoArrowUpRight className='text-xl group-hover:rotate-45 ease-in-out duration-500' />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 w-full h-auto flex items-center justify-center">
          <div className="relative w-full aspect-square rounded-full glow-border">
            <div className="absolute inset-0 rounded-full border-[2px] border-transparent animate-rotate-border"></div>
            <img 
              src={Profile} 
              alt="Foto de perfil"  
              className='absolute rounded-full object-cover' 
              style={{ width: 'calc(100% - 0.5cm)', height: 'calc(100% - 0.5cm)', top: '0.25cm', left: '0.30cm' }}
            />
          </div>
        </div>
      </div>

      {/* Top Highlights */}
      <div className="w-full space-y-8">
        <h1 className="text-3xl text-neutral-200 font-bold">Top Highlights</h1>
        <div className="flex items-center gap-6 flex-wrap">
          <JohanCard Icon={FaReact} className={`group-hover:text-blue-700 `} />
          <JohanCard Icon={FaHtml5} className={`group-hover:text-red-700 `} /> {/* HTML */}
          <JohanCard Icon={FaCss3Alt} className={`group-hover:text-blue-700 `} /> {/* CSS */}
          <JohanCard Icon={FaJsSquare} className={`group-hover:text-yellow-700 `} /> {/* JavaScript */}
          <JohanCard Icon={FaJava} className={`group-hover:text-red-700 `}/> {/* Java */}
          <JohanCard Icon={FaPython} className={`group-hover:text-teal-700 `} /> {/* Python */}
          <JohanCard Icon={SiSpringboot} className={`group-hover:text-green-700 `}  /> {/* Spring Boot */}
          <JohanCard Icon={SiMysql} className={`group-hover:text-blue-400 `} /> {/* MySQL */}
          <JohanCard Icon={SiPostgresql} className={`group-hover:text-blue-900 `} /> {/* PostgreSQL */}
          <JohanCard Icon={SiBootstrap} className={`group-hover:text-purple-900 `} /> {/* Bootstrap */}
        </div>
      </div>


       {/* Projects Slider */}
       <div className="w-full space-y-8">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-3xl text-neutral-200 font-bold">Projects</h1>
          <Link 
            to={'/projects'} className='text-sm text-neutral-400 hover:text-green-500 font-normal ease-in-out duration-300'>
            View All
          </Link>
        </div>

        {/* Slider de Proyectos */}
        <Slider {...settings} className="slider-container">
          <div className="px-4">  {/* Espaciado adicional entre tarjetas */}
            <ProjectCard img={ImgProject1} title={'Foods'} showLink={false} />
          </div>
          <div className="px-4">
            <ProjectCard img={ImgProject2} title={'Inventario'} showLink={false} />
          </div>
          <div className="px-4">
            <ProjectCard img={ImgProject3} title={'Comic Web'} showLink={false} />
          </div>
          <div className="px-4">
            <ProjectCard img={ImgProject4} title={'Memorie Game'} showLink={false} />
          </div>
        </Slider>
      </div>
    </Layout>
  );
};


export default Home;
