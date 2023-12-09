import { FC, ReactNode } from "react";
import { Stack, IconButton, TableCell } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import style from "./TableIcons.module.scss";

interface ITableButton {
  children: ReactNode;
}

const TableButton: FC<ITableButton> = ({ children }) => {
  return <IconButton className={style.button}>{children}</IconButton>;
};

const TableIcons: FC = () => {
  const iconStyle = { color: "#657A9D" };
  return (
    <TableCell className={style.cell} sx={{ verticalAlign: "top" }}>
      <Stack direction="row">
        <TableButton>
          <BarChartIcon sx={iconStyle} />
        </TableButton>
        <TableButton>
          <CreateIcon sx={iconStyle} />
        </TableButton>
        <TableButton>
          <DeleteIcon sx={iconStyle} />
        </TableButton>
      </Stack>
    </TableCell>
  );
};

export default TableIcons;
