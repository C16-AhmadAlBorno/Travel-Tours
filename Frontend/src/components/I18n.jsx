import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        login: "Login",
        register: "Register",
        cart: "Cart",
        contact: "Contact Us",
        logout: "Logout",
      },
    },
    ar: {
      translation: {
        home: "الرئيسية",
        login: "تسجيل دخول",
        register: "إنشاء حساب",
        Cart : "السلة",
        ContactUs: "اتصل بنا",
        logout: "تسجيل خروج",
        AboutUs: "نحن",
      },
    },
  },

  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
