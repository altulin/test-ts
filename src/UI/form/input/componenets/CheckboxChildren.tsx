import CheckIcon from "@/images/svg/eye.svg?react";
import style from "../Input.module.scss";
import clsx from "clsx";

const CheckboxChildren = () => {
  return (
    <>
      <span className={clsx(style.indicator)}>
        <CheckIcon />
      </span>
      <span className={clsx(style.indicator__label)}>
        <span>Согласен(на)</span>
        &nbsp;
        <a
          className={clsx(style.indicator__link)}
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          с правилами акции
        </a>
      </span>
    </>
  );
};
export default CheckboxChildren;
