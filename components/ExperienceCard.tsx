import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion"

//Images
import HansEirik from '../images/hanseirikbreyholtzmott.jpg'
import NodejsIcon from '../images/nodejs.png'
import NextjsIcon from '../images/nextjs.png'
import ReactIcon from '../images/react.png'
import TailwindcssIcon from '../images/tailwindcss.jpg'
import MongoDBIcon from '../images/mongodb.png'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='text-[#e0e0e0] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-150 ease-in-out'>
        <motion.div 
        initial={{
            y: -100,
            opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 xl:w-[200px] xl:h-[200px] relative'>
            <Image 
            src={HansEirik}
            layout="fill"
            className='rounded-full object-contain w-full'
            />
        </motion.div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CTO of ViLeier</h4>
            <p className='font-bold text-2xl mt-1'>ViLeier</p>
            <div className='flex flex-row space-x-2 my-2'>
                <div className='relative w-8 h-8'>
                    <Image 
                    src={NodejsIcon}
                    layout="fill"
                    className='rounded-full object-contain w-full'
                    />
                </div>
                <div className='relative w-8 h-8'>
                    <Image 
                    src={NextjsIcon}
                    layout="fill"
                    className='rounded-full object-contain w-full'
                    />
                </div>
                <div className='relative w-8 h-8'>
                    <Image 
                    src={ReactIcon}
                    layout="fill"
                    className='rounded-full object-contain w-full'
                    />
                </div>
                <div className='relative w-8 h-8'>
                    <Image 
                    src={TailwindcssIcon}
                    layout="fill"
                    className='rounded-full object-contain w-full'
                    />
                </div>
                <div className='relative w-8 h-8'>
                    <Image 
                    src={MongoDBIcon}
                    layout="fill"
                    className='rounded-full object-contain w-full'
                    />
                </div>
                {/* Tech used */}
                {/* Tech used */}
            </div>
            <p>Started word  - Present</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summart points</li>
                <li>Summart points</li>
                <li>Summart points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard