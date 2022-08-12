import React from 'react'
import Button from './Button'

const Contact = () => {
    return (
        <section id='contact' className='px-12 text-center py-20 md:px-28 '>
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Get In Touch</h2>
            <p className='mb-4'>
                You can reach me via my social media platforms
                <span className='md:hidden'> below</span> <span className='hidden md:block'> to the left</span>
            </p>
            <div className='font-mono flex justify-center text-gray-200'>

                <Button href={'mailto:olakadasamuel@gmail.com'}>
                    Say Hello
                </Button>
            </div>
        </section>
    )
}

export default Contact