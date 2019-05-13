import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import { enUS, ptBR } from "./index";

const resources = { ...enUS, ...ptBR };

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    debug: true,
    resources,
    ns: ["app"],
    defaultNS: "app",
    lng: "en-US",
    fallbackLng: "en-US",
    keySeparator: false,
    interpolation: {
      escapeValue: false, // react already safes from xss,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });

export default i18n;
