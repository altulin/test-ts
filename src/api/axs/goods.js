import axs from "../service/AXS";
import { getGoods } from "../service/path";

export const goodsGetGoods = () => {
  return axs.get(
    getGoods,

    {
      headers: {},
    }
  );
};
