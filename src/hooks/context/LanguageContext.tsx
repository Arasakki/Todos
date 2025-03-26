import { createContext, ReactNode, useEffect, useState } from "react";
import LanguageServiceImpl from "../../services/language/LanguageServiceImpl";
import ILanguageService from "../../services/language/ILanguageService";
import LoaderComponent from "components/todos/ui/LoaderComponent";

const LanguageContext = createContext<ILanguageService | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [languageService, setLanguageService] =
    useState<ILanguageService | null>(null);

  useEffect(() => {
    const service = new LanguageServiceImpl();
    service
      .loadTranslations()
      .then(() => {
        setLanguageService(service);
      })
      .catch(() => {
        setLanguageService(service);
      });
  }, []);

  if (!languageService) {
    return <LoaderComponent />;
  }

  return (
    <LanguageContext.Provider value={languageService}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
