/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ProjectCard = ({ img, title, desc, link, date, showLink = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out 
        ${isExpanded ? 'h-auto' : 'h-60'} cursor-pointer group transform hover:scale-105`} 
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Imagen del Proyecto */}
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover transition-transform duration-300 ease-in-out"
      />

      {/* Contenido del Proyecto */}
      <div className={`p-4 bg-gray-800 text-gray-100 transition-all duration-300 ease-in-out 
        ${isExpanded ? 'max-h-screen' : 'max-h-24 overflow-hidden'} rounded-b-lg`}>
        
        <h2 className="text-2xl font-bold mb-1">{title}</h2>

        {isExpanded && <p className="text-sm text-gray-400 mb-2">{date}</p>}
        {isExpanded && <p className="text-sm">{desc}</p>}

        {showLink && isExpanded && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-600 text-base mt-2 inline-block transition duration-300 ease-in-out transform hover:scale-105"
          >
            View More
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
