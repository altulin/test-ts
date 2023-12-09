import { FC } from "react";
import { TableCell, Typography } from "@mui/material";

interface ITableData {
  children: string;
}

const TableData: FC<ITableData> = ({ children }) => {
  return (
    <TableCell sx={{ verticalAlign: "top" }}>
      <Typography variant="body1" component="p">
        {children}
      </Typography>
    </TableCell>
  );
};

export default TableData;
