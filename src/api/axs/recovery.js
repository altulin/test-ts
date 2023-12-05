import axs from "../service/AXS";
import {
  postSendVerificationCode,
  postVerifyCode,
  postUpdatePassword,
} from "../service/path";

export const recSendVerificationCode = (phoneNumber) => {
  return axs.post(
    postSendVerificationCode,
    {
      phoneNumber,
    },
    {
      headers: {},
    }
  );
};

export const recVerifyCode = (verificationToken, verificationCode) => {
  return axs.post(
    postVerifyCode,
    {
      verificationToken,
      verificationCode,
    },
    {
      headers: {},
    }
  );
};

export const recUpdatePassword = (verificationToken, password) => {
  return axs.post(
    postUpdatePassword,
    {
      verificationToken,
      password,
    },
    {
      headers: {},
    }
  );
};
