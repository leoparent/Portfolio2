import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { memoji } from "../Constants/constants";
import { introduction_en,introduction_fr } from "../Constants/constants";
import ImageSlider from "../Components/elements/ImageSlider";
import { useTranslation, } from "react-i18next";

const About = () => {
  const[t,i18n] = useTranslation("global")
  const currentLanguage = i18n.language;

  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title={t("about.title")} subtitle={t("about.Introduction")} />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-grayscale-50  text-center flex flex-col gap-6 text-xl"
              >
                <span className="text-primary-400 text-xl">{currentLanguage === "en" ? introduction_en.text[0] : introduction_fr.text[0]}</span>
                <span>{currentLanguage === "en" ? introduction_en.text[1] : introduction_fr.text[1]}</span>
                <span>{currentLanguage === "en" ? introduction_en.text[2] : introduction_fr.text[2]}</span>
                <span>{currentLanguage === "en" ? introduction_en.text[3] : introduction_fr.text[3]}</span>
                <span>{currentLanguage === "en" ? introduction_en.text[4] : introduction_fr.text[4]}</span>
                <span>{currentLanguage === "en" ? introduction_en.text[5] : introduction_fr.text[5]}</span>
                <span>{currentLanguage === "en" ? introduction_en.text[6] : introduction_fr.text[6]}</span>

              </m.p>
            </LazyMotion>
          </div>
          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
              <ImageSlider images={memoji.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
