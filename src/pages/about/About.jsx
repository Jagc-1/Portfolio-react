/* eslint-disable no-unused-vars */
import React from 'react';
import Layout from '../../components/layout/Layout';
import AboutImg from '../../assets/about.png';
import { Link } from 'react-router-dom';
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
        <h1 className="text-5xl text-neutral-200 font-bold">About Me</h1>

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
              <Link to={'/contact'} className="flex items-center gap-x-2 md:text-lg text-base text-neutral-500 gruoup-hover:text-green-600 font-normal ease-in-out duration-300">
               Hire Me 
               <FaArrowRightLong className="text-xl group-hover:translate-x-1 ease-in-out duration-500" />
               </Link>
          </div>
        </div>

      {/* Bio Section */}
      <p className="text-lg text-neutral-500 font-normal">
          Me apasiona transformar conceptos abstractos en soluciones 
          tecnológicas elegantes y efectivas. Mi enfoque se centra en construir sistemas robustos y escalables,
         guiados por una arquitectura bien planificada y un código limpio. Cada proyecto es una oportunidad 
         para innovar y optimizar, buscando siempre la máxima precisión y sostenibilidad. Fuera del desarrollo,
          disfruto explorando nuevas tecnologías, resolviendo desafíos complejos y colaborando en iniciativas 
          que buscan hacer una diferencia real en el mundo.
      </p>


        {/* Contact Section */}
        <div className="space-y-4">
          <h1 className="text-3xl text-neutral-200 font-bold">Contact Me</h1>
          <div className="space-y-3">
            <div className="flex items-center gap-x-3">
              <LiaHandPointer className="text-lg text-green-400 font-normal rotate-90" />
              <p className="md:block hidden text-base text-neutral-400 font-normal">Email:</p>
              <Link to={'mailto:zqkKf@example.com'} className="text-base text-neutral-400 hover:text-green-500 font-normal ease-in-out duration-300">zqkKf@example.com</Link>
            </div>

            <div className="flex items-center gap-x-3">
              <LiaHandPointer className="text-lg text-green-400 font-normal rotate-90" />
              <p className="md:block hidden text-base text-neutral-400 font-normal">Instagram:</p>
              <Link to={'mailto:zqkKf@example.com'} className="text-base text-neutral-400 hover:text-green-500 font-normal ease-in-out duration-300">xanthus_24</Link>
            </div>

          </div>
        </div>
      </div>

      {/* Johan Section */}
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

    </Layout>
  );
}

export default About;
