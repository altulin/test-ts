import Modal from "../template/Modal";
import style from "../template/Modal.module.scss";
import clsx from "clsx";
import BackBlock from "../template/BackBlock";
import BtnCheckBig from "@/UI/button/BtnCheckBig";
import { useSelector } from "react-redux";

const ModalError = ({ open }) => {
  const {
    modalState: {
      error: { text },
    },
  } = useSelector((state) => state.app);

  return (
    <Modal open={open} theme={"light"}>
      <div className={clsx(style.modal__form)}>
        <div className={clsx(style["modal-form__wrap"])}>
          <h2 className={clsx(style.modal__title, style["modal__title--succ"])}>
            {text}
          </h2>

          {/* <div className={clsx(style["modal-form__back"])}>
            <p className={clsx(style["modal-links__text"], "revizor__text")}>
              {text}
            </p>
          </div> */}

          <BtnCheckBig
            handle={"clear"}
            className={clsx(style["modal-form__btn"])}
            type={"button"}
          >
            Понятно
          </BtnCheckBig>
        </div>
        <BackBlock />
      </div>
    </Modal>
  );
};
export default ModalError;
