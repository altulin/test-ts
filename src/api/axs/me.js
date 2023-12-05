import axs from "../service/AXS";
import { getUserMe, patchPasswordChange } from "../service/path";

export const meGetUserMe = (jwt) => {
  return axs.get(
    getUserMe,

    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};

// export const mePutUserMe = (
//   jwt,
//   firstName,
//   lastName,
//   email,
//   gender,
//   birthDate
// ) => {
//   return axs.put(
//     putUserMe,
//     { firstName, lastName, email, gender, birthDate },

//     {
//       headers: {
//         Authorization: `Bearer ${jwt}`,
//       },
//     }
//   );
// };

export const mePatchPassChange = (jwt, password) => {
  return axs.patch(
    patchPasswordChange,

    { newPassword: password },

    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};
