const About = () => {
  return (
    <section id="about" className="px-12 mb-12 space-y-6 max-w-3xl md:px-28 ">
      <h2 className=" font-bold text-gray-200 text-3xl">
        <span className="mr-4 font-mono text-xl text-gray-200 font-normal">
          01.
        </span>
        About Me
      </h2>
      <p className="text-justify">
        I&apos;m a passionate Full-Stack Software Developer with expertise in
        both frontend and backend technologies. My focus is on building
        efficient, scalable, and user-friendly applications.
      </p>

      <h3 className=" font-semibold text-gray-200 text-2xl">
        Skills & Technologies
      </h3>
      <ul className="text-gray-300  list-disc">
        <li className="items-center gap-2 list-item">
          <span className="font-semibold text-lg">Frontend: </span> React.js,
          Next.js, TailwindCSS, JavaScript, TypeScript
        </li>
        <li className="items-center gap-2 list-item">
          <span className="font-semibold text-lg">Backend: </span>AdonisJS,
          Node.js, Laravel
        </li>
        <li className="items-center gap-2 list-item">
          <span className="font-semibold text-lg">APIs & Databases: </span>
          RESTful APIs, PostgreSQL, SQLite, MySQL, MongoDB
        </li>
        <li className="items-center gap-2 list-item">
          <span className="font-semibold text-lg">Tools & Workflow: </span>Git,
          Figma, Docker, Strapi CMS, DevOps
        </li>
      </ul>

      <p className="text-justify">
        I enjoy taking on complex challenges, learning new tools and frameworks,
        and constantly improving my skill set. Whether it&apos;s developing
        intuitive frontend interfaces or building robust backend APIs, I aim to
        deliver quality software solutions that provide real value to users.
      </p>

      <p className="text-justify">
        Feel free to check out my projects below to see how I bring these skills
        to life!
      </p>
    </section>
  );
};

export default About;
