import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center  '>
        <p className='font-titleFont text-lg text-textOrange font-semibold flex items-center justify-center'>04. What's Next?</p>
        <h2 className='font-titleFont text-5xl font-semibold'>Get In Touch</h2>
        <p className='max-w-[600px] text-center text-textDark'>I would love to hear more from you!</p>
        <a href="mailto:pratapkarmakar255@gmail.com" target='_blank'><button className='w-40 h-14 border border-textOrange mt-6 font-titleFont text-sm text-textOrange tracking-wider rounded-md hover:bg-hoverColor hover:text-black duration-300'>Say Hello!</button></a>
    </section>
  )
}

export default Contact