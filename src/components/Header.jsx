import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <div className='h-screen px-8 grid place-items-center'>
            <p className='font'>
                Hello, my name is
            </p>
            <h1>
                <span>Olakada Samuel.</span>
                <span>I build web applications.</span>
            </h1>
            <p>
                I'm a web developer specialized in creating beautiful user interfaces(UI) to give users amazing digital experiences.
            </p>
            <Button>
                My Resume
            </Button>
        </div>
    )
}

export default Header