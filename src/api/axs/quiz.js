import axs from "../service/AXS";
import {
  getDownloadCertificate,
  getAllowedUploadReceipt,
  getReceipt,
  getPrizes,
  getWinningPrizes,
  getWinnings,
  getCurrentWeek,
  getWeeks,
} from "../service/path";

export const quizWinnings = (prize_type, limit, skip) => {
  return axs.get(
    getWinnings,
    {
      params: {
        prize_type,
        limit,
        skip,
      },
    },

    {
      headers: {},
    }
  );
};
export const quizWinningsSearchWeek = (prize_type, limit, skip, week) => {
  return axs.get(
    getWinnings,
    {
      params: {
        prize_type,
        limit,
        skip,
        week,
      },
    },

    {
      headers: {},
    }
  );
};
export const quizWinningsSearchEmail = (prize_type, limit, skip, email) => {
  return axs.get(
    getWinnings,
    {
      params: {
        prize_type,
        limit,
        skip,
        email,
      },
    },

    {
      headers: {},
    }
  );
};

export const quizPrizes = () => {
  return axs.get(
    getPrizes,

    {
      headers: {},
    }
  );
};

export const quizCurrentWeek = () => {
  return axs.get(
    getCurrentWeek,

    {
      headers: {},
    }
  );
};

export const quizWeeks = () => {
  return axs.get(
    getWeeks,

    {
      headers: {},
    }
  );
};

export const quizGetWinningPrizes = (jwt) => {
  return axs.get(
    getWinningPrizes,

    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};

export const quizGetReceipt = (jwt) => {
  return axs.get(
    getReceipt,

    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};

export const quizGetAllowedUploadReceipt = (jwt) => {
  return axs.get(
    getAllowedUploadReceipt,

    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
};

export const quizGetDownloadCertificat = (jwt, type) => {
  return axs.get(
    `${getDownloadCertificate}/${type}`,

    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      responseType: "blob",
    }
  );
};
