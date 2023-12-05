import axs from "../service/AXS";
import { getSettings } from "../service/path";

export const generalSettings = () => {
  return axs.get(
    getSettings,
    {},
    {
      headers: {},
    }
  );
};
