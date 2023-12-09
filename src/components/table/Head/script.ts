export const sxField = {
  "& .MuiFormLabel-root.MuiFormLabel-filled": {
    transform: "translate(0.875rem, -0.5625rem) scale(0.75)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    transform: "translate(0.875rem, -0.5625rem) scale(0.75)",
  },
};

export const sxCell = { pl: "1rem", pr: "1rem" };

interface IFields {
  name: string;
  label: string;
  disabled?: boolean;
}

export const fields: IFields[] = [
  { name: "name", label: "Название меню" },
  { name: "filial", label: "Филиал" },
  { name: "point", label: "Торговая точка" },
];

export const active = [
  { label: "Активно", id: 1 },
  { label: "Не активно", id: 2 },
];
