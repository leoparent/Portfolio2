/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Projects.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/ProjectCards";
import ProjectCards2 from "../Components/ProjectCards2";


const Projects = () => {
  return (
  <div>
    <div id="projects" className="w-full flex justify-center ">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full ">
          <SectionTitle title="PROJECTS" subtitle="What I have done so far" />
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