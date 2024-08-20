/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children, className }) => {
  return (
    <div className={`w-full h-auto flex flex-col lg:px-80 md:px-60 sm:px-7 px-4 ${className}`}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,  // Asegura que children es un nodo React
  className: PropTypes.string,          // Asegura que className es una cadena de texto
};

export default Layout;
