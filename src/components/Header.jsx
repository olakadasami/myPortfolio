

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
                    <a
                        className="inline-block px-12 hover:-translate-y-1 duration-300 border w-fit transition py-4 rounded text-center border-gray-200" rel="noreferrer" target="_blank"
                        href={'https://docs.google.com/document/d/1KAPXyiURDJT-IkQP7ynyBfa9T4Ar_CwRsngWPA4ZRtM/edit?usp=sharing'}>
                        My Resume
                    </a>
                </div>

            </div>
        </header>
    )
}

export default Header