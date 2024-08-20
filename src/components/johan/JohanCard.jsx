/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const JohanCard = ({ Icon, className }) => {
  return (
    <Link
      to={'/johan'}
      className='w-20 h-[5.5rem] flex items-center justify-center bg-neutral-900/20 hover:bg-green-900/10 rounded-xl border-2 border-neutral-800/80 hover:border-green-800/80 group ease-in-out duration-300'
    >
      <Icon className={`text-5xl text-neutral-400 ease-in-out duration-300 ${className}`} />
    </Link>
  );
};

export default JohanCard;
