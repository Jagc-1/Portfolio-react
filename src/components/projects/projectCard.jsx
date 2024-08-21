/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ProjectCard = ({ img, title, desc, link, showLink = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform ${isExpanded ? 'h-auto' : 'h-60'} cursor-pointer group`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <img src={img} alt={title} className="w-full h-40 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
      <div className={`p-4 bg-gray-800 text-gray-100 transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-screen' : 'max-h-24 overflow-hidden'}`}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className={`text-sm ${isExpanded ? 'block' : 'hidden'}`}>{desc}</p>
        {showLink && isExpanded && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-600 text-base mt-2 inline-block">
            View More
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
