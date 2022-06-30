import { useContext } from 'react';
import { AppContext } from '../contexts/AppProvider';
import { trad } from '../lang/trad';

export const t = (page: string, key: string) => {
  const { lang } = useContext(AppContext);
  return trad[lang][page][key];
};
