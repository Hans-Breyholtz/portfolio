import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon url="https://www.facebook.com/profile.php?id=100008317124507" fgColor='gray' bgColor='transparent' />
            <SocialIcon url="https://github.com/Hans-Breyholtz" fgColor='gray' bgColor='transparent' />
            <SocialIcon url="https://www.instagram.com/hanseirik_breyholtzmott/" fgColor='gray' bgColor='transparent' />
            <SocialIcon url="https://www.linkedin.com/in/hans-eirik-breyholtz-mott/" fgColor='gray' bgColor='transparent' />
            
        </motion.div>
        <a href="mailto:hbreyholtz@gmail.com">
            <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center'>
                <SocialIcon url="mailto:hbreyholtz@gmail.com" fgColor='gray' bgColor='transparent' />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
            </motion.div>
        </a>
        
    </header>
  )
}

export default Header