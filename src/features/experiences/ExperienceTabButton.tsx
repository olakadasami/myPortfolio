import { TExperience } from "./experience.types";

interface ITabButton {
  experience: TExperience;
  activeTab: number;
  index: number;
  handleActive: (t: number) => void;
}
function ExperienceTabButton({
  experience,
  activeTab,
  index,
  handleActive,
}: ITabButton) {
  return (
    <button
      key={index}
      className={`py-3 px-4 text-start text-xs border-b-2 md:border-b-0  md:border-l-2  capitalize transition duration-300 hover:bg-primary ${
        activeTab === index
          ? "border-gray-200 text-gray-200 bg-trans"
          : "hover:text-gray-200 border-gray-700"
      }`}
      onClick={() => handleActive(index)}
    >
      {experience.companyName}
    </button>
  );
}
export default ExperienceTabButton;
