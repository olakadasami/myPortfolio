import { useQuery } from "@tanstack/react-query";
import WorkItem from "./WorkItem";
import { fetchProjects } from "../services/projects";

type TProject = {
  id: number;
  title: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string;
  description: string;
  tag: string;
};

const Work = () => {
  const {
    data: projects,
    error,
    isLoading,
  } = useQuery({ queryKey: ["projects"], queryFn: fetchProjects });

  console.log({ projects });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <section id="work" className="px-12 py-20 ">
      <h2 className="text-4xl font-bold text-white mb-12">
        <span className="mr-4 font-mono text-xl text-gray-200 font-normal">
          03.
        </span>
        My Projects
      </h2>

      <div className="flex flex-col gap-10">
        {projects?.data?.map((project: TProject, index: number) => (
          <WorkItem
            key={project.id}
            title={project.title}
            live={project.liveUrl}
            github={project.githubUrl}
            technologies={project.technologies}
            description={project.description}
            tag={project.tag}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
