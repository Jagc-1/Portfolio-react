/* eslint-disable no-unused-vars */
import React from 'react';
import Layout from '../../components/layout/Layout';
import AboutImg from '../../assets/about.png';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

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
                Desarrollador Full Stack con experiencia en Java, Spring Boot, React, y más. Apasionado por la creación de soluciones eficientes y escalables.
              </p>
              <p className="text-lg text-neutral-500 font-normal">
                Desarrollador Full Stack con experiencia en Java, Spring Boot, React, y más. Apasionado por la creación de soluciones eficientes y escalables.
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
        <p className="text-lg text-neutral-500 font-normal"></p>

        {/* Contact Section */}
        <div className="space-y-4">
          <h1 className="text-3xl text-neutral-200 font-bold">Contact Me</h1>
          <div className="space-y-3">
            <p className="text-neutral-400">Puedes contactarme a través de mi correo electrónico: ejemplo@correo.com</p>
          </div>
        </div>
      </div>

      {/* Johan Section */}
      <div className="w-full space-y-8"></div>

    </Layout>
  );
}

export default About;
