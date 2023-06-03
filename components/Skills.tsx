import React from 'react'
import html from '../public/html.png';
import css from '../public/css.png';
import javascript from '../public/javascript.png';
import react from '../public/react.png';
import redux from '../public/redux.png';
import nextjs from '../public/nextjs.png';
import nodejs from '../public/nodejs.png';
import expressjs from '../public/expressjs.png';
import mongodb from '../public/mongodb.png';
import bootstrap from '../public/bootstrap.png';
import tailwind from '../public/tailwind.png';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className='grid grid-cols-4 ml-44 gap-y-8 max-w-containerxx'>
        <Image src={html} alt='html' className='w-14 h-14'/>
        <Image src={css} alt='css' className='w-14 h-14'/>
        <Image src={javascript} alt='javascript' className='w-14 h-14'/>
        <Image src={react} alt='react' className='w-14 h-14'/>
        <Image src={redux} alt='redux' className='w-14 h-14'/>
        <Image src={nextjs} alt='nextjs' className='w-14 h-14'/>
        <Image src={tailwind} alt='tailwind' className='w-14 h-14'/>
        <Image src={bootstrap} alt='bootstrap' className='w-14 h-14'/>
        <Image src={nodejs} alt='nodejs' className='w-14 h-14'/>
        <Image src={expressjs} alt='expressjs' className='w-14 h-14'/>
        <Image src={mongodb} alt='mongodb' className='w-14 h-14'/>
    </div>
  )
}

export default Skills