import { authApi, request } from "../axios";
import { useMutation } from "react-query";
import { client } from "../index";

const signUp = (user) => {
  return request({ url: "/RegisterPage", data: user, method: "post" });
};

export const useSignUp = (setMsg) => {
  return useMutation(signUp, {
    onSuccess: (res) => {
      authApi.defaults.headers["Content-Type"] = "application/json";
      authApi.defaults.headers.Authorization = `Bearer ${res.data?.authorization?.token}`;
      localStorage.setItem("JWT", res.data?.authorization?.token);
      client.setQueryData("User", res.data?.user);
    },
    onError: (err) => {
      setMsg(err.message);
    },
  });
};
