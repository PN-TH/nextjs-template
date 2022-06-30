import { AxiosResponse } from 'axios';
import React, { createContext, useMemo } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { User } from '../interfaces/User';
import { Credentials, getProfile, logIn, logOut } from '../services/auth';

export interface UserContextValue {
  user?: User;
  loadingProfile: boolean;
  loginAnGetProfile(creds: Credentials): Promise<void>;
  userIsAdmin: boolean;
  logoutAndResetProfile(): Promise<AxiosResponse>;
}

export const UserContext = createContext<UserContextValue>({} as UserContextValue);

export default function UserProvider({ children }: { children: React.ReactNode }) {
  /*  const queryClient = useQueryClient();
  const logoutAndResetProfile = async () => {
    queryClient.cancelQueries('profile');
    queryClient.setQueryData('profile', undefined);
    return logOut();
  };
  const { data: user, isFetching } = useQuery('profile', getProfile, {
    retry: false,
    onError: logoutAndResetProfile
  });

  const loadingProfile = !user && isFetching;

  const loginAnGetProfile = async (creds: Credentials) => {
    await logIn(creds);
    queryClient.invalidateQueries('profile');
  };

  const userIsAdmin = user?.TypeCompte === 1; */

  /* const value = useMemo(
    () => ({
      user,
      loadingProfile,
      loginAnGetProfile,
      userIsAdmin,
      logoutAndResetProfile
    }),
    [user, loadingProfile, userIsAdmin]
  ); */

  const value: any = {};

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
