import { BiMenu } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link';

const Nav = ({ toogle, navTooogle }) => {

    return (
        <div className='sticky text-white top-0 h-20 flex justify-between items-center px-8 md:px-12 shadow-xl'>
            <div id="logo" className="font-bold text-lg">
                OlaksDev
            </div>
            <div id="nav" onClick={toogle} className='md:hidden'>
                {navTooogle ? <FaTimes size={24} /> : <BiMenu size={28} />}
            </div>

            <div className='font-mono'>
                <ul>
                    <li>
                        <HashLink to={'#about'} >
                            About
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to={'#experience'} >
                            Experience
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to={'#work'} >
                            Work
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to={'#contact'} >
                            Contact
                        </HashLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav