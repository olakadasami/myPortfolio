import { useScreenShot } from "../hooks/useScreenShot";

function WorkItem({ title, github, live, technologies }) {
  const screenShot = useScreenShot(live);
  return (
    <div className="w-full sm:w-[250px] md:w-[300px] p-4 shadow-gray-200 rounded-lg shadow">
      <div className="w-full mb-4">
        <img className="w-full" src={screenShot} alt="image1" />
      </div>

      <h1 className="font-bold text-gray-200 mb-4 text-2xl capitalize">
        {title}
      </h1>

      <p className="text-lg mb-4 font-semibold capitalize">{technologies}</p>

      <div className="flex justify-between">
        <a
          className="active:scale-90 inline-block px-6 hover:-translate-y-1 duration-300 border w-fit transition py-3 rounded text-center border-gray-200"
          target="_blank"
          rel="noreferrer"
          href={github}
        >
          GitHub
        </a>
        <a
          className="active:scale-90 inline-block px-6 hover:-translate-y-1 duration-300 border w-fit transition py-3 rounded text-center border-gray-200"
          target="_blank"
          rel="noreferrer"
          href={live}
        >
          Live
        </a>
      </div>
    </div>
  );
}

export default WorkItem;
