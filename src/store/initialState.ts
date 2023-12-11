// import { active } from "@/components/table/Head/script";

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
  pages: null | number;
  search: { [key: string]: string } | null;
}

export const initialState: IInitialState = {
  filials: null,
  currentFilial: null,
  goods: null,
  pages: null,
  // search: { active: active[0].value },
  search: null,
};
