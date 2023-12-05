import  { useState } from "react";
import { useFormik } from "formik";
import clsx from "clsx";
import * as yup from "yup";
import Input from "../input/Input";
import { onNameInput } from "../input/js/masks/name";
import { onPhoneInput } from "../input/js/masks/phone";
import { onPhoneKeyDown } from "../input/js/masks/phone";
import CheckboxChildren from "../input/componenets/CheckboxChildren";
import RadioChildren from "../input/componenets/RadioChildren";
import {
  required,
  valid,
  nameMin,
  nameMax,
  passwordMin,
  passwordMax,
  requiredCeck,
} from "../input/js/errText";
import ButtonEye from "../input/componenets/ButtonEye";

const Form = () => {
  const [isTypeText, setType] = useState(false);
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required(required)
      .matches(/[^-]$/, valid)
      .min(2, nameMin)
      .max(50, nameMax),

    password: yup
      .string()
      .required(required)
      .min(8, passwordMin)
      .max(14, passwordMax),

    rule: yup.boolean().oneOf([true], requiredCeck),
    phone: yup.string().required(required).min(18, valid),

    email: yup
      .string()
      .required(required)
      .matches(/@[^.]*\./, valid)
      .email(valid),

    // age: yup
    //   .date()
    //   .required(required)
    //   .transform((_, originalValue) => {
    //     if (originalValue.length < 9) {
    //       return parse("01.01.1900", "dd.MM.yyyy", new Date());
    //     }
    //     const parsedDate = isDate(originalValue)
    //       ? originalValue
    //       : parse(originalValue, "dd.MM.yyyy", new Date());
    //     return parsedDate;
    //   })
    //   .max(today, valid),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      rule: true,
      phone: "",
      email: "",
      gender: "man",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={clsx("form")}>
        <div className="form__block">
          <Input
            formik={formik}
            placeholder={"имя"}
            name={"name"}
            label={"имя"}
            handleInput={onNameInput}
            type={"text"}
          />
        </div>
        <div className="form__block">
          <Input
            formik={formik}
            placeholder={"pass"}
            name={"password"}
            label={"pass"}
            type={isTypeText ? "text" : "password"}
          >
            <ButtonEye isTypeText={isTypeText} setType={setType} />
          </Input>
        </div>

        <div className="form__block">
          <Input
            formik={formik}
            name={"rule"}
            type={"checkbox"}
            defaultChecked={true}
          >
            <CheckboxChildren />
          </Input>
        </div>

        <div className="form__block">
          <Input
            formik={formik}
            name={"phone"}
            type={"tel"}
            placeholder={"+7 (___) __ ______"}
            label={"телефон"}
            handleInput={onPhoneInput}
            handlKeyDown={onPhoneKeyDown}
          ></Input>
        </div>

        <div className="form__block">
          <Input
            formik={formik}
            name={"email"}
            type={"email"}
            placeholder={"example@mail.ru"}
            label={"Email"}
          ></Input>
        </div>

        <div className="form__block">
          <Input
            formik={formik}
            name={"gender"}
            type={"radio"}
            value="man"
            defaultChecked={true}
            onChange={formik.getFieldProps("gender").onChange}
            label={"Мужской"}
          >
            <RadioChildren />
          </Input>

          <Input
            formik={formik}
            name={"gender"}
            type={"radio"}
            value="woman"
            onChange={formik.getFieldProps("gender").onChange}
            label={"Женский"}
          >
            <RadioChildren />
          </Input>
        </div>
        <button type="submit" disabled={!formik.isValid || !formik.dirty}>
          отправить
        </button>
      </form>
    </div>
  );
};
export default Form;
// placeholder, name, label, handleInput
