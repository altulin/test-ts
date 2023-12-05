import ModalAuth1 from "./auth/ModalAuth1";
import useGetCurrentModal from "@/hooks/getCurrentModal";
import { useAppSelector } from "@/hooks/hook";

const ModalManager = () => {
  const { modalState } = useAppSelector((state) => state.app);
  const modal = useGetCurrentModal(modalState);

  return (
    <>
      <ModalAuth1 open={modal === "auth-1"} />
    </>
  );
};

export default ModalManager;
