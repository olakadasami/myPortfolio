

const Contact = () => {
    return (
        <section id='contact' className='px-12 text-center py-20 md:px-28 '>
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>
                <span className='mr-4 font-mono text-xl text-gray-200 font-normal'>04.</span>
                Get In Touch</h2>
            <p className='mb-4'>
                You can reach me via my social media platforms
                <span className='md:hidden'> below</span> <span className='hidden md:block'> to the left</span>
            </p>
            <div className='font-mono flex justify-center text-gray-200'>

                <a className='inline-block px-12 hover:-translate-y-1 duration-300 border w-fit transition py-4 rounded text-center border-gray-200'
                    rel="noreferrer" target="_blank" href={'mailto:olakadasamuel@gmail.com'}>
                    Say Hello
                </a>
            </div>
        </section>
    )
}

export default Contact