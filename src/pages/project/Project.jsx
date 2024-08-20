/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../../components/layout/Layout';
import ProjectCard from '../../components/projects/projectCard';
import ImgProject from '../../assets/Profile.png';

const Project = () => {
  return (
    <Layout className={'md:py-[6ch] py-6 space-y-12'}> 
      <div className="space-y-2">
        <h1 className="text-3xl text-neutral-200 font-bold"> Projects  </h1>
        <p className="text-nase font-neutral-500 font-normal">
            I design and develop websites and applications.
        </p>
      </div>

       <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
           <ProjectCard img={ImgProject} title={'Memorie Game'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}/> 
           <ProjectCard img={ImgProject} title={'Memorie Game'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}/> 
           <ProjectCard img={ImgProject} title={'Memorie Game'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}/> 
           <ProjectCard img={ImgProject} title={'Memorie Game'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}/> 
           <ProjectCard img={ImgProject} title={'Memorie Game'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}/> 
           <ProjectCard img={ImgProject} title={'Memorie Game'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}/> 
           <ProjectCard img={ImgProject} title={'Memorie Game'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}/> 
           <ProjectCard img={ImgProject} title={'Memorie Game'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit'}/> 
        </div>
    </Layout>
  )
}

export default Project;