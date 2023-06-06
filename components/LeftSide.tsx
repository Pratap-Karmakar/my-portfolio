import React from 'react'
import {TbBrandGithub} from 'react-icons/tb'
import {RiLinkedinLine,RiFacebookLine} from 'react-icons/ri'
import {FiInstagram} from 'react-icons/fi'


const LeftSide = () => {
  return (
    <div className='w-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-4'>
            <a href="https://github.com/Pratap-Karmakar" target='_blank'>
                <span className='w-10 h-10  text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-black cursor-pointer hover:-translate-y-2 transition-all duration-300'><TbBrandGithub/></span>
            </a>
            <a href="https://www.linkedin.com/in/pratap-karmakar-2b25b2103/" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-black cursor-pointer hover:-translate-y-2 transition-all duration-300'><RiLinkedinLine/></span>
            </a>
            <a href="https://www.facebook.com/pratap.karmakar.144" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-black cursor-pointer hover:-translate-y-2 transition-all duration-300'><RiFacebookLine/></span>
            </a>
            <a href="https://www.instagram.com/hashtag_pratap/" target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-black cursor-pointer hover:-translate-y-2 transition-all duration-300'><FiInstagram/></span>
            </a>
        </div>
        <div className='w-[2px] h-32 bg-textDark'>

        </div>
    </div>
  )
}

export default LeftSide