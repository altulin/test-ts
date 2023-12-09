import axios from "axios";

export const axs = axios.create({
  baseURL: import.meta.env.VITE_APP_API_HOST,
});

export const getFilials = () => {
  return axs.get(
    "/filial/",

    {
      headers: {},
    }
  );
};

export const getPagesGoods = (filialId: number) => {
  return axs.get(
    `/filial/${filialId}/menu/`,

    {
      params: {
        limit: 100,
        page: 1,
        // name: name,
      },
    }
  );
};
