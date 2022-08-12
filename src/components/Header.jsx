import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <header id='header' className='h-screen flex justify-start -translate-y-16 z-10 p-12 md:p-32 items-center'>
            <div className=''>

                <p className='mb-4 font-mono text-gray-200'>
                    Hello, my name is
                </p>
                <h1 className='text-5xl font-bold mb-8 md:text-6xl'>
                    <span className='block mb-4 text-gray-300 l'>Olakada Samuel.</span>
                    <span className='block '>I build web applications.</span>
                </h1>
                <p className='text-lg mb-8'>
                    I'm a web developer specialized in creating beautiful user interfaces(UI) to give users amazing digital experience.
                </p>

                <div className='font-mono text-gray-200'>
                    <Button href={'/'}>
                        My Resume
                    </Button>
                </div>

            </div>
        </header>
    )
}

export default Header