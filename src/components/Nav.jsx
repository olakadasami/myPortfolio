import { FaBars } from 'react-icons/fa';

const Nav = () => {
    return (
        <div className='sticky text-gray-200 top-0 h-20 flex justify-between items-center px-8 shadow-xl'>
            <div id="logo" className="font-bold text-lg">
                OlaksDev
            </div>
            <div id="nav">
                <FaBars />
            </div>
        </div>
    )
}

export default Nav