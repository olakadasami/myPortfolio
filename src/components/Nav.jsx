import { BiMenu } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link';

const Nav = ({ toogle, navTooogle }) => {

    return (
        <div className='sticky text-gray-200 top-0 h-20 flex justify-between items-center px-8 md:px-12 shadow-xl'>
            <div id="logo" className="font-bold text-lg">
                OlaksDev
            </div>
            <div id="nav" onClick={toogle} className='md:hidden'>
                {navTooogle ? <FaTimes size={24} /> : <BiMenu size={28} />}
            </div>

            <div className='hidden md:block md:min-w-2/3'>
                <ol className='font-mono flex w-full justify-between'>
                    <li className='px-4'>
                        <HashLink to='#about' >
                            01. About
                        </HashLink>
                    </li>
                    <li className='px-4'>
                        <HashLink to='#experience' >
                            02. Experience
                        </HashLink>
                    </li>
                    <li className='px-4'>
                        <HashLink to='#work' >
                            03. Work
                        </HashLink>
                    </li>
                    <li className='px-4'>
                        <HashLink to='#contact' >
                            04. Contact
                        </HashLink>
                    </li>
                </ol>
            </div>

            {navTooogle && (
                <div className='w-2/3 h-screen fixed top-20 bg-zinc-900 z-100 right-0 md:hidden'>
                    <ol className='font-mono  flex flex-col h-full items-center justify-center'>
                        <li className='p-8'>
                            <HashLink to='#about' >
                                01. About
                            </HashLink>
                        </li>
                        <li className='p-8'>
                            <HashLink to='#experience' >
                                02. Experience
                            </HashLink>
                        </li>
                        <li className='p-8'>
                            <HashLink to='#work' >
                                03. Work
                            </HashLink>
                        </li>
                        <li className='p-8'>
                            <HashLink to='#contact' >
                                04. Contact
                            </HashLink>
                        </li>
                    </ol>
                </div>
            )}
        </div>
    )
}

export default Nav