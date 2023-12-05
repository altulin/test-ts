import Modal from "../template/Modal";
import style from "../template/Modal.module.scss";
import clsx from "clsx";
import { ReactComponent as IconSucc } from "@/images/svg/success.svg";
import BtnCheckBig from "@/UI/button/BtnCheckBig";
import { useSelector } from "react-redux";

const ModalSuccess = ({ open }) => {
  const {
    modalState: {
      success: { text },
    },
  } = useSelector((state) => state.app);
  return (
    <Modal open={open} theme={"light"}>
      <div className={clsx(style.modal__form)}>
        <div className={clsx(style["modal-form__wrap"])}>
          <figure className={clsx(style["modal-form__figure"])}>
            <IconSucc />
          </figure>

          <h2 className={clsx(style.modal__title, style["modal__title--succ"])}>
            {text}
          </h2>

          <div className={clsx(style["modal-form__back"])}>
            <p
              className={clsx(style["modal-links__text"], "revizor__text")}
            ></p>
          </div>

          <BtnCheckBig
            className={clsx(style["modal-form__btn"])}
            type={"button"}
            handle={"clear"}
          >
            Хорошо
          </BtnCheckBig>
        </div>
      </div>
    </Modal>
  );
};
export default ModalSuccess;
