import { BiMenu } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';


const sideVariant = {
    start: {
        x: "100vh",
        opacity: 0
    },
    end: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

const Nav = ({ ToogleHandler, navTooogle }) => {

    return (
        <div className='sticky opacity-100 text-gray-200 top-0 h-20 flex justify-between items-center px-8 md:px-12 shadow-xl'>
            <div id="logo" className="font-bold text-lg">
                OlaksDev
            </div>
            <div id="nav" onClick={ToogleHandler} className='md:hidden'>
                <BiMenu size={36} />
            </div>

            <div className='hidden md:block md:min-w-2/3'>
                <ol className='font-mono flex w-full justify-between'>
                    <li className='px-4 hover:-translate-y-1 transition duration-200 cursor-pointer hover:text-gray-300'>
                        <HashLink smooth to='#about' >
                            01. About
                        </HashLink>
                    </li>
                    <li className='px-4 hover:-translate-y-1 transition duration-200 cursor-pointer hover:text-gray-300'>
                        <HashLink smooth to='#experience' >
                            02. Experience
                        </HashLink>
                    </li>
                    <li className='px-4 hover:-translate-y-1 transition duration-200 cursor-pointer hover:text-gray-300'>
                        <HashLink smooth to='#work' >
                            03. Work
                        </HashLink>
                    </li>
                    <li className='px-4 hover:-translate-y-1 transition duration-200 cursor-pointer hover:text-gray-300'>
                        <HashLink smooth to='#contact' >
                            04. Contact
                        </HashLink>
                    </li>
                </ol>
            </div>

            {navTooogle && (
                <nav className='w-full h-screen fixed top-0 bg-trans backdrop-blur z-100 right-0 md:hidden'>
                    <motion.div
                        variants={sideVariant}
                        initial="start"
                        animate="end"
                        className='w-2/3 bg-gray-800 h-full ml-auto'>
                        <ol className='font-mono relative flex flex-col h-full items-center justify-center'>
                            <li onClick={ToogleHandler} className="right-10 absolute top-10">
                                <FaTimes size={24} />
                            </li>
                            <li onClick={ToogleHandler} className='p-8 '>
                                <HashLink smooth to='#about' >
                                    01. About
                                </HashLink>
                            </li>
                            <li onClick={ToogleHandler} className='p-8 '>
                                <HashLink smooth to='#experience' >
                                    02. Experience
                                </HashLink>
                            </li>
                            <li onClick={ToogleHandler} className='p-8 '>
                                <HashLink smooth to='#work' >
                                    03. Work
                                </HashLink>
                            </li>
                            <li onClick={ToogleHandler} className='p-8 '>
                                <HashLink smooth to='#contact' >
                                    04. Contact
                                </HashLink>
                            </li>
                        </ol>
                    </motion.div>
                </nav>
            )}
        </div>
    )
}

export default Nav