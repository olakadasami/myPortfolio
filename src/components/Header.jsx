import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <div className='h-screen px-12 py-40 '>
            <p className='mb-8'>
                Hello, my name is
            </p>
            <h1 className='text-4xl te mb-8 md:text-6xl'>
                <span className='block mb-4 text-gray-200 l'>Olakada Samuel.</span>
                <span className='block '>I build web applications.</span>
            </h1>
            <p className='text-lg mb-8'>
                I'm a web developer specialized in creating beautiful user interfaces(UI) to give users amazing digital experience.
            </p>

            <div className=''>
                <Button>
                    My Resume
                </Button>
            </div>
        </div>
    )
}

export default Header