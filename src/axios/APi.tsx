import axios from "axios";

const instance = axios.create({
  baseURL: `https://immersive-dashapi.my.id`,
});

export default {
  Login: (email: string, password: string) =>
    instance({
      method: "POST",
      url: "/login",
      data: {
        email,
        password,
      },
    }),
};
