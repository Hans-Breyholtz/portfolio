import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

//Images
import HansEirik from '../images/hanseirikbreyholtzmott2.jpg'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.div
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{ opacity: 1, x: 0}}
        viewport={{ once: true}}
        className='-mb-[100px] md:mb-0 flex-shrink-0 object-cover '
        >
            <Image src={HansEirik} layout={"fixed"} width={250} height={250} className='rounded-full shadow-7xl ' />
        </motion.div>
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='uppercase text-[#e0e0e0] text-4xl font-semibold'>Get to <span className='underline decoration-[#3CA6A6]'>know</span> me</h4>
            <p className='text-[#e0e0e0]'>In the fast-paced world we live in, there are two key priorities to drive a business for the path to success. It is the understanding of economics and informational technology. Better understanding towards technology saves your time and efficiency, and economics will better manage extra resources for better growth opportunities. I strive to be a connection between these two sectors. Having the education and foundation of economics along with be a self-taught full stack programmer I aim to create better solutions then what it is found in the market today. My mission is to innovate, create new solutions and drive sales with the knowledge that I can bring to the table. Through my life experiences I have found that I have a passion for becoming an entrepreneur and innovator for reinventing products/services. With little experience in the real world, I strive to continuously add skills and develop myself for who I am. Connect with me and lets share thoughts and ideas for a better tomorrow!</p>
        </div>
    </motion.div>
  )
}

export default About