import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchExperiences } from "../services/experiences";

const Experience = () => {
  return (
    <section id="experience" className="px-6 sm:px-12 md:px-28  py-16">
      <h2 className="text-gray-200  text-center font-bold text-3xl mb-8">
        <span className="mr-4 font-mono text-xl text-gray-200 font-normal">
          02.
        </span>
        Where I've Worked
      </h2>

      <TabNav />
    </section>
  );
};

export default Experience;

type TExperience = {
  companyName: string;
  companyLink: string;
  description?: string;
  contributions: string[];
  startDate: Date;
  endDate?: Date;
  jobTitle: string;
};

const TabNav = () => {
  const [activeTab, setActiveTab] = useState(0);
  const {
    data: experiences,
    error,
    isLoading,
  } = useQuery({ queryKey: ["experiences"], queryFn: fetchExperiences });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  const startDate = new Date(experiences.data[activeTab].startDate);
  const endDate = new Date(experiences.data[activeTab].endDate);

  const formattedStartDate = startDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  const formattedEndDate =
    endDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    }) || "Present";

  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 my-8">
      <div className="flex md:flex-col  min-w-24 overflow-auto md:scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-300 md:max-h-[222px] ">
        {experiences.data.map((experience: TExperience, index: number) => (
          <button
            key={index}
            className={`py-3 px-4 text-start text-xs border-b-2 md:border-b-0  md:border-l-2  capitalize transition duration-300 hover:bg-primary ${
              activeTab === index
                ? "border-gray-200 text-gray-200 bg-trans"
                : "hover:text-gray-200 border-gray-700"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {experience.companyName}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-gray-200">
          <span>{experiences.data[activeTab].jobTitle}</span>{" "}
          <a
            href={experiences.data[activeTab].companyLink}
            target="_blank"
            className="text-gray-300 font-normal text-lg underline"
          >
            @{experiences.data[activeTab].companyName}
          </a>
        </h3>
        <p className="font-mono text-gray-300">
          {formattedStartDate} - {formattedEndDate}
        </p>
        <p className="mt-4 ">{experiences.data[activeTab].description}</p>

        <ul className="list-disc list-inside">
          {experiences.data[activeTab].contributions.map(
            (contribution: string[], index: number) => (
              <li key={index}>{contribution}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

// export default TabNav;
