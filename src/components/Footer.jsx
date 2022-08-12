import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {

    const handleClick = (url) => {
        window.open(url)
    }

    return (
        <footer className='px-12 md:px-28  py-10'>
            <div className='md:fixed md:left-10 md:top-1/2'>
                <ul className='flex justify-center gap-10 md:flex-col'>
                    <li onClick={() => handleClick("https://github.com/olakadasami")}
                        className='cursor-point hover:-translate-y-1 transition duration-300 hover:text-gray-200'>
                        <FaGithub size={24} />
                    </li>
                    <li onClick={() => handleClick("https://twitter.com/olaks_codes?t=NKbMmBvDz13fclAGFLhUVQ&s=08")}
                        className='cursor-point hover:-translate-y-1 transition duration-300 hover:text-gray-200'>
                        <FaTwitter size={24} />
                    </li>
                    <li onClick={() => handleClick("https://www.linkedin.com/in/samuel-olakada-3b82431b8")}
                        className='cursor-point hover:-translate-y-1 transition duration-300 hover:text-gray-200'>
                        <FaLinkedin size={24} />
                    </li>
                    <li onClick={() => handleClick("https://www.instagram.com/olakada_sami")}
                        className='cursor-point hover:-translate-y-1 transition duration-300 hover:text-gray-200'>
                        <FaInstagram size={24} />
                    </li>
                </ul>
            </div>

            <div className='rotate-90 font-mono hidden md:block md:fixed md:-right-10 md:top-1/2 hover:-translate-y-1 transition duration-500 hover:text-gray-200'>
                <Link className='' to='mailto:olakadasamuel@gmail.com'>
                    olakadasamuel@gmail.com
                </Link>
            </div>

            <div className='text-center font-mono py-10'>
                Built by Olakada Samuel
            </div>
        </footer>
    )
}

export default Footer