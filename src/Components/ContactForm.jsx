import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";
import { useTranslation, } from "react-i18next";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const[t,i18n] = useTranslation("global")
  const currentLanguage = i18n.language;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vhb5tqc",
      "template_b4svbmk",
      e.target,
      "KYpb-Jb9Vo7NdfqsV"
    )
      .then(
        (result) => {
          document.getElementById("contact_form").reset();
          setIsSent(true);
          alert(t("contacts.alert"));
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };  

  return (
    <div
  style={{
    backgroundImage:
      "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
    width: "80%",
    height: "96%",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
  }}
>
      <div>
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message text-7xl bg-primary-600 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl"
        >
          <Typewriter words={[t("contacts.SubTitle")]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <form
          id="contact_form"
          ref={form}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[80%] h-full flex flex-col gap-4 pt-4 text-grayscale-200"
        >
          <div className="w-full flex flex-col">
            <label htmlFor="firstname">{t("contacts.Fname")}</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder={t("contacts.FnameDescription")}
              id="firstname"
              type="text"
              name="from_name"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="lastname">{t("contacts.LName")}</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder={t("contacts.LnameDescription")}
              id="lastname"
              type="text"
              name="from_last"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email">{t("contacts.Email")}</label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder={t("contacts.EmailDescription")}
              id="email"
              type="email"
              name="from_email"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label>{t("contacts.message")}</label>
            <textarea
              className="p-[0.5em] rounded-xl text-grayscale-950"
              placeholder={t("contacts.messageDescription")}
              name="message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <input
              className="w-[100px] h-[50px] bg-primary-600 rounded-xl cursor-pointer hover:bg-primary-700"
              type="submit"
              value={!isSent ? 'Send' : 'Done!'}
              
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;