import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

//Images
import HansEirik from '../images/hanseirikbreyholtzmott.jpg'
import NodejsIcon from '../images/nodejs.png'
import NextjsIcon from '../images/nextjs.png'
import ReactIcon from '../images/react.png'
import TailwindcssIcon from '../images/tailwindcss.jpg'
import MongoDBIcon from '../images/mongodb.png'

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative cursor-pointer'>
        <motion.div
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{
            duration: 1
        }}
        whileInView={{
            opacity: 1,
            x: 0
        }}
        className='relative rounded-full w-24 h-24 xl:w-32 xl:h-32 border border-gray-500 filter group-hover:grayscale flex items-center justify-center object-cover'
        >
            <Image
            src={NextjsIcon}
            layout={'fill'}
            className='rounded-full bg-white'
            />
        </motion.div>
        <div className='absolute top-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill