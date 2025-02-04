/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUserLogin, IUserSignUp } from "@/commons/interfaces";
import { api } from "@/lib/axios";

const signup = async (user: IUserSignUp) => {
  let response;
  try {
    response = await api.post("/api/users", user);
  } catch (err: any) {
    response = err.response || { status: 500 };
  }
  return response;
};

const login = async (user: IUserLogin): Promise<any> => {
  let response;
  try {
    response = await api.post("/login", user);

    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data.user));

    api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

  } catch (err: any) {
    response = err.response || { status: 500 };
  }
  return response;
};

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token");

  if (token)
    api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(token)}`;

  return token ? true : false;
}

const logout = (): void => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  api.defaults.headers.common["Authorization"] = '';
}

export const AuthService = {
  signup,
  login,
  isAuthenticated,
  logout,
};