import axs from "../service/AXS";
import { axsTime } from "../service/AXS";

// export const generalSettings = (limit, skip) => {
//   return axsTime.get(
//     `/posts?limit=${limit}&skip=${skip}&select=title,body`,
//     {},
//     {
//       headers: {},
//     }
//   );
// };

export const getUsers = (limit, skip) => {
  return axsTime.get(
    `/users?limit=${limit}&skip=${skip}`,
    {},
    {
      headers: {},
    }
  );
};

export const getFilterUsers = (date) => {
  return axsTime.get(
    `/users/filter?key=birthDate&value=${date}`,
    {},
    {
      headers: {},
    }
  );
};

// export const getTestTime = (date) => {
//   return axsTest.get(
//     `/site/settings`,
//     {},
//     {
//       headers: {},
//     }
//   );
// };
