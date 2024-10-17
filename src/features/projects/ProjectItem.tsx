import { FaGithub } from "react-icons/fa";
import { useScreenShot } from "./useScreenShot";
import { PropsWithChildren, useState } from "react";
import { TProject } from "./project.types";

type Props = {
  index: number;
} & TProject;

function ProjectItem({
  title,
  githubUrl,
  liveUrl,
  technologies,
  description,
  tag,
  index,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const screenShot = useScreenShot(liveUrl);
  const techTags = technologies.split(", ");

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`w-full -bg-gradient p-4 md:p-8 flex flex-col ${
        index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:items-center gap-6 rounded-lg shadow-lg`}
    >
      {/* Image */}
      <div className="w-full md:w-1/3 rounded overflow-hidden">
        <img className="w-full" src={screenShot} alt={title} />
      </div>

      {/* Text content */}
      <div className="space-y-4 flex-1">
        <h1 className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <span className="font-bold text-center md:text-start text-gray-200 text-2xl capitalize">
            {title}
          </span>
          <span className="font-mono bg-gray-700 px-4 py-2 rounded-full text-gray-200 text-xs">
            {tag}
          </span>
        </h1>

        <div>
          <p
            className={`${
              isExpanded ? "" : "line-clamp-4"
            } md:text-justify text-xs sm:text-sm`}
          >
            {description}
          </p>
          <button
            onClick={toggleExpansion}
            className="mt-2 text-sm md:hidden text-blue-500 hover:underline"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        </div>

        <p className="flex items-center gap-4">
          {techTags.map((tag) => (
            <TechTag key={tag} tag={tag} />
          ))}
        </p>

        <div className="flex gap-4">
          <Button href={liveUrl}>Visit website</Button>
          {githubUrl && (
            <Button href={githubUrl}>
              <FaGithub />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

function TechTag({ tag }: { tag: string }) {
  return (
    <span className="lowercase bg-gray-700 px-4 py-2 font-mono text-xs rounded-full text-gray-200">
      {tag}
    </span>
  );
}

function Button({ href, children }: { href: string } & PropsWithChildren) {
  return (
    <a
      className="flex items-center px-6 hover:-translate-y-1 duration-300 border hover:text-white w-fit transition py-3 rounded text-center border-gray-400 hover:border-white"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
