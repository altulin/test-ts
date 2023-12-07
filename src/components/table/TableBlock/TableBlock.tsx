import { FC } from "react";
import { Table, TableContainer } from "@mui/material";
import Head from "../Head/Head";
import { Outlet } from "react-router-dom";

const TableBlock: FC = () => {
  return (
    <TableContainer>
      <Table>
        <Head />
        <Outlet />
      </Table>
    </TableContainer>
  );
};

export default TableBlock;
