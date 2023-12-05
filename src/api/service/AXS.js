import axios from "axios";
import { getErrText } from "./getErrText";

const axs = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_HOST}`,
});

export const axsTime = axios.create({
  baseURL: `https://dummyjson.com`,
});

axs.interceptors.response.use(
  function (response) {
    // store.dispatch(setErrorCode(null));
    return response;
  },
  function (error) {
    // store.dispatch(setErrorCode(error.response.status));

    // if (error.response.status === 401) {
    //   localStorage.clear();
    //   store.dispatch(setUser(null));
    //   return;
    // }
    getErrText(error);
  }
);

export default axs;
