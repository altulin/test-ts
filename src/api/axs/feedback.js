import axs from "../service/AXS";
import { postSend, getFaq } from "../service/path";

export const feedbackFaq = () => {
  return axs.get(
    getFaq,
    {},
    {
      headers: {},
    }
  );
};

export const feedbackSend = (email, name, text) => {
  return axs.post(
    postSend,
    {
      email,
      name,
      text,
    },
    {
      headers: {},
    }
  );
};
