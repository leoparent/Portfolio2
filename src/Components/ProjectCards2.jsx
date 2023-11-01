import { motion } from "framer-motion";
import { styles } from '../styles'
import { projects,project_description_en,project_description_fr } from "../Constants/constants";
import { Tilt } from "react-tilt";
import { WebsiteIcon } from "../assets";
import { useTranslation, } from "react-i18next";

export default function My_Collection() {
  const[t,i18n] = useTranslation("global")
  const currentLanguage = i18n.language;
  return (
    <>
      <div className=" md:mx-auto lg:mx-auto flex flex-col gap-8 md:gap-x-5 md:gap-y-10 md:grid md:grid-cols-2 lg:gap-x-10 lg:gap-y-20 lg:grid lg:grid-cols-3">
        {projects.map((image,index) => {
          return (
            <div
              className="lg:max-w-lg  max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-20"
              key={image.id}
            >
                <img
                  className="w-full h-250 object-cover rounded-lg"
                  src={image.image}
                  alt=""
                  onClick={() => window.open
                    (image.source_code_link, "_blank")}
                />
                <div className="p-5">
                  <h5 className="text-2xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">
                    {image.name}
                  </h5>
                  <p className=" font-normal text-gray-700 dark:text-gray-400 text-xl">
                  {currentLanguage === "en" ? project_description_en.text[index] : project_description_fr.text[index]}
                  </p>
                </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
