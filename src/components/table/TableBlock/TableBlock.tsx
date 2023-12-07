import { FC } from "react";
import { Table, TableContainer } from "@mui/material";
import Head from "../Head/Head";

const TableBlock: FC = () => {
  return (
    <TableContainer>
      <Table>
        <Head />
      </Table>
    </TableContainer>
  );
};

export default TableBlock;
