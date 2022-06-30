import API from './APIClient';

export interface Credentials {
  email: string;
  password: string;
  remember: boolean;
}

export async function logIn(credentials: Credentials) {
  const { data } = await API.post('/auth/login', credentials);
  return data;
}

export async function logOut() {
  return API.post('/auth/logout');
}

export async function getProfile() {
  const { data } = await API.get('/auth/me');
  return data;
}
