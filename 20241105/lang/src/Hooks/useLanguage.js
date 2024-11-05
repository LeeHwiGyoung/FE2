import { useContext } from "react";
import { TranslateContext } from "../Context/TranslateContext";

const useLanguage = () => {
  const context = useContext(TranslateContext);

  return {
    changeLanguage: context.changeLanguage,
    getContent: context.getContent,
  };
};

export default useLanguage;
