import { useQuery } from "@tanstack/react-query";
import WorkItem from "./WorkItem";

type TProject = {
  id: number;
  title: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string;
  description: string;
  tag: string;
};

const fetchProjects = async () => {
  const token = `b2689a49ac239858e047f9e101a498d7f0202284b5258d73ba3423fbfebda0181d29d6b90fd61bdef37f66e92854454e8ee3daf67d7ab821f8240370ee23af2c99afd251e9258cf3b4dbbc96d2d3018398c07e15554a974bf5c8149d568f8f5bf9d1028d73000e4da7c3892db6aa81bf0c29f9e291a4445b2a694d8fa3a452ce`;
  const res = await fetch("http://localhost:1337/api/projects", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
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
