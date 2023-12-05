// Обратная связь
//  получение списка вопросов и ответов
export const getFaq = "/feedback/faq";

// Отправка фидбека
export const postSend = "/feedback/send";

// Викторина
// Разыграть приз
// export const getDrawPrize = "/quiz/draw-prize";

// Есть ли попытки розыгрыша
// export const getIsPossibleStart = "/quiz/is-possible-start";

// Список чеков пользователя
export const getReceipt = "/quiz/receipts";

// Модно ли загружать чеки
export const getAllowedUploadReceipt = "/quiz/allowed-upload-receipt";

// Список возможных призов
export const getPrizes = "/quiz/prizes";

// Список выигранных призов
export const getWinningPrizes = "/quiz/winning-prizes";

// Список победителей призов.
export const getWinnings = "/quiz/winnings";

//текущая неделя розыгрыша
export const getCurrentWeek = "/quiz/current-week";

//По запросу скачивается файл с сертификатом.
export const getDownloadCertificate = "/quiz/download-certificate";

//Список недель
export const getWeeks = "/quiz/weeks";

// Общее
// Получение ссылок на политику иправила
export const getSettings = "/site/settings";

//Авторизация
//Авторизация по номеру телефона и паролю
export const postAuthorization = "/users/authorization";

//Пользователь
//Получение профиля пользователя
export const getUserMe = "/users/me";

//Изменение профиля пользователя
// export const putUserMe = "/users/me";

//Именение пароля
export const patchPasswordChange = "/users/password/change";

//Сброс пароля
// export const postPasswordRecovery = "/users/password/recovery";

// Восстановление пароля
//Отправка кода подтверждения
export const postSendVerificationCode =
  "/users/recovery-password/step-1/send-verification-code";
//Подтверждение номера телефона
export const postVerifyCode = "/users/recovery-password/step-2/verify-code";
//Установка нового пароля
export const postUpdatePassword =
  "/users/recovery-password/step-3/update-password";

//Регистрация
// Сохранение профиля и отправка кода подтверждения
export const postCreateProfile = "/users/registration/step-1/create-profile";
// Подтверждение номера телефона
export const postVerifyPhoneNumber =
  "/users/registration/step-2/verify-phone-number";

// Товары
// Список товаров
export const getGoods = "/goods/";

// Тест
export const testPath = "posts";
