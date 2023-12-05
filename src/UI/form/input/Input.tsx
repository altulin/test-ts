import ErrorText from "./componenets/ErrorText";
import clsx from "clsx";
import style from "./Input.module.scss";
import { FC, ChangeEvent, ReactNode, KeyboardEventHandler } from "react";

interface IInput {
  type: string;
  formik: {
    errors: { [key: string]: string };
    values: {
      [key: string]: string;
    };
    handleBlur: () => void;
    handleChange: () => void;
  };
  placeholder?: string;
  name: string;
  label?: string;
  handleInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  handlKeyDown?: (e: KeyboardEventHandler<HTMLInputElement>) => void;
  children?: ReactNode;
  defaultChecked?: boolean;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
}

const Input: FC<IInput> = ({
  type,
  formik,
  placeholder,
  name,
  label,
  handleInput,
  handlKeyDown,
  children,
  defaultChecked,
  value,
  onChange,
  disabled,
  readOnly,
  className,
}) => {
  return (
    <div
      className={clsx(
        style.block,
        style[`block--${type}`],
        style[`${type}`],
        className
      )}
    >
      <label
        className={clsx(
          style.label,
          style[`label--${type}`],
          style[`${type}__label`]
        )}
      >
        <span
          className={clsx(
            style.name,
            style[`name--${type}`],
            style[`${type}__name`]
          )}
        >
          {label}
        </span>
        <input
          type={type}
          className={clsx(
            style.input,
            style[`input--${type}`],
            style[`${type}__input`],
            formik.errors[`${name}`] && style["input--error"],
            formik.errors[`${name}`] && style[`${type}__input--error`]
          )}
          placeholder={placeholder}
          name={name}
          onInput={() => handleInput}
          value={value ? value : formik.values[`${name}`]}
          onChange={onChange ? onChange : formik.handleChange}
          onBlur={formik.handleBlur}
          defaultChecked={defaultChecked}
          onKeyDown={() => handlKeyDown}
          disabled={disabled}
          readOnly={readOnly}
        />
        {children}
      </label>

      <ErrorText formik={formik} name={name} />
    </div>
  );
};
export default Input;
