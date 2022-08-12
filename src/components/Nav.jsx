import { FaTimes } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'
import { HashLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';


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
    },
    exit: {
        x: "100vh",
        opacity: 0
    }
}

const Nav = ({ ToogleHandler, navToogle }) => {

    const [scrollPos, setScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((scrollPos > currentScrollPos) || scrollPos < 10)

        setScrollPos(currentScrollPos)
    }, [scrollPos]

    )

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollPos, visible, handleScroll])

    return (
        <div className={`sticky opacity-100 text-gray-200 z-50 ${visible ? "top-0" : "-top-20"} transition-all duration-300 h-20 flex justify-between items-center px-8 md:px-12 shadow-xl`}>
            <div id="logo" className="font-bold text-lg">
                OlaksDev
            </div>
            <div id="nav" onClick={ToogleHandler} className='md:hidden cursor-pointer'>
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

            {
                navToogle && (
                    <nav onClick={ToogleHandler} className='w-full h-screen fixed top-0 bg-trans backdrop-blur z-40 right-0 md:hidden'>
                        <AnimatePresence>
                            <motion.div
                                variants={sideVariant}
                                initial="start"
                                animate="end"
                                exit="exit"
                                className='w-2/3 bg-gray-800 z-50 h-full ml-auto'>
                                <ol className='font-mono relative flex flex-col h-full items-center justify-center'>
                                    <li onClick={ToogleHandler} className="right-10 absolute top-10 cursor-pointer">
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
                        </AnimatePresence>
                    </nav>
                )
            }
        </div >
    )
}

export default Nav