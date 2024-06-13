import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import PreloadMedia from "../Components/PreloadMedia";
import { media } from "../Constants/constants";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "../../public/Fonts/Morganite/morganiteFont.css";
import global_en from "../translations/en/global.json";
import global_fr from "../translations/fr/global.json";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      en: {
        global: global_en
      },
      fr: {
        global: global_fr
      },
    },
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <PreloadMedia images={Object.values(media)}>
          <App />
        </PreloadMedia>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
