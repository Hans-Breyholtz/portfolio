import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

//Components
import BackgroundCircles from './BackgroundCircles';

//Image
import HansEirik from '../images/hanseirikbreyholtzmott.jpg'

type Props = {}

function Hero({}: Props) {
    const [ text, count ] = useTypewriter({
        words: [
            "Hi, My Name Is Hans-Eirik Breyholtz-Mott",
            "Optimist, Value Seeker, Self-Development",
            "<ILoveTechAndBusiness />"
        ],
        loop: true,
        delaySpeed: 2000
    });


  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image src={HansEirik} layout={"fixed"} width={300} height={300} className='rounded-full shadow-7xl' />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Business & Software Developer</h2>
            <h1 className='text-5xl lg:text-6xl text-white'>
                <span>{text}</span>
                <Cursor cursorColor='#3CA6A6' />
            </h1>
            <div className='mt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            
            </div>
        </div>
        
    </div>
  )
}

export default Hero