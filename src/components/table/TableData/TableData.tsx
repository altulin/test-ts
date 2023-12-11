import { FC } from "react";
import { TableCell, Typography } from "@mui/material";
import { tdStyle } from "../Head/script";
import style from "./TableData.module.scss";

interface ITableData {
  children: string;
}

const TableData: FC<ITableData> = ({ children }) => {
  return (
    <TableCell sx={{ verticalAlign: "top", ...tdStyle }}>
      <Typography variant="body1" component="p" className={style.td}>
        {children}
      </Typography>
    </TableCell>
  );
};

export default TableData;
