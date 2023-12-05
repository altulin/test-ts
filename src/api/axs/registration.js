import axs from "../service/AXS";
import { postCreateProfile, postVerifyPhoneNumber } from "../service/path";

// export const regSendVerificationCode = (phoneNumber) => {
//   return axs.post(
//     postSendVerificationCode,
//     {
//       phoneNumber,
//     },
//     {
//       headers: {},
//     }
//   );
// };

export const regVerifyPhoneNumber = (verificationToken, verificationCode) => {
  return axs.post(
    postVerifyPhoneNumber,
    {
      verificationToken,
      verificationCode,
    },
    {
      headers: {},
    }
  );
};

export const regCreateProfile = (
  phoneNumber,
  firstName,
  middleName,
  lastName,
  email,
  password,
  city
) => {
  return axs.post(
    postCreateProfile,
    {
      phoneNumber,
      firstName,
      middleName,
      lastName,
      email,
      password,
      city,
    },
    {
      headers: {},
    }
  );
};
