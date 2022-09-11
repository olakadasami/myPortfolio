import crappo from '../assets/crappo.png'
import introsection from '../assets/introsection.png'
import insure from '../assets/insure.png'
import portfolio from '../assets/portfolio.png'
import furniture from '../assets/furniture.png'
import allstores from '../assets/allstores.png'

import WorkItem from './WorkItem'

const Work = () => {

    const projects = [
        {
            name: "Crappo",
            technologies: "React, TailwindCSS",
            live: "https://crappo-olakadasami.vercel.app/",
            github: "https://github.com/olakadasami/crappo",
            image: crappo,
        },
        {
            name: "My Portfolio",
            technologies: "React, TailwindCSS",
            live: "https://olakadasami-portfolio.vercel.app/",
            github: "https://github.com/olakadasami/myPortfolio",
            image: portfolio,
        },
        {
            name: "allStores e-commerce",
            technologies: "ReactJs, TailwindCSS",
            live: "https://olaks-allstores.netlify.app/",
            github: "https://github.com/olakadasami/allStores",
            image: allstores,
        },
        {
            name: "Insure Landing",
            technologies: "HTML5, CSS3",
            live: "https://insurelanding-olaks.netlify.app/",
            github: "https://github.com/olakadasami/insure",
            image: insure,
        },
        {
            name: "HomeSmart Furniture",
            technologies: "SCSS, HTML5",
            live: "https://olaks-furniture-rental.netlify.app/",
            github: "https://github.com/olakadasami/furniture",
            image: furniture,
        },
        {
            name: "Intro Section",
            technologies: "CSS3, HTML5",
            live: "https://fem-intro-section-olaks.netlify.app/",
            github: "https://github.com/olakadasami/intro-section-FEM",
            image: introsection,
        },
    ]
    return (
        <section id='work' className='px-12 py-20 '>
            <h2 className='text-4xl font-bold text-white mb-12'>
                <span className='mr-4 font-mono text-xl text-gray-200 font-normal'>03.</span>
                My Projects
            </h2>

            <div className='flex gap-20 flex-wrap justify-center'>
                {projects.map((project, index) => (
                    <WorkItem
                        key={index}
                        title={project.name}
                        live={project.live}
                        image={project.image}
                        github={project.github}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </section>
    )
}

export default Work