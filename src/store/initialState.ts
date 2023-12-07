export interface IFilialItem {
  id: number;
  label: string;
}

interface IInitialState {
  filials: null | IFilialItem[];
  currentFilial: null | IFilialItem;
}

export const initialState: IInitialState = {
  filials: null,
  currentFilial: null,
};
