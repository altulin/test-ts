import axios from "axios";

const axs = axios.create({
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

export const getPagesGoods = (filialId: number, name: string | undefined) => {
  return axs.get(
    `/filial/${filialId}/${name}/`,

    {
      params: {
        limit: 100,
      },
    }
  );
};
