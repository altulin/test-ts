import style from "../Input.module.scss";
import clsx from "clsx";
import { FC } from "react";

interface IErrorText {
  formik: {
    errors: {
      [key: string]: string;
    };
  };
  name: string;
}

const ErrorText: FC<IErrorText> = ({ formik, name }) => {
  return (
    <>
      {formik.errors[`${name}`] ? (
        <p className={clsx(style.error)}>{formik.errors[`${name}`]}</p>
      ) : null}
    </>
  );
};
export default ErrorText;
