import { motion } from 'framer-motion'
import React from 'react'



type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    animate={{
        scale:[1,2,2,3,1],   
        opacity:[0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
    }}
    transition={{
        duration: 2.5
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[150px] w-[150px] mt-[500px] animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-[500px]'/>
        <div className='absolute border border-[#333333] rounded-full h-[450px] w-[450px] mt-[500px]'/>
        <div className='absolute border border-[#F7AB0A] rounded-full h-[600px] w-[600px] mt-[500px] opacity-20 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[750px] w-[750px] mt-[500px] '/>
    </motion.div>
  )
}










// import { motion } from 'framer-motion'
// import React from 'react'



// type Props = {}

// export default function BackgroundCircles({}: Props) {
//   return (
//     <motion.div 
//     initial={{
//         opacity:0
//     }}
//     animate={{
//         scale:[1,2,2,3,1],
//         opacity:[0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
//         borderRadius: ["20%", "20%", "50%", "80%", "20%"]
//     }}
//     transition={{
//         duration: 2.5
//     }}
//     className='relative flex justify-center items-center'>
//         <div className='absolute border border-[#333333] rounded-full h-[150px] w-[150px] mt-[500px] animate-ping'/>
//         <div className='absolute border border-[#333333] rounded-full h-[150px] w-[160px] mt-[500px] animate-spin'/>
//         <div className='absolute border border-[#333333] rounded-full h-[245px] w-[250px] mt-[500px] animate-spin'/>
//         <div className='absolute border border-[#333333] rounded-full h-[450px] w-[455px] mt-[500px] animate-spin'/>
//         <div className='absolute border border-[#333333] rounded-full h-[450px] w-[450px] mt-[500px] animate-ping'/>
//         <div className='absolute border border-[#ff9900] rounded-full h-[605px] w-[600px] mt-[500px] opacity-20 animate-spin'/>
//         <div className='absolute border border-[#333333] rounded-full h-[750px] w-[755px] mt-[500px] animate-spin'/>
//     </motion.div>
//   )
// }