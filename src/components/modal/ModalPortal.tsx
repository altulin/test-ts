import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

interface IModalPortal {
  children: ReactNode;
  open: boolean;
}

const ModalPortal: FC<IModalPortal> = ({ children, open = false }) => {
  if (!open) return null;

  return ReactDOM.createPortal(children, document.body);
};
export default ModalPortal;
