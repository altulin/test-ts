import axs from "../service/AXS";
import { postAuthorization, testPath } from "../service/path";

export const authAuthorization = (phoneNumber, password) => {
  return axs.post(
    postAuthorization,
    {
      phoneNumber,
      password,
    },
    {
      headers: {},
    }
  );
};

export const getTest = () => {
  return axs.get(
    testPath,
    {},
    {
      headers: {},
    }
  );
};
