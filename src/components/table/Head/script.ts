export const sxField = {
  "& .MuiFormLabel-root.MuiFormLabel-filled": {
    transform: "translate(0.875rem, -0.5625rem) scale(0.75)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    transform: "translate(0.875rem, -0.5625rem) scale(0.75)",
  },
};

export const sxCell = { pl: "1rem", pr: "1rem" };

export const tdStyle = { width: "16%", border: 0 };

interface IFields {
  name: string;
  label: string;
  disabled?: boolean;
}

export const fields: IFields[] = [
  { name: "name", label: "Название меню" },
  { name: "filial", label: "Филиал" },
  { name: "tt", label: "Торговая точка" },
];

export interface IActive {
  label: string;
  value: "active" | "no_active";
}

export const active: IActive[] = [
  { label: "Активно", value: "active" },
  { label: "Не активно", value: "no_active" },
];

export const getParams = (obj: { [key: string]: string } | null) => {
  if (!obj) return;
  const arr = Object.entries(obj);
  const filtered = arr.filter(([, value]) => value.length);
  return Object.fromEntries(filtered);
};
