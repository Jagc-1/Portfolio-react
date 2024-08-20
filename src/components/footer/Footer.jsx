/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../layout/Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t border-neutral-900/40'>
        <Layout  className='py-10 flex items-center justify-center'>
            <p className=" text-neutral-700 text-sm font-normal inline-flex gap-x-1">
               &copy; {new Date().getFullYear()} Johan Campos All Rights Reserved
            </p>
        </Layout>
    </footer>
  )
}

export default Footer