import { AxiosResponse } from 'axios';
import React, { createContext, useMemo, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { User } from '../interfaces/User';
import { Credentials, getProfile, logIn, logOut } from '../services/auth';

export interface AppContextValue {
  lang: string;
  setLang: (lang: string) => void;
}

export const AppContext = createContext<AppContextValue>({} as AppContextValue);

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState('fr');

  const value = useMemo(
    () => ({
      lang,
      setLang
    }),
    [lang]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
