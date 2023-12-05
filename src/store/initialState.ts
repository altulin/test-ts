export interface IModalState {
  [key: string]: { step: number };
}

interface IInitialState {
  isMobileOrTablet: boolean;
  modalState: IModalState | null;
}

export const initialState: IInitialState = {
  isMobileOrTablet: false,
  modalState: { auth: { step: 1 } },
};
