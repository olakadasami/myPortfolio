import { formatDate } from "../shared/utils/formatDate";
import { TExperience } from "./experience.types";

function ExperienceTabDetails({ experience }: { experience: TExperience }) {
  const startDate = new Date(experience.startDate!);
  const endDate = experience.endDate ? new Date(experience.endDate!) : null;

  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = endDate ? formatDate(endDate) : "Present";
  return (
    <div className="space-y-2">
      <h3 className="text-2xl font-semibold text-gray-200">
        <span>{experience.jobTitle}</span>{" "}
        <a
          href={experience.companyLink}
          target="_blank"
          className="text-gray-300 font-normal text-lg underline"
        >
          @{experience.companyName}
        </a>
      </h3>
      <p className="font-mono text-gray-300">
        {formattedStartDate} - {formattedEndDate}
      </p>
      <p className="mt-4 ">{experience.description}</p>

      <ul className="list-disc list-inside">
        {experience.contributions.map((contribution, index: number) => (
          <li key={index}>{contribution}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceTabDetails;
