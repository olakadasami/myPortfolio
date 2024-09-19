import { FaNodeJs, FaJs, FaPython, FaSass, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const About = () => {
    return (
        <section id='about' className='px-12 mb-12 max-w-3xl md:px-28 '>
            <h2 className='mb-12 font-bold text-gray-200 text-3xl'>
                <span className='mr-4 font-mono text-xl text-gray-200 font-normal'>01.</span>
                About Me</h2>
            <p className='mb-4'>Hello I'm Samuel, Nice to meet you.</p>
            <p className='mb-8'>I'm a student of Chemical Engineering from the University of Port Harcourt. I love creating things that reside on the web space. My interest in web development started around 2018 when I
                wanted some programming knowledge during my holiday in order to be prepared for an Engineering programming course coming up the next semester. </p>

            <h3 className='mb-4 font-semibold text-gray-200 text-2xl'>Technologies I Use</h3>
            <p className='mb-4'>
                I am more focused on Front-end technologies though I have some experience with backend.
            </p>
            <ul className='text-gray-300 font-mono text-lg'>
                <li className='flex items-center gap-2'><FaJs /> JavaScript</li>
                <li className='flex items-center gap-2'><FaReact /> ReactJS</li>
                <li className='flex items-center gap-2'><SiTailwindcss /> TailwindCSS</li>
                <li className='flex items-center gap-2'><FaSass /> SASS</li>
                <li className='flex items-center gap-2'><FaNodeJs /> NodeJS/ExpressJS</li>
                <li className='flex items-center gap-2'><FaPython /> Python/Django</li>
            </ul>
        </section>
    )
}

export default About