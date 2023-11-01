
import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/ProjectCards";
import ProjectCards2 from "../Components/ProjectCards2";
import { useTranslation, } from "react-i18next";

const Projects = () => {
  const[t,i18n] = useTranslation("global")
  const currentLanguage = i18n.language;
  return (
  <div>
    <div id="projects" className="w-full flex justify-center ">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full ">
          <SectionTitle title={t("projects.title")} subtitle={t("projects.Introduction")} />
        </div>
        <div className="ml-3 mr-3">
        <ProjectCards2 />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;