import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const TranslateContext = createContext();
const languages = {
    en: {
        title: "Multi-language App",
        greeting: "Hello, welcome to our app!",
        description: "This app supports multiple languages.",
        languageSelector: "Select Language:"
    },
    ko: {
        title: "다국어 앱",
        greeting: "안녕하세요, 우리 앱에 오신 것을 환영합니다!",
        description: "이 앱은 여러 언어를 지원합니다.",
        languageSelector: "언어 선택:"
    },
    ja: {
        title: "多言語アプリ",
        greeting: "こんにちは、私たちのアプリへようこそ！",
        description: "このアプリは複数の言語をサポートしています。",
        languageSelector: "言語を選択："
    }
};
export const TranslateProvider = ({children}) => {
    const [curLang , setCurLang] = useState('ko');
    const getContent = () => {
        return languages[curLang]
    }
    const changeLanguage = (lang) => {
        setCurLang(lang);
    }

  return (
    <TranslateContext.Provider value={{changeLanguage , getContent}}>{children}</TranslateContext.Provider>
  )
}

