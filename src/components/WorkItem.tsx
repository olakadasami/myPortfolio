import { FaGithub } from "react-icons/fa";
import { useScreenShot } from "../hooks/useScreenShot";
import { PropsWithChildren } from "react";

type Props = {
  title: string;
  github: string;
  live: string;
  technologies: string;
  description: string;
  index: number;
  tag: string;
};
function WorkItem({
  title,
  github,
  live,
  technologies,
  description,
  index,
  tag,
}: Props) {
  const screenShot = useScreenShot(live);
  const techTags = technologies.split(", ");

  return (
    <div
      className={`w-full -bg-gradient p-8 flex flex-col ${
        index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:items-center gap-6 rounded-lg shadow-lg`}
    >
      {/* Image */}
      <div className="w-full md:w-1/3 rounded overflow-hidden">
        <img className="w-full" src={screenShot} alt={title} />
      </div>

      {/* Text content */}
      <div className="space-y-4 flex-1">
        <h1 className="flex gap-4 items-center">
          <span className="font-bold text-center md:text-start text-gray-200 text-2xl capitalize">
            {title}
          </span>
          <span className="font-mono bg-gray-700 px-4 py-2 rounded-full text-gray-200 text-xs">
            {tag}
          </span>
        </h1>

        <p className="text-justify text-sm">{description}</p>

        <p className="flex items-center gap-4">
          {techTags.map((tag) => (
            <TechTag tag={tag} />
          ))}
        </p>

        <div className="flex gap-4">
          <Button href={live}>Visit website</Button>
          <Button href={github}>
            <FaGithub />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WorkItem;

function TechTag({ tag }: { tag: string }) {
  return (
    <p className="lowercase bg-gray-700 px-4 py-2 font-mono text-xs rounded-full text-gray-200">
      {tag}
    </p>
  );
}

function Button({ href, children }: { href: string } & PropsWithChildren) {
  return (
    <a
      // className=" active:scale-90 bg-[#0b0825] px-6 hover:-translate-y-1  duration-300 w-fit transition py-3 rounded text-center"
      className="flex items-center px-6 hover:-translate-y-1 duration-300 border hover:text-white w-fit transition py-3 rounded text-center border-gray-400 hover:border-white"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
