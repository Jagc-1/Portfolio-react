/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const projectCard = ({img,title,desc}) => {
  return (
    <Link to={'/projects'} className='w-full flex items-centerbg-transparent gap-x-3 hover:shadow-md hover:bg-green-900/5 border border-trasnsparent hover:border-green-800/80  py-3 px-0 hover:px-3 rounded-lg  ease-in-out duration-500'>
       
       <div className="w-16 h-16 rounded-lg bg-neutral-900/60 flex items-center justify-center p-1">
            <img src={img} alt="Project Image" className="w-full h-full object-contain object-center rounded-lg" />
       </div>

       <div className="space-y-0.5 flex-1">
            <h1 className="text-base font-medium text-neutral-300">{title}</h1>
            <small className="text-xs text-neutral-500 font-light line-clamp-1">{desc}</small>
       </div>
    </Link>
  )
}

export default projectCard;