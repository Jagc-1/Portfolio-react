/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ProjectCard = ({ img, title, desc, link, date, showLink = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-x transition-transform duration-300 ease-in-out ${isExpanded ? 'h-auto' : 'h-60'} cursor-pointer group`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Imagen del Proyecto */}
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />

      {/* Contenido del Proyecto */}
      <div className={`p-4 bg-gray-800 text-gray-100 transition-all duration-300 ease-in-out  hover:bg-gray-900 hover:text-gray-200 ${isExpanded ? 'max-h-screen' : 'max-h-24 overflow-hidden '}`}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>

        {isExpanded && <p className="text-sm text-gray-400 mb-2">{date}</p>}
        {isExpanded && <p className="text-sm">{desc}</p>}

        {showLink && isExpanded && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-600 text-base mt-2 inline-block"
          >
            View More
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
