import { IModalState } from "@/store/initialState";

const useGetCurrentModal = (modalState: IModalState | null) => {
  if (!modalState) return;

  const key = Object.keys(modalState)[0];
  return `${key}-${modalState[key]["step"]}`;

  // const modalName = Object.keys(modalState).filter((item) => {
  //   return modalState[`${item}`].step !== 0;
  // });

  // if (modalName.length !== 0) {
  //   const name = modalName[0];
  //   const numStep = modalState[`${modalName}`].step;

  //   return `${name}-${numStep}`;
  // } else {
  //   return null;
  // }
};

export default useGetCurrentModal;
