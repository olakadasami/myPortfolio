import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <div className='h-screen mx-auto'>
            <div className='absolute top-1/2 max-w-3xl md:px-28 px-12 -translate-y-1/2'>
                <p className='mb-8 font-mono text-gray-200'>
                    Hello, my name is
                </p>
                <h1 className='text-4xl font-bold te mb-8 md:text-6xl'>
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
        </div>
    )
}

export default Header