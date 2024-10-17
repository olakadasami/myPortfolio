import { useQuery } from "@tanstack/react-query";
import ProjectItem from "./ProjectItem";
import { fetchStrapi } from "../shared/services/fetchStrapi";
import { ProjectResponseSchema } from "./project.types";

const Project = () => {
  const {
    data: projects,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchStrapi("/api/projects", ProjectResponseSchema),
  });

  return (
    <section id="work" className="px-12 py-20 ">
      <h2 className="text-4xl font-bold text-white mb-12">
        <span className="mr-4 font-mono text-xl text-gray-200 font-normal">
          03.
        </span>
        My Projects
      </h2>

      <div className="flex flex-col gap-10">
        {isLoading && <div>Loading...</div>}
        {error ? <div>Error: {error.message}</div> : null}

        {projects?.data.map((project, index: number) => (
          <ProjectItem key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Project;
