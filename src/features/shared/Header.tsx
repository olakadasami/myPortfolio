const Header = () => {
  return (
    <header
      id="header"
      className="h-screen flex justify-start -translate-y-16 z-10 p-12 md:p-32 items-center"
    >
      <div className="">
        <p className="mb-4 font-mono text-gray-200">Hello, my name is</p>
        <h1 className="font-bold space-y-4 md:space-y-6 mb-8">
          <span className="block text-5xl md:text-6xl text-gray-300">
            Olakada Samuel.
          </span>
          <span className="block text-3xl md:text-5xl">
            I build web applications.
          </span>
        </h1>
        <p className="text-lg mb-8">
          Full-Stack Developer | React | Next.js | AdonisJS | TypeScript
        </p>

        <div className="font-mono text-gray-200">
          <a
            className="inline-block px-12 hover:-translate-y-1 duration-300 border w-fit transition py-4 rounded text-center border-gray-200"
            rel="noreferrer"
            target="_blank"
            download
            href={
              "https://drive.google.com/file/d/1kJM5KxAmaFN86IMH77Us81QgBTHGaRKr/view?usp=drive_link"
            }
          >
            My Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
