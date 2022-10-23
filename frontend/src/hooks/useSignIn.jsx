import { authApi, request } from "../axios";
import { useMutation } from "react-query";
import { client } from "../index";

const signIn = (user) => {
  return request({ url: "/LandingPage", data: user, method: "post" });
};

export const useSignIn = (setMessage) => {
  return useMutation(signIn, {
    onSuccess: (res) => {
      authApi.defaults.headers["Content-Type"] = "application/json";
      authApi.defaults.headers.Authorization = `Bearer ${res.data?.authorization?.token}`;
      localStorage.setItem("JWT", res.data?.authorization?.token);
      client.setQueryData("User", res.data?.user);
    },
    onError: () => {
      setMessage("Your Email/Password doesn't match");
    },
  });
};
