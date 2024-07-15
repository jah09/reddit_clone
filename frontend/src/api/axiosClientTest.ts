import axios from "axios";
import { getCookie, deleteCookie } from "@/utilities/cookie/cookie.ts";
import { useNavigate } from "react-router-dom";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_TEST,
});
// const noAuthRequiredUrls = ["/login"];

axiosClient.interceptors.request.use(
  (config) => {
    const token = getCookie("access_token");
    const isLoginRequest = config.url === "/login";
    if (token && !isLoginRequest) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      const navigate = useNavigate();
      deleteCookie("access_token");
      // router.push({ name: "Signin" });
      navigate("/login");
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
