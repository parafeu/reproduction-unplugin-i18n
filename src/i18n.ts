import { createI18n } from "vue-i18n";
import fr from "@src/lang/fr.json";

const messages = {
    fr
};

export const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'fr',
    messages
});

export default i18n;
