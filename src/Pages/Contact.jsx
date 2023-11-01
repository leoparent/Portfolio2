
import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import ContactForm from "../Components/ContactForm";
import SocialLinks from "../Components/SocialLinks";
import { useTranslation, } from "react-i18next";

const Contact = () => {
  const[t,i18n] = useTranslation("global")
  const currentLanguage = i18n.language;
  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center mr-12"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title={t("contacts.title")} subtitle={t("contacts.Introduction")} />
        </div>
        <div className="w-full flex justify-center items-center">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex justify-center items-center sm:flex-row gap-4"
            >
              <div className="flex justify-center"></div>
              <ContactForm />
            </m.div>
          </LazyMotion>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <SocialLinks />
        <div >
        </div>
      </div>
    </div>
  );
};

export default Contact;
