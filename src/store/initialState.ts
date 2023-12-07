export interface IFilialItem {
  id: number;
  label: string;
}

export interface IMenu {
  id: number;
  name: string;
  filial: {
    id: number;
    name: string;
  };
  tt: {
    id: number;
    name: string;
  };
  active: boolean;
  export: [];
}

interface IInitialState {
  filials: null | IFilialItem[];
  currentFilial: null | IFilialItem;
  goods: null | IMenu[];
}

export const initialState: IInitialState = {
  filials: null,
  currentFilial: null,
  goods: null,
};
