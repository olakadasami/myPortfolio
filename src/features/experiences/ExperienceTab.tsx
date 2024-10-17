import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchStrapi } from "../shared/services/fetchStrapi";
import { ExperienceResponseSchema, TExperience } from "./experience.types";
import ExperienceTabButton from "./ExperienceTabButton";
import ExperienceTabDetails from "./ExperienceTabDetails";

const TabNav = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleActiveTab = (tab: number) => setActiveTab(tab);

  const {
    data: experiences,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["experiences"],
    queryFn: fetchStrapi("/api/experiences", ExperienceResponseSchema),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 my-8">
      <div className="flex md:flex-col  min-w-24 overflow-auto md:scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-300 md:max-h-[222px] ">
        {experiences?.data.map((experience, index: number) => (
          <ExperienceTabButton
            experience={experience}
            index={index}
            activeTab={activeTab}
            handleActive={handleActiveTab}
            key={experience.id}
          />
        ))}
      </div>

      {experiences?.data[activeTab] && (
        <ExperienceTabDetails experience={experiences?.data[activeTab]} />
      )}
    </div>
  );
};

export default TabNav;
