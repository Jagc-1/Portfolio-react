/* eslint-disable no-unused-vars */
import React from 'react';
import Layout from '../../components/layout/Layout';
import AboutImg from '../../assets/Profile.png';
import { Link } from 'react-scroll'; 
import { FaArrowRightLong } from 'react-icons/fa6';
import { LiaHandPointer } from 'react-icons/lia';
import JohanCard from '../../components/johan/JohanCard';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython,FaReact } from 'react-icons/fa'; // Importar íconos
import { SiSpringboot, SiMysql, SiPostgresql,SiBootstrap } from 'react-icons/si'; // Importar íconos

const About = () => {
  return (
    <Layout className="md:py-[7ch] py-6 space-y-16">

      {/* Intro Section */}
      <div className="space-y-8">
        <h1 className="text-4xl text-neutral-200 font-bold ">Sobre Mí</h1>

        <div className="space-y-5">
          {/* Profile Section and Bio Section */}
          <div className="w-full flex items-center gap-14 flex-wrap">
            <div className="md:w-64 w-full h-auto flex items-center border border-neutral-900/40 bg-neutral-900/20 rounded-lg">
              <img src={AboutImg} alt="About Image" className="w-full aspect-square rounded-xl object-cover object-center " />
            </div>
            <div className="flex-1 space-y-5">
              <p className="text-lg text-neutral-500 font-normal">
                Busco constantemente nuevos retos que impulsen mi crecimiento profesional. Me dedico a aplicar 
                mis habilidades en proyectos colaborativos que generen soluciones efectivas y de impacto positivo. 
                Mi objetivo es contribuir a iniciativas que no solo alcancen sus metas, sino que también mejoren la vida
                de las personas.
              </p>
            </div>
          </div>

          {/* Hire Section */}
          <div className="w-full flex items-center justify-between bg-green-900/5 border border-green-900/60 hover:border-green-900/80 md:px-6 px-3 py-3 rounded-lg group cursor-pointer">
              <p className="md:text-lg text-sm text-neutral-400 font-normal">
                ¿Interesado en colaborar? ¡Contáctame!
              </p>
              <Link to='contact' smooth={true} duration={200} className="flex items-center gap-x-2 md:text-lg text-base text-neutral-500 hover:text-green-600 font-normal ease-in-out duration-300">
              Hire Me 
              <FaArrowRightLong className="text-xl hover:translate-x-1 ease-in-out duration-500" />
            </Link>


          </div>
        </div>

      {/* Bio Section */}
      <div className="space-y-5">
      <h1 className="text-2xl text-neutral-200 font-bold">Objetivos Profesionales</h1>
        <ul className="list-disc list-inside space-y-2 text-lg text-neutral-500">
          <li className="font-semibold">Desarrollar soluciones tecnológicas de alto impacto</li>
          <li className="font-semibold">Especializarme en tecnologías emergentes</li>
          <li className="font-semibold">Contribuir a la evolución del sector tecnológico</li>
          <li className="font-semibold">Fomentar una cultura de aprendizaje y mejora continua</li>
        </ul>

        <h1 className="text-2xl text-neutral-200 font-bold">Visión</h1>
        <p className="text-lg text-neutral-500 font-normal">
            Transformo conceptos abstractos en soluciones tecnológicas elegantes y efectivas,
             construyendo sistemas robustos y escalables con un enfoque en arquitectura sólida y código limpio. 
             Busco innovar y optimizar en cada proyecto, explorando nuevas tecnologías y colaborando para generar 
             un impacto real.
        </p>

        <h1 className="text-2xl text-neutral-200 font-bold">Misión</h1>
        <p className="text-lg text-neutral-500 font-normal">
        Mi misión es crear software que no solo cumple con los estándares técnicos, sino que redefine la 
        forma en que interactuamos con la tecnología. Enfocado en una arquitectura ágil y una calidad excepcional,
         desarrollo soluciones que son resilientes y adaptativas, diseñadas para anticipar y superar futuros 
        desafíos mientras generan un impacto significativo y transformador.
        </p>

        <h1 className="text-2xl text-neutral-200 font-bold">Valores</h1>
        <ul className="list-disc list-inside space-y-2 text-lg text-neutral-500">
          <li className="flex flex-wrap justify-center gap-6">
              <a className="text-lg font-semibold text-neutral-300 hover:text-green-400 transition ease-in-out duration-300 transform hover:scale-105">Integridad</a>
              <a className="text-lg font-semibold text-neutral-300 hover:text-green-400 transition ease-in-out duration-300 transform hover:scale-105">Innovación</a>
              <a className="text-lg font-semibold text-neutral-300 hover:text-green-400 transition ease-in-out duration-300 transform hover:scale-105">Creatividad</a>
              <a className="text-lg font-semibold text-neutral-300 hover:text-green-400 transition ease-in-out duration-300 transform hover:scale-105">Colaboración</a>
              <a className="text-lg font-semibold text-neutral-300 hover:text-green-400 transition ease-in-out duration-300 transform hover:scale-105">Trabajo en equipo</a>
              <a className="text-lg font-semibold text-neutral-300 hover:text-green-400 transition ease-in-out duration-300 transform hover:scale-105">Adaptabilidad</a>
          </li>
        </ul>
      </div>


        {/* Contact Section */}
        <div id='contact'  className="space-y-4">
          <h1  className="text-3xl text-neutral-200 font-bold">Contactame</h1>
          <div className="space-y-3">
            <div className="flex items-center gap-x-3">
              <LiaHandPointer className="text-lg text-green-400 font-normal rotate-90" />
              <p className="md:block hidden text-base text-neutral-400 font-normal">Email:</p>
              <Link to={'mailto:garciacamposjohan18@gmail.com'} className="text-base text-neutral-400 hover:text-green-500 font-normal ease-in-out duration-300">garciacamposjohan18@gmail.com</Link>
            </div>

            <div className="flex items-center gap-x-3">
              <LiaHandPointer className="text-lg text-green-400 font-normal rotate-90" />
              <p className="md:block hidden text-base text-neutral-400 font-normal">Instagram:</p>
              <Link to={'https://www.instagram.com/xanthus_24/'} className="text-base text-neutral-400 hover:text-green-500 font-normal ease-in-out duration-300">xanthus_24</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full space-y-8">
      <h1 className="text-3xl text-neutral-200 font-bold"> Skills  </h1>
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

      {/* Competencias Section */}
      <div className="p-8 bg-neutral-900 rounded-lg shadow-lg cursor-pointer">
        <div className="text-center">
            <h1 className="text-3xl font-extrabold text-neutral-100 mb-8">Competencias</h1>
            <ul className="flex flex-wrap justify-center gap-6">
                <li className="flex flex-wrap justify-center gap-6">
                    <a className="text-lg font-semibold text-neutral-300 hover:text-green-400 transition ease-in-out duration-300 transform hover:scale-105">Adaptación al cambio</a>
                    <a className="text-lg font-semibold text-neutral-300 hover:text-green-400 transition ease-in-out duration-300 transform hover:scale-105">Innovación</a>
                    <a className="text-lg font-semibold text-neutral-300 hover:text-green-400 transition ease-in-out duration-300 transform hover:scale-105">Creatividad</a>
                    <a className="text-lg font-semibold text-neutral-300 hover:text-green-400 transition ease-in-out duration-300 transform hover:scale-105">Habilidades Sociales</a>
                    <a className="text-lg font-semibold text-neutral-300 hover:text-green-400 transition ease-in-out duration-300 transform hover:scale-105">Trabajo en equipo</a>
                    <a className="text-lg font-semibold text-neutral-300 hover:text-green-400 transition ease-in-out duration-300 transform hover:scale-105">Responsabilidad</a>
                </li>
            </ul>
        </div>
      </div>


    </Layout>
  );
}

export default About;
